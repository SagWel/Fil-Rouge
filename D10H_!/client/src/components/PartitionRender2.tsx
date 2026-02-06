import { Box, Text } from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INoteData, IPartitions } from "../types/partitions";
import { Renderer, 
        Stave, 
        StaveNote, 
        Voice, 
        Formatter, 
        Beam, 
        Dot, 
        Accidental, 
        StaveTie, 
        SVGContext,
        Tickable,
        Tuplet
    } from 'vexflow'

import '../style.css'

export interface IMeasureObject {
    stave: Stave;
    voice: Voice;
    beams: Beam[];
    ties: StaveTie[];
    tuplets: Tuplet[];
}

export interface INoteSynchro {
    startTimeMs: number,
    durationMs: number,
    id?: string,
    key: string,
    x: number
    y: number
}

export interface IPartitionRenderProps {onPlay: boolean}

const PartitionRender2: React.FC<IPartitionRenderProps> = ({onPlay}) => {

    const mockPartition: IPartitions = {
        id: 2,
        title: "L'Éveil Musical",
        artist: { id: 102, name: "Studio Gemini", picture: "", partitions: [], albums: [] },
        difficulty: 2,
        instruments: { 
            currentInstrument: { id: "piano", name: "piano", imgSrc: "../../public/img/Piano.png" }, 
            othersInstruments: [] 
        },
        bpm: 105, // Tempo un peu plus rapide
        time_signature: "4/4",
        clef: "treble",
        clef_signature: "C", // Do Majeur (pas d'altérations à la clé)
        deezer_link: "",
        audio_preview: "",
        partition_preview: "",
        duration: 45,
        genre: { id: 1, name: "Étude", picture: "", picture_small: "", picture_medium: "", picture_big: "", picture_xl: "" },
        measures: [
            // MESURE 1 : Arpège ascendant simple
            { id: 1, notes: [
                { keys: ["c/4"], duration: "q" }, 
                { keys: ["e/4"], duration: "q" }, 
                { keys: ["g/4"], duration: "q" }, 
                { keys: ["c/5"], duration: "q" }
            ]},
            // MESURE 2 : Rythme varié (Croches et noire)
            { id: 2, notes: [
                { keys: ["d/5"], duration: "8", beam: "start" }, 
                { keys: ["c/5"], duration: "8", beam: "end" }, 
                { keys: ["b/4"], duration: "8", beam: "start" }, 
                { keys: ["a/4"], duration: "8", beam: "end" }, 
                { keys: ["g/4"], duration: "h" }
            ]},
            // MESURE 3 : Silence et accords
            { id: 3, notes: [
                { keys: ["b/4"], duration: "q", isRest: true }, 
                { keys: ["f/4", "a/4"], duration: "q" }, 
                { keys: ["e/4", "g/4"], duration: "h" }
            ]},
            // MESURE 4 : Syncopes légères
            { id: 4, notes: [
                { keys: ["f/4"], duration: "q" }, 
                { keys: ["a/4"], duration: "8", beam: "start" }, 
                { keys: ["c/5"], duration: "8", beam: "end" }, 
                { keys: ["b/4"], duration: "q" }, 
                { keys: ["g/4"], duration: "q" }
            ]},
            // MESURE 5 : Double-croches (pour tester les beams serrés)
            { id: 5, notes: [
                { keys: ["c/5"], duration: "16", beam: "start" }, 
                { keys: ["b/4"], duration: "16", beam: "continue" }, 
                { keys: ["a/4"], duration: "16", beam: "continue" }, 
                { keys: ["g/4"], duration: "16", beam: "end" }, 
                { keys: ["f/4"], duration: "q" },
                { keys: ["d/4"], duration: "q" },
                { keys: ["g/4"], duration: "q" }
            ]},
            // MESURE 6 MODIFIÉE : Lance une liaison vers la mesure 7
            { id: 6, notes: [
                { keys: ["c/4", "e/4", "g/4"], duration: "w", ties: ["start"] }
            ]}, 
            // MESURE 7 : Test de liaison simple entre deux notes
            { id: 7, notes: [
                { keys: ["g/4"], duration: "h", ties: ["end"] }, // Reçoit la liaison de la mesure précédente ou interne
                { keys: ["g/4"], duration: "h" }
            ]},
            // MESURE 8 : Test de liaisons sur un accord complet (plus complexe)
            { id: 8, notes: [
                { keys: ["c/4", "e/4", "g/4"], duration: "h", ties: ["start"] },
                { keys: ["c/4", "e/4", "g/4"], duration: "h", ties: ["end"] }
            ]}
        ]
    };

    // Refs
    const svgPartitionRef = useRef<HTMLDivElement | null>(null)
    const contextPartitionRef = useRef<SVGContext | null>(null)

    const svgCursorRef = useRef<HTMLDivElement | null>(null)
    const contextCursorRef = useRef<SVGContext | null>(null)

    const measuresToRenderRef = useRef<any[]>([])
    const lastNoteIdRef = useRef<HTMLElement | null>(null)
    const notesMapRef = useRef<Map<string, StaveNote>>(new Map());
    const staveRef = useRef<Stave | null>(null)
    const dataArrayRef = useRef<INoteSynchro[]>([])

    const currentTimeRef = useRef<number>(0)

    const containerRef = useRef<HTMLDivElement | null>(null)
    const lastScrolledYRef = useRef<number>(-1)

    //States
    const [partition, setPartition] = useState<IPartitions | undefined>(undefined)

    const hideScrollbarStyle = {
        '&::WebkitScrollbar': {
        display: 'none',
        },
        'msOverflowStyle': 'none',
        'scrollbarWidth': 'none', 
    };

    const fetchPartition = async (URL: string) => {
        try {
            const res = await fetch(`${URL}`)

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            setPartition(data)
        } catch (error) {
            console.error('Impossible de récupérer les donnée de la partition:', error);
        }
    }

    //Draw beams on Stave
    const drawBeams = (context: SVGContext, beams: Beam[]) => {
        beams.forEach((beam: Beam) => {
            beam.setContext(context);
            beam.draw();
        });
    };

    const findBeamForNote = (note: StaveNote, beams: Beam[]) => {
        return beams.find(b => b.getNotes().includes(note)) || null
    }

    //Draw ties on Staves
    const drawTies = (context: SVGContext, ties: StaveTie[]) => {
        ties.forEach((tie: StaveTie) => {
            tie.setContext(context);
            tie.draw();
        });
    };

    //
    const mapToVexFlow = (notes: INoteData[], clef: string, tieGroup: any) => {
        const beams: Beam[] = []
        let currentBeamGroup: StaveNote[] = []

        const ties: StaveTie[] = []

        const tuplets: Tuplet[] = []
        let currentTupletGroup: StaveNote[] = []

        const allNotes: StaveNote[] = []

        notes.forEach(n => {
            let duration = n.duration
            if (n.dots) duration += "d"
            if (n.isRest) duration += "r"

            console.log(n.keys);
            
            const note: StaveNote = new StaveNote({keys: n.keys, duration: duration, clef: clef} )

            if (n.dots) note.addModifier(new Dot(), 0)
            if (n.accidental) note.addModifier(new Accidental(n.accidental), 0)

            if (n.beam === "start") currentBeamGroup.push(note)
            if (n.beam === "continue") currentBeamGroup.push(note)
            if (n.beam === "end") {
                currentBeamGroup.push(note)
                beams.push(new Beam(currentBeamGroup))
                currentBeamGroup = []
            }

            if (n.ties?.[0] === "start") tieGroup.first.push(note)
            if (n.ties?.[0] === "end") {
                tieGroup.first.push(note)
                if (tieGroup.first.length === 2) {
                    const firstNote = tieGroup.first[0];
                    const firstKeys = firstNote.getKeys();

                    const lastNote = tieGroup.first[1];
                    const lastKeys = lastNote.getKeys();

                    const firstIndices: number[] = [];
                    const lastIndices: number[] = []

                    lastKeys.forEach((lastKey : string, lastIdx: number) => {
                        const firstIdx: number = firstKeys.indexOf(lastKey);
                        if (firstIdx !== -1) {
                            firstIndices.push(firstIdx);
                            lastIndices.push(lastIdx);
                        }
                    });

                    const finalFirst = firstIndices.length > 0 ? firstIndices : [0];
                    const finalLast = lastIndices.length > 0 ? lastIndices : [0];

                    ties.push(new StaveTie({
                        firstNote: tieGroup.first[0],
                        lastNote: tieGroup.first[1],
                        firstIndexes: finalFirst,
                        lastIndexes: finalLast
                    }))
                }
                tieGroup.first = []
            }
            if (n.ties && n.ties.length > 1 && n.ties[1] === "start") tieGroup.second.push(note)
            if (n.ties && n.ties.length > 1 && n.ties[1] === "end") {
                tieGroup.second.push(note)
                if (tieGroup.second.length === 2) {
                    ties.push(new StaveTie({
                        firstNote: tieGroup.second[0],
                        lastNote: tieGroup.second[1]
                    }).setDirection(2))
                }
                tieGroup.second = []
            }

            if (n.tuplet?.type === "start") currentTupletGroup.push(note)
            if (n.tuplet?.type === "mid") currentTupletGroup.push(note)
            if (n.tuplet?.type === "end") {
                currentTupletGroup.push(note)
                tuplets.push(new Tuplet(currentTupletGroup, {numNotes: n.tuplet.num, notesOccupied: n.tuplet.occupied, location: Tuplet.LOCATION_TOP}))
                currentTupletGroup = []
            }
            allNotes.push(note)
            
        })
        return { allNotes, beams, ties, tuplets }
    }

    //
    const renderAllMeasures = (context: SVGContext , measures: IMeasureObject[]) => {
            measures.forEach(({ stave, voice, beams, ties, tuplets}) => {
                stave.setContext(context).draw()
                voice.draw(context, stave)
    
                if (beams?.length > 0) drawBeams(context, beams)
                if (ties?.length > 0) drawTies(context, ties)
                if (tuplets?.length > 0) {
                    tuplets.forEach(t => t.setContext(context).draw())
                }
            })
            staveRef.current = measures[0].stave
        }

    const drawCursor = (context: SVGContext, stave: Stave, svg: HTMLElement) => {
        context.beginPath()
        context.setLineWidth(5)
        context.setStrokeStyle("rgba(255, 129, 92, 0.7)")
        context.moveTo(0,0)
        context.lineTo(0, stave.getHeight())
        context.stroke()

        const cursor = svg.lastElementChild as HTMLElement

        if (cursor) cursor.id = "music-cursor"
    }

    const moveCursor = (cursor: HTMLElement, positionX: number, positionY: number) => {
        cursor.style.transform = `translate(${positionX}px, ${positionY}px)`
    }

    //found note on time
    const findNote = (currentTimeMs: number, synchronizationData: INoteSynchro[]) => {
        const noteNow = synchronizationData.find((n) => 
            currentTimeMs >= n.startTimeMs && currentTimeMs < (n.startTimeMs + n.durationMs)
        );
        return noteNow
    }

    //update notes color on time
    const onTimeUpdate = (currentNote: HTMLElement | null) => {
        const lastNote: HTMLElement | null = lastNoteIdRef.current
        
        if (currentNote && currentNote !== lastNote) {
            if (lastNote) lastNote.classList.remove('note-active')
            currentNote.classList.add('note-active')
            lastNoteIdRef.current = currentNote
        }
    }

    //Params
    const { morceauId } = useParams()
    
    //fetch MySQL DataBase
    useEffect(() => {
        if (morceauId) {
            fetchPartition(`http://localhost/D10h_server/public/api/get_partition.php?id=${morceauId}`)
        } else {
            console.error('ID manquant ...')
        }
    },[morceauId])

    useEffect(() => {

        if (!partition) return

        if (!svgPartitionRef.current || !svgCursorRef.current|| !containerRef) return console.error('Erreur lors du chargement de la partition ...');

        if (svgPartitionRef.current) svgPartitionRef.current.innerHTML = "";
        
        const containerWidth: number = containerRef.current?.offsetWidth ?? 800;
        const measurePerLine: number = 4;
        const totalLines: number = Math.ceil(partition.measures.length / measurePerLine);
        const firstMeasureExtraWidth = 80
        const dynamicHeight: number = totalLines * 160 + 50;

        const rendererPartition = new Renderer(svgPartitionRef.current, Renderer.Backends.SVG);
        rendererPartition.resize(Math.round(containerWidth), Math.round(dynamicHeight));

        const contextPartition = (rendererPartition.getContext() as SVGContext);
        contextPartitionRef.current = contextPartition;

        const availableWidth: number = containerWidth - 40 - firstMeasureExtraWidth;
        const fixedMeasureWidth: number = availableWidth / measurePerLine;

        let currentX = 20;
        let currentY = 0;

        
        const tieGroups = {
            first: [] as StaveNote[],
            second: [] as StaveNote[]
        }

        const measuresToRender: IMeasureObject[] = [];

        console.log(partition.clef);
        

        partition.measures.forEach((measure, index) => {

            const { allNotes: measureNotes, beams: measureBeams, ties: measureTies, tuplets: measureTuplets } = mapToVexFlow(measure.notes, partition.clef, tieGroups)

            if (index > 0 && index % measurePerLine === 0) {
                currentX = 20;
                currentY += 160;
            }

            const stave: Stave = new Stave(currentX, currentY, fixedMeasureWidth)

            if (index % measurePerLine === 0) {
                stave.addClef(partition.clef)
                stave.addTimeSignature(partition.time_signature)
                if (partition.clef_signature) stave.addKeySignature(partition.clef_signature)
                stave.setWidth(stave.getBoundingBox().getW() + 50)
                currentX += 50
            } else {
                stave.setNoteStartX(stave.getX() + 10);
            }


            try {
                const [numBeats, beatValue] = partition.time_signature.split('/').map(Number);
                const voice = new Voice({ numBeats:numBeats, beatValue:beatValue });

                voice.addTickables(measureNotes);          

                const formattingWidth = stave.getWidth() - (stave.getNoteStartX() - stave.getX()) - 10;

                new Formatter().joinVoices([voice]).format([voice], formattingWidth);
                
                measuresToRender.push({ stave, voice, beams: measureBeams, ties: measureTies, tuplets : measureTuplets });
            } catch (error) {
                console.error(`%c 🚨 ERREUR VEXFLOW - Mesure n°${index + 1} `, 'background: #222; color: #ff0000; font-size: 14px; font-weight: bold;');
                console.warn("Détails de l'erreur :", error);
                console.log("Contenu JSON de cette mesure :", measure);
                
                const emptyVoice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);
                measuresToRender.push({ stave, voice: emptyVoice, beams: measureBeams, ties: measureTies, tuplets : measureTuplets });
            }
            currentX += fixedMeasureWidth;
        })

        measuresToRenderRef.current = measuresToRender;
        renderAllMeasures(contextPartition, measuresToRender);

        // data synchro generation
        const notesMap = new Map();
        const synchronizationData: INoteSynchro[] = []
        let runningTimeMs: number = 0;

        notesMapRef.current = notesMap;

        measuresToRender.forEach((m, mIndex) => {
            const tickables: Tickable[] = m.voice.getTickables()
            const y: number = m.stave.getYForLine(0)

            tickables.forEach((tickable: Tickable) => {
                const note = tickable as StaveNote
                const durationMs: number = (note.getTicks().value() / 4096) * (60000 / partition.bpm)               
                
                const x: number = note.getAbsoluteX()
                const id: string | undefined = note.getAttribute('id') ?? `note_${mIndex}_${Math.round(runningTimeMs)}`.replaceAll(/[^a-zA-Z0-9]/g, "_")

                synchronizationData.push({
                    startTimeMs: runningTimeMs,
                    durationMs: durationMs,
                    id: id,
                    key: note.getKeys().join(","),
                    x: x,
                    y: y
                })

                notesMap.set(id, note);
                runningTimeMs += durationMs
            })

            //ghost note
            if ((mIndex + 1) % measurePerLine === 0 || mIndex === measuresToRender.length - 1) {
                synchronizationData.push({
                    startTimeMs: runningTimeMs,
                    durationMs: 0,
                    id: `ghost-${mIndex}`,
                    key: "ghost",
                    x: m.stave.getX() + m.stave.getWidth(),
                    y: y
                })
            }
        })

        console.log(synchronizationData);        
        dataArrayRef.current = synchronizationData

        // Cursor
        if (svgCursorRef.current) svgCursorRef.current.innerHTML = "";

        const rendererCursor = new Renderer(svgCursorRef.current, Renderer.Backends.SVG);
        rendererCursor.resize(Math.round(containerWidth), Math.round(dynamicHeight));

        const contextCursor = rendererCursor.getContext() as SVGContext;
        contextCursorRef.current = contextCursor;

    },[partition])

    useEffect(() => {
        if (onPlay) {
            if (contextCursorRef.current && staveRef.current && svgCursorRef.current) drawCursor(contextCursorRef.current, staveRef.current, svgCursorRef.current)

            const Timer = setInterval(() => {
                const now: number = currentTimeRef.current

                const currentNoteData: INoteSynchro | undefined = findNote(now, dataArrayRef.current)
                
                if (currentNoteData) {
                    const currentNote: HTMLElement | null = document.getElementById(`vf-${currentNoteData.id}`)
                    const currentNoteId: number = dataArrayRef.current.findIndex(n => n.id === currentNoteData.id)
                    const nextNoteData: INoteSynchro = dataArrayRef.current[currentNoteId + 1]
                                        
                    if (nextNoteData) {
                        const ratio: number = Math.min((now - currentNoteData.startTimeMs) / (currentNoteData.durationMs || 1), 1);

                        let posX: number = currentNoteData.x
                        if (nextNoteData.y === currentNoteData.y) {
                            posX = currentNoteData.x + (nextNoteData.x - currentNoteData.x) * ratio
                        }

                        const cursor: HTMLElement | null = document.getElementById('music-cursor')

                        if (cursor) {
                            moveCursor(cursor, posX, currentNoteData.y)
                        }
                    }

                    onTimeUpdate(currentNote)

                    if (nextNoteData) {
                        const container: HTMLDivElement | null = containerRef.current
                        const targetY: number = nextNoteData.y

                        if(targetY !== lastScrolledYRef.current && container) {
                            const isChangingLine: boolean = targetY > currentNoteData.y
                            const isTooLow: boolean = targetY > (container.scrollTop + container.offsetHeight * 0.5)

                            if (isChangingLine || isTooLow) {
                                container.scrollTo({
                                    top: targetY -50,
                                    behavior: 'smooth'
                                })

                                lastScrolledYRef.current = targetY
                            }
                        }
                    }
                } else onTimeUpdate(null)
                currentTimeRef.current += 16
            }, 16)

            return () => clearInterval(Timer)
        }
    },[onPlay])

    if (!partition) {
        return <Box textAlign={"center"}><Text color={"black"}>Chargement de la partition ...</Text></Box>
    }
    return (
            <Box position={"relative"} w={"100%"} h={"600px"} ref={containerRef} overflowY={"auto"}
            sx={hideScrollbarStyle}>
                <Box id="partition-container" ref={svgPartitionRef} sx={{ display: "block", height: "auto"}}/>
                <Box id="cursor-container" ref={svgCursorRef} sx={{ position: "absolute", top: "0", left: "0", pointerEvents: "none", width:"100%", background: "transparent"}}/>
            </Box>
        )
}

export default PartitionRender2