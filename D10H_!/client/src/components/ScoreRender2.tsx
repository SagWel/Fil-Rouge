import { Box, Text } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import type { INoteData } from "../types/Score";

import { useScore } from "../hooks/useScore";
import { usePlayScoreStates } from "../hooks/usePlayScore";

import '../style.css'

export interface INoteSynchro {
    startTimeMs: number,
    durationMs: number,
    id?: string,
    key: string,
    x: number
    y: number
}

export interface IScoreRender2Props {}

const ScoreRender2: React.FC<IScoreRender2Props> = () => {
    
    /* Import score data from context by hook */
    const {score} = useScore() 

    // Refs
        /* Partittion Ref */
    const svgScoreRef = useRef<HTMLDivElement | null>(null)

        /* Cursor Ref */
    const svgCursorRef = useRef<HTMLDivElement | null>(null)

    /* Boxs Ref */
    const containerRef = useRef<HTMLDivElement | null>(null)

    if (!score) {
        return <Box textAlign={"center"}><Text color={"black"}>Chargement de la partition ...</Text></Box>
    }
    return (
            <Box position={"relative"} w={"100%"} ref={containerRef} overflowY={"auto"} maxH={"800px"}
            sx={{
                '&::WebkitScrollbar': {
                display: 'none',
                },
                'msOverflowStyle': 'none',
                'scrollbarWidth': 'none', 
            }}>
                <Box id="score-container" ref={svgScoreRef} 
                sx={{ 
                    display: "block", 
                    height: "auto"
                }}/>
                <Box id="cursor-container" ref={svgCursorRef} 
                sx={{ 
                    position: "absolute", 
                    top: "0", 
                    left: "0", 
                    pointerEvents: "none", 
                    width:"100%", 
                    background: "transparent"
                }}/>
            </Box>
        )
}

export default ScoreRender2