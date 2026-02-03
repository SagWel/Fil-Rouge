import { Box } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { INoteData, IPartitions } from "../types/partitions";
import * as Vex from 'vexflow'
import '../style.css'

export interface IMeasureObject {
    stave: Vex.Flow.Stave;
    voice: Vex.Flow.Voice;
    beams: Vex.Flow.Beam[];
    ties: Vex.Flow.StaveTie[];
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

    const Flow = (Vex as any).Flow || Vex;
    const { 
        Renderer, 
        Stave, 
        StaveNote, 
        Voice, 
        Formatter, 
        Beam, 
        Dot, 
        Accidental, 
        StaveTie 
    } = Flow;

    const svgPartitionRef = useRef<HTMLDivElement | null>(null)
    const contextPartitionRef = useRef(null)

    const svgCursorRef = useRef<HTMLDivElement | null>(null)
    const contextCursorRef = useRef(null)

    const measuresToRenderRef = useRef<any[]>([])
    const lastNoteIdRef = useRef<HTMLElement | null>(null)
    const notesMapRef = useRef<Map<string, Vex.Flow.StaveNote>>(new Map());
    const staveRef = useRef<Vex.Flow.Stave | null>(null)
    const dataArrayRef = useRef<INoteSynchro[]>([])

    const currentTimeRef = useRef<number>(0)

    const containerRef = useRef<HTMLDivElement | null>(null)
    const lastScrolledYRef = useRef<number>(-1)

    const hideScrollbarStyle = {
        '&::WebkitScrollbar': {
        display: 'none',
        },
        'msOverflowStyle': 'none',
        'scrollbarWidth': 'none', 
    };

    //Draw beams on Stave
    const drawBeams = (context: Vex.Flow.SVGContext, beams: Vex.Flow.Beam[]) => {
        beams.forEach((beam: Vex.Flow.Beam) => {
            beam.setContext(context);
            beam.draw();
        });
    };

    const findBeamForNote = (note: Vex.Flow.StaveNote, beams: Vex.Flow.Beam[]) => {
        return beams.find(b => b.getNotes().includes(note)) || null
    }

    //Draw ties on Staves
    const drawTies = (context: Vex.Flow.SVGContext, ties: Vex.Flow.StaveTie[]) => {
        ties.forEach((tie: Vex.Flow.StaveTie) => {
            tie.setContext(context);
            tie.draw();
        });
    };

    //
    const mapToVexFlow = (notes: INoteData[], clef: string, tieGroup: any) => {
        const beams: Vex.Flow.Beam[] = []
        let currentBeamGroup: Vex.Flow.StaveNote[] = []

        const ties: Vex.Flow.StaveTie[] = []

        const allNotes: Vex.Flow.StaveNote[] = []

        notes.forEach(n => {
            let duration = n.duration
            if (n.dots) duration += "d"
            if (n.isRest) duration += "r"

            const note: Vex.Flow.StaveNote = new StaveNote({keys: n.keys, duration: duration, clef: clef} )

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
                    }))                    
                }
                tieGroup.second = []
            }            
            allNotes.push(note)
            
        })
        return { allNotes, beams, ties}
    }

    //
    const renderAllMeasures = (context: Vex.Flow.SVGContext , measures: IMeasureObject[]) => {
            measures.forEach(({ stave, voice, beams, ties}) => {
                stave.setContext(context).draw()
                voice.draw(context, stave)
    
                if (beams?.length > 0) drawBeams(context, beams)
                if (ties?.length > 0) drawTies(context, ties)
            })
            staveRef.current = measures[0].stave
        }

    const drawCursor = (context: Vex.Flow.SVGContext, stave: Vex.Flow.Stave, svg: HTMLElement) => {
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

    
    useEffect(() => {
        if (!svgPartitionRef.current || !svgCursorRef.current|| !containerRef) return console.error('Erreur lors du chargement de la partition ...');

        if (svgPartitionRef.current) svgPartitionRef.current.innerHTML = "";
        
        const containerWidth = containerRef.current?.offsetWidth ?? 0;
        const measurePerLine: number = 4;
        const totalLines: number = Math.ceil(mockPartition.measures.length / measurePerLine);
        const dynamicHeight: number = totalLines * 160 + 50;

        const rendererPartition = new Renderer(svgPartitionRef.current, Renderer.Backends.SVG);
        rendererPartition.resize(Math.round(containerWidth), Math.round(dynamicHeight));

        const contextPartition = rendererPartition.getContext();
        contextPartitionRef.current = contextPartition;

        const availableWidth: number = Number(containerWidth) - 40;
        const fixedMeasureWidth: number = availableWidth / measurePerLine;

        let currentX = 20;
        let currentY = 0;

        
        const tieGroups = {
            first: [] as Vex.Flow.StaveNote[],
            second: [] as Vex.Flow.StaveNote[]
        }

        const measuresToRender: IMeasureObject[] = [];

        mockPartition.measures.forEach((measure, index) => {

            const { allNotes: measureNotes, beams: measureBeams, ties: measureTies } = mapToVexFlow(measure.notes, mockPartition.clef, tieGroups)

            if (index > 0 && index % measurePerLine === 0) {
                currentX = 20;
                currentY += 160;
            }

            const stave: Vex.Flow.Stave = new Stave(currentX, currentY, fixedMeasureWidth)

            if (index % measurePerLine === 0) {
                stave.addClef(mockPartition.clef)
                stave.addTimeSignature(mockPartition.time_signature)
                if (mockPartition.clef_signature) stave.addKeySignature(mockPartition.clef_signature)
            }

            const startPadding = 80

            stave.setNoteStartX(stave.getX() + startPadding);

            const [numBeats, beatValue] = mockPartition.time_signature.split('/').map(Number);
            const voice = new Voice({ num_beats:numBeats, beat_value:beatValue });

            voice.addTickables(measureNotes);          

            const formattingWidth: number = fixedMeasureWidth - startPadding - 30;

            new Formatter().joinVoices([voice]).format([voice], formattingWidth);
           
            measuresToRender.push({ stave, voice, beams: measureBeams, ties: measureTies });
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
            const tickables: Vex.Flow.Tickable[] = m.voice.getTickables()
            const y: number = m.stave.getYForLine(0)

            tickables.forEach((tickable: Vex.Flow.Tickable) => {
                const note = tickable as Vex.Flow.StaveNote
                const durationMs: number = (note.getTicks().value() / 4096) * (60000 / mockPartition.bpm)               
                
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
        const contextCursor = rendererCursor.getContext();

        contextCursorRef.current = contextCursor;
    },[])

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

    return (
            <Box position={"relative"} w={"100%"} h={"600px"} ref={containerRef} overflowY={"auto"}
            sx={hideScrollbarStyle}>
                <Box id="partition-container" ref={svgPartitionRef} sx={{ display: "block", height: "auto"}}/>
                <Box id="cursor-container" ref={svgCursorRef} sx={{ position: "absolute", top: "0", left: "0", pointerEvents: "none", width:"100%", background: "transparent"}}/>
            </Box>
        )
}

export default PartitionRender2