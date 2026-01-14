import { Box } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { StaveNote, Renderer, Stave, Voice, Formatter, Beam, CanvasContext, Dot, Accidental, StaveTie } from "vexflow";
import { INoteData, IPartitions } from "../types/partitions";

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
        key_signature: "G",
        deezer_link: "",
        audioPreview: "",
        partitionPreview: "",
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

    const canvasPartitionRef = useRef<HTMLCanvasElement | null>(null)
    const canvasCursorRef = useRef<HTMLCanvasElement | null>(null)
    const contextPartitionRef = useRef<CanvasRenderingContext2D | null>(null)
    const contextCursorRef = useRef<CanvasRenderingContext2D | null>(null)
    const staveRef = useRef<Stave | null>(null)
    const notesMapRef = useRef<Map<string, StaveNote>>(new Map());
    const lastNoteIdRef = useRef<string | null>(null)
    const currentTimeRef = useRef<number>(0)
    const measuresToRenderRef = useRef<any[]>([])
    const containerRef = useRef<HTMLDivElement | null>(null)
    const lastScrolledYRef = useRef<number>(-1)

    const hideScrollbarStyle = {
        '&::-webkit-scrollbar': {
        display: 'none',
        },
        'msOverflowStyle': 'none', // Pour Internet Explorer et Edge
        'scrollbarWidth': 'none',  // Pour Firefox
    };

    const renderAllMeasures = (context: CanvasContext , measures: any[]) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        measures.forEach(({ stave, voice, beams}) => {
            stave.setContext(context).draw()
            voice.draw(context, stave)

            if (beams && beams.length > 0) {
                    beams.forEach((beam : Beam) => {
                    beam.setContext(context);
                    beam.draw();
                })}
        })
    }

    const mapToVexFlow = (notes: INoteData[], clef: string) => {
        const beams: Beam[] = []
        const allNotes: StaveNote[] = []
        let currentBeamGroup: StaveNote[] = []
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
                currentBeamGroup =[]
            }
                        
            allNotes.push(note)
        }
        return { allNotes, beams}
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
            if (contextPartitionRef.current && measuresToRenderRef.current.length > 0) {
                renderAllMeasures(contextPartitionRef.current as unknown as CanvasContext, measuresToRenderRef.current)
            }
        } else if (!currentNote) {return}
    }

    const drawCursor = (context: CanvasContext, positionX: number, positionY: number, stave: Stave) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.beginPath()
        context.setLineWidth(8)
        context.strokeStyle = "rgba(255, 129, 92, 0.7)"
        context.moveTo(positionX, positionY + 15)
        context.lineTo(positionX, positionY + (stave.getHeight() + 15))
        context.stroke()
    }

    useEffect(() => {
        if (!canvasPartitionRef.current || !canvasCursorRef.current|| !containerRef) return;

        const BPM = mockPartition.bpm;
        const msPerTrick = 60000 / BPM;
        const containerWidth: number | undefined = containerRef.current?.offsetWidth
        
        // dynamic Height
        const measurePerLine = 4;
        const totalLines = Math.ceil(mockPartition.measures.length / measurePerLine);
        const dynamicHeight = totalLines * 160 + 50; // 160px par ligne + marge

        const rendererPartition = new Renderer(canvasPartitionRef.current, Renderer.Backends.CANVAS);
        const rendererCursor = new Renderer(canvasCursorRef.current, Renderer.Backends.CANVAS);
        
        rendererPartition.resize(containerWidth as number, dynamicHeight);
        rendererCursor.resize(containerWidth as number, dynamicHeight);

        const contextPartition = rendererPartition.getContext();
        const contextCursor = rendererCursor.getContext();
        
        contextPartitionRef.current = contextPartition as any;
        contextCursorRef.current = contextCursor as any;

        const synchronizationData: INoteSynchro[] = [];
        const notesMap = new Map();
        notesMapRef.current = notesMap;

        let currentX = 20;
        let currentY = 0;
        const measuresToRender: any[] = [];
        const availableWidth = containerWidth as number - 40;
        const fixedMeasureWidth = availableWidth / measurePerLine;

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
                    .addTimeSignature(mockPartition.time_signature)
                    .addKeySignature(mockPartition.key_signature);
            }

            const [numBeats, beatValue] = mockPartition.time_signature.split('/').map(Number);
            const voice = new Voice({ numBeats, beatValue }).setStrict(true); // On est propre maintenant !
            voice.addTickables(measureNotes);

            // Uniform formatting to prevent acceleration
            const startPadding = (index % measurePerLine === 0) ? 80 : 15;
            stave.setNoteStartX(stave.getX() + startPadding);
            
            const formattingWidth = fixedMeasureWidth - startPadding - 20;
            new Formatter().joinVoices([voice]).format([voice], formattingWidth);

            measuresToRender.push({ stave, voice, beams: measureBeams });
            currentX += fixedMeasureWidth;
        });

        measuresToRenderRef.current = measuresToRender;
        renderAllMeasures(contextPartition as any, measuresToRender);

        // Data synchro generation
        let runningTimeMs = 0;
        measuresToRender.forEach((m, mIndex) => {
            const tickables = m.voice.getTickables();
            const y = m.stave.getY();
            
            tickables.forEach((note: StaveNote) => {
                const durationMs = (note.getTicks().numerator / 4096) * msPerTrick;
                const id = `${(note as StaveNote).getKeys()}_${Math.round(runningTimeMs)}`;
                const x = (note as StaveNote).getAbsoluteX();

                note.setAttribute("id", id);
                
                synchronizationData.push({
                    startTimeMs: runningTimeMs,
                    durationMs: durationMs,
                    id: id,
                    key: (note as StaveNote).getKeys().join(","),
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
                const currentIdx = findCurrentNoteIndex(now, synchronizationData);
                
                if (currentIdx !== undefined) {
                    const currentNote = synchronizationData[currentIdx];
                    const nextNote = synchronizationData[currentIdx + 1];
    
                    if (nextNote && contextCursorRef.current) {
                        const ratio = Math.min((now - currentNote.startTimeMs) / (currentNote.durationMs || 1), 1);
                        
                        let posX = currentNote.x;
                        if (nextNote.y === currentNote.y) {
                            posX = currentNote.x + (nextNote.x - currentNote.x) * ratio;
                        }
    
                        drawCursor(contextCursorRef.current as any, posX, currentNote.y, staveRef.current || measuresToRender[0].stave);
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
        style={hideScrollbarStyle}>
            <canvas ref={canvasPartitionRef} style={{ display: "block"}}/>
            <canvas ref={canvasCursorRef} style={{ position: "absolute", top: "0", left: "0", pointerEvents: "none", background: "transparent"}}/>
        </Box>
    )
}

export default PartitionRender