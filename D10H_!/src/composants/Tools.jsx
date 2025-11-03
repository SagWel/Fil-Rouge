import { Box, Flex, Button } from "@chakra-ui/react";
import { 
    TunnerIcon, CountdownIcon, MetronomeIcon, TempoIcon, LearningModeIcon,LooperIcon,SoloIcon,MuteIcon, AnnotationsIcon, ImpressionIcon, ChordsIcon,
    PianoIcon, ChantIcon, DrumsIcon, BasseIcon
 } from "./svg";

function Tools () {
    return (
        <Flex id="RightBarContainer"
        direction={"column"} justifyContent={"center"} alignItems={"center"}
        height={"100%"} width={"2.5rem"}
        position={"fixed"} right={"0"}>
            <Flex id="toolsContainer" 
            direction={"column"} justifyContent={"center"} alignItems={"center"}
            paddingY={"1rem"}
            borderBottomColor={"#3a393d"} borderBottomStyle={"solid"} borderBottomWidth={"0.0625rem"}>
                <Button type="button" id="tunnerBtn">
                    <TunnerIcon />
                </Button>
                <Button type="button" id="countdownBtn">
                    
                </Button>
                <Button type="button" id="metronomeBtn">
                    
                </Button>
                <Button type="button" id="tempoBtn">
                    
                </Button>
                <Button type="button" id="learningModeBtn">
                    
                </Button>
                <Button type="button" id="looperBtn">
                    
                </Button>
                <Button type="button" id="soloBtn">
                    
                </Button>
                <Button type="button" id="muteBtn">
                    
                </Button>
                <Button type="button" id="annotationsBtn">
                    
                </Button>
                <Button type="button" id="impressionBtn">
                    
                </Button>
                <Button type="button" id="chordsBtn">
                    
                </Button>
            </Flex>
            <Flex id="pistesContainer"
            direction={"column"} justifyContent={"center"} alignItems={"center"}
            paddingY={"1rem"}>
                <Button>
                    
                </Button>
                <Button>
                    
                </Button>
                <Button>
                    
                </Button>
                <Button>
                    
                </Button>
            </Flex>
        </Flex>
    )
}

export default Tools