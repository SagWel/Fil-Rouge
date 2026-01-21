import { Box } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { INoteData, IPartitions } from "../types/partitions";
import * as Vex from 'vexflow'

export interface INoteSynchro {
    startTimeMs: number,
    durationMs: number,
    id: string,
    key: string,
    x: number
    y: number
}

export interface IPartitionRenderProps {onPlay: boolean}

const PartitionRender: React.FC<IPartitionRenderProps> = ({onPlay}) => {

    const mockPartition: IPartitions = {
        id: 1,
        title: "Test Technique",
        artist: { id: 101, name: "Gemini", picture: "", partitions: [], albums: [] },
        difficulty: 3,
        instruments: { currentInstrument: { id: "piano", name: "piano", imgSrc: "../../public/img/Piano.png" }, othersInstruments: [] } ,
        bpm: 90,
        time_signature: "4/4",
        clef: "treble",
        clef_signature: "G",
        deezer_link: "",
        audio_preview: "",
        partition_preview: "",
        duration: 60,
        genre: { id: 1, name: "Test", picture: "", picture_small: "", picture_medium: "", picture_big: "", picture_xl: "" },
       measures: [
            // LIGNE 1
            { id: 1, notes: [{ keys: ["c/4"], duration: "q" }, { keys: ["e/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, { keys: ["c/5"], duration: "q" }] },
            { id: 2, notes: [{ keys: ["b/4"], duration: "q", dots: 1 }, { keys: ["g/4"], duration: "8" }, { keys: ["b/4"], duration: "h", isRest: true }] },
            { id: 3, notes: [{ keys: ["a/4"], duration: "8", beam: "start" }, { keys: ["g/4"], duration: "8", beam: "end" }, { keys: ["f/4"], duration: "8", beam: "start" }, { keys: ["e/4"], duration: "8", beam: "end" }, { keys: ["d/4"], duration: "h" }] },
            { id: 4, notes: [{ keys: ["e/4", "g/4"], duration: "w" }] },
            { id: 5, notes: [{ keys: ["f/4"], duration: "q" }, { keys: ["b/4"], duration: "q", isRest: true }, { keys: ["g/4"], duration: "q" }, { keys: ["b/4"], duration: "q", isRest: true }] },
            { id: 6, notes: [{ keys: ["a/4"], duration: "16", beam: "start" }, { keys: ["b/4"], duration: "16", beam: "continue" }, { keys: ["c/5"], duration: "16", beam: "continue" }, { keys: ["d/5"], duration: "16", beam: "end" }, { keys: ["c/5"], duration: "h", dots: 1 }] },

            // LIGNE 2
            { id: 7, notes: [{ keys: ["g/4"], duration: "q", accidental: "#" }, { keys: ["a/4"], duration: "q" }, { keys: ["b/4"], duration: "q" }, { keys: ["g/4"], duration: "q", accidental: "#" }] },
            { id: 8, notes: [{ keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w" }] },
            { id: 9, notes: [{ keys: ["d/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }] },
            { id: 10, notes: [{ keys: ["e/4"], duration: "8", beam: "start" }, { keys: ["f/4"], duration: "8", beam: "end" }, { keys: ["g/4"], duration: "h" }, { keys: ["b/4"], duration: "q" }] },
            { id: 11, notes: [{ keys: ["c/5"], duration: "q" }, { keys: ["b/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }] },
            { id: 12, notes: [{ keys: ["f/4"], duration: "h" }, { keys: ["e/4"], duration: "h" }] },

            // LIGNE 3
            { id: 13, notes: [{ keys: ["d/4"], duration: "w" }] },
            { id: 14, notes: [{ keys: ["c/4", "f/4", "a/4"], duration: "h" }, { keys: ["c/4", "e/4", "g/4"], duration: "h" }] },
            { id: 15, notes: [{ keys: ["g/4"], duration: "8", beam: "start" }, { keys: ["f/4"], duration: "8", beam: "continue" }, { keys: ["e/4"], duration: "8", beam: "continue" }, { keys: ["d/4"], duration: "8", beam: "end" }, { keys: ["c/4"], duration: "h" }] },
            { id: 16, notes: [{ keys: ["b/3"], duration: "q", accidental: "b" }, { keys: ["c/4"], duration: "q" }, { keys: ["d/4"], duration: "q" }, { keys: ["e/4"], duration: "q" }] },
            { id: 17, notes: [{ keys: ["f/4"], duration: "q" }, { keys: ["g/4"], duration: "q" }, { keys: ["a/4"], duration: "q" }, { keys: ["b/4"], duration: "q" }] },
            { id: 18, notes: [{ keys: ["c/4", "e/4", "g/4", "c/5"], duration: "w" }] }
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
    const svgCursorRef = useRef<HTMLDivElement | null>(null)
    const contextPartitionRef = useRef(null)
    const contextCursorRef = useRef(null)
    const staveRef = useRef<Vex.Flow.Stave | null>(null)
    const notesMapRef = useRef<Map<string, Vex.Flow.StaveNote>>(new Map());
    const lastNoteIdRef = useRef<string | null>(null)
    const currentTimeRef = useRef<number>(0)
    const measuresToRenderRef = useRef<any[]>([])
    const containerRef = useRef<HTMLDivElement | null>(null)
    const lastScrolledYRef = useRef<number>(-1)

    const hideScrollbarStyle = {
        '&::WebkitScrollbar': {
        display: 'none',
        },
        'msOverflowStyle': 'none',
        'scrollbarWidth': 'none', 
    };

    const renderAllMeasures = (context: Vex.Flow.SVGContext , measures: any[]) => {
        measures.forEach(({ stave, voice, beams, ties}) => {
            stave.setContext(context).draw()
            voice.draw(context, stave)

            if (beams && beams.length > 0) {
                    beams.forEach((beam : Vex.Flow.Beam) => {
                    beam.setContext(context);
                    beam.draw();
                })}
            if (ties && ties.lenght > 0) {
                ties.forEach((tie : Vex.Flow.StaveTie) => {
                    tie.setContext(context)
                    tie.draw()
                })
            }
        })
    }

    const mapToVexFlow = (notes: INoteData[], clef: string) => {
        const beams: Vex.Flow.Beam[] = []
        const ties: Vex.Flow.StaveTie[] = []
        const allNotes: Vex.Flow.StaveNote[] = []
        let currentBeamGroup: Vex.Flow.StaveNote[] = []
        let currentTieGroup: Vex.Flow.StaveNote[] = []
        let secondCurrentTieGroup : Vex.Flow.StaveNote[] = []
        for (let n of notes) {
            let duration = n.duration
            if (n.dots) duration += "d"
            if (n.isRest) duration += "r"
            const note = new StaveNote({keys: n.keys, duration: duration, clef: clef} )
            
            if (n.dots) {
                note.addModifier(new Dot(), 0)
            }
            if (n.accidental) {
                note.addModifier(new Accidental(n.accidental), 0)
            }
            if (n.beam == "start") {currentBeamGroup.push(note)}
            if (n.beam == "continue") {currentBeamGroup.push(note)}
            if (n.beam == "end") {
                currentBeamGroup.push(note)
                beams.push(new Beam(currentBeamGroup))
                currentBeamGroup = []
            }
            if (n.ties?.[0] == "start") {currentTieGroup.push(note)}
            if (n.ties?.[0] == "end") {
                currentTieGroup.push(note)
                ties.push(new StaveTie(currentTieGroup))
                currentTieGroup = []
            }
            if (n.ties && n.ties.length > 1 && n.ties[1] == "start") {secondCurrentTieGroup.push(note)}
            if (n.ties && n.ties.length > 1 && n.ties[1] == "end") {
                secondCurrentTieGroup.push(note)
                ties.push(new StaveTie(secondCurrentTieGroup))
                secondCurrentTieGroup = []
            }

            allNotes.push(note)
        }
        return { allNotes, beams, ties}
    }

    const findCurrentNoteIndex = (currentTimeMs: number, synchronizationData: INoteSynchro[]) => {
        for (let noteSynchro of synchronizationData) {
            if (noteSynchro.startTimeMs <= currentTimeMs && currentTimeMs < (noteSynchro.startTimeMs + noteSynchro.durationMs)) {
                const index = synchronizationData.indexOf(noteSynchro)
                return index
            }
        } return undefined
    }

    const onTimeUpdate = (currentNote: INoteSynchro | undefined) => {
        const lastNoteId: string | null = lastNoteIdRef.current

        if (currentNote && currentNote.id !== lastNoteId) {
            if (lastNoteId) {
                notesMapRef.current.get(lastNoteId)?.setStyle({
                    fillStyle: "black",
                    strokeStyle: "black"
                })
            }
            notesMapRef.current.get(currentNote.id)?.setStyle({
                fillStyle: "#7328b5",
                strokeStyle: "#7328b5"
            })
            lastNoteIdRef.current = currentNote.id
        } else if (!currentNote) {return}
    }

    const drawCursor = (context: Vex.Flow.SVGContext, stave: Vex.Flow.Stave, svg : HTMLElement) => {
        context.beginPath()
        context.setLineWidth(8)
        context.setStrokeStyle("rgba(255, 129, 92, 0.7)")
        context.moveTo(0,0 + 15)
        context.lineTo(0, 0 + (stave.getHeight() + 15))
        context.stroke()

        const cursor = svg.lastElementChild as HTMLElement

        if (cursor) {
            cursor.id = "music-cursor"
            cursor.style.transition = "all 0.05s linear"
        }
    }

    const moveCursor = (context: Vex.Flow.SVGContext, cursor: HTMLElement, positionX: number, positionY: number, stave: Vex.Flow.Stave) => {
        cursor.style.transform = `translate(${positionX}px, ${positionY}px)`
    }

    useEffect(() => {
        if (!svgPartitionRef.current || !svgCursorRef.current|| !containerRef) return;

        const BPM = mockPartition.bpm;
        const msPerTrick = 60000 / BPM;
        const containerWidth = containerRef.current?.offsetWidth;
        
        // dynamic Height
        const measurePerLine = 4;
        const totalLines = Math.ceil(mockPartition.measures.length / measurePerLine);
        const dynamicHeight = totalLines * 160 + 50;

        const rendererPartition = new Renderer(svgPartitionRef.current, Renderer.Backends.SVG);
        const rendererCursor = new Renderer(svgCursorRef.current, Renderer.Backends.SVG);
        
        rendererPartition.resize(containerWidth, dynamicHeight);
        rendererCursor.resize(containerWidth, dynamicHeight);

        const contextPartition = rendererPartition.getContext();
        const contextCursor = rendererCursor.getContext();
        
        contextPartitionRef.current = contextPartition;
        contextCursorRef.current = contextCursor;

        if (contextCursorRef.current && staveRef.current) {
            drawCursor(contextCursorRef.current, staveRef.current, svgCursorRef.current);
        }
        
        const synchronizationData: INoteSynchro[] = [];
        const notesMap = new Map();

        notesMapRef.current = notesMap;

        let currentX = 20;
        let currentY = 0;
        const measuresToRender: any[] = [];
        const availableWidth: number = Number(containerWidth) - 40;
        const fixedMeasureWidth: number = availableWidth / measurePerLine;

        // Staves and Voices generation
        mockPartition.measures.forEach((measure, index) => {
            const { allNotes: measureNotes, beams: measureBeams } = mapToVexFlow(measure.notes, mockPartition.clef);
            
            if (index > 0 && index % measurePerLine === 0) {
                currentX = 20;
                currentY += 160;
            }

            const stave = new Stave(currentX, currentY, fixedMeasureWidth);
            
            // first measure configuration
            if (index % measurePerLine === 0) {
                stave.addClef(mockPartition.clef)
                    stave.addTimeSignature(mockPartition.time_signature)
                    stave.addKeySignature(mockPartition.clef_signature);
            }

            const [numBeats, beatValue] = mockPartition.time_signature.split('/').map(Number);
            const voice = new Voice({ num_beats:numBeats, beat_value:beatValue }).setStrict(true);
            voice.addTickables(measureNotes);

            // Uniform formatting to prevent acceleration
            const startPadding = (index % measurePerLine === 0) ? 80 : 15;
            stave.setNoteStartX(stave.getX() + startPadding);
            
            const formattingWidth = fixedMeasureWidth - startPadding - 30;
            new Formatter().joinVoices([voice]).format([voice], formattingWidth, {softmaxFactor: 100} as any);

            measuresToRender.push({ stave, voice, beams: measureBeams });
            currentX += fixedMeasureWidth;
        });

        measuresToRenderRef.current = measuresToRender;
        renderAllMeasures(contextPartition, measuresToRender);

        // Data synchro generation
        let runningTimeMs = 0;
        measuresToRender.forEach((m, mIndex) => {
            const tickables = m.voice.getTickables();
            
            const y = m.stave.getY();

            tickables.forEach((note: any) => {
                
                const durationMs = (note.getTicks().value() / 4096) * msPerTrick;

                const x = note.getAbsoluteX();

                const id = `${note.getKeys()}_${Math.round(runningTimeMs)}`;
                if (note.attrs) note.attrs.id = id
                
                synchronizationData.push({
                    startTimeMs: runningTimeMs,
                    durationMs: durationMs,
                    id: id,
                    key: (note).getKeys().join(","),
                    x: x,
                    y: y
                });
        

                notesMap.set(id, note);
                runningTimeMs += durationMs;
            });

            // ghost note
            if ((mIndex + 1) % measurePerLine === 0 || mIndex === measuresToRender.length - 1) {
                synchronizationData.push({
                    startTimeMs: runningTimeMs,
                    durationMs: 0,
                    id: `ghost-${mIndex}`,
                    key: "ghost",
                    x: m.stave.getX() + m.stave.getWidth(),
                    y: y
                });
            }
        });

        // animation
        if(onPlay) {
            const Timer = setInterval(() => {
                const now = currentTimeRef.current;
                const currentId = findCurrentNoteIndex(now, synchronizationData);
                
                if (currentId !== undefined) {
                    const currentNote = synchronizationData[currentId];
                    const nextNote = synchronizationData[currentId + 1];
    
                    if (nextNote && contextCursorRef.current) {
                        const ratio = Math.min((now - currentNote.startTimeMs) / (currentNote.durationMs || 1), 1);
                        
                        let posX = currentNote.x;
                        if (nextNote.y === currentNote.y) {
                            posX = currentNote.x + (nextNote.x - currentNote.x) * ratio;
                        }
    
                        const cursor = document.getElementById("music-cursor")

                        if (cursor) {
                            moveCursor(contextCursorRef.current, cursor, posX, currentNote.y, staveRef.current || measuresToRender[0].stave);
                        }
                    }
                    onTimeUpdate(currentNote);
                    if (containerRef.current && nextNote) {
                        const container = containerRef.current;
                        const targetY = nextNote.y;
    
                        if (targetY !== lastScrolledYRef.current) {
                            
                            const isChangingLine = targetY > currentNote.y;
                            const isTooLow = targetY > (container.scrollTop + container.offsetHeight * 0.5);
    
                            if (isChangingLine || isTooLow) {
                                container.scrollTo({ 
                                    top: targetY - 50,
                                    behavior: 'smooth' 
                                });
    
                                lastScrolledYRef.current = targetY;
                            }
                        }
                    }
                }
                currentTimeRef.current += 16;
            }, 16);
    
            return () => clearInterval(Timer);
        }
}, [onPlay]);

    return (
        <Box position={"relative"} w={"100%"} h={"600px"} ref={containerRef} overflowY={"auto"}
        sx={hideScrollbarStyle}>
            <Box id="partition-container" ref={svgPartitionRef} sx={{ display: "block", height: "auto"}}/>
            <Box id="cursor-container" ref={svgCursorRef} sx={{ position: "absolute", top: "0", left: "0", pointerEvents: "none", width:"100%", background: "transparent"}}/>
        </Box>
    )
}

export default PartitionRender