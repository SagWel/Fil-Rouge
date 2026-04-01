import { Flex, Button } from "@chakra-ui/react";

// SVGs import from a unique file
import { 
    TunnerIcon, 
    CountdownIcon, 
    MetronomeIcon, 
    TempoIcon, 
    LearningModeIcon,
    LooperIcon,
    SoloIcon,
    MuteIcon, 
    AnnotationsIcon, 
    ImpressionIcon, 
    ChordsIcon
} from "../Svg";

/* Import hook */
import { useScore } from "../../hooks/useScore";

/* Import conponent */
import OtherInstrumentCard from "../cards/OtherInstrumentCard";

/* Import type */
import type { IOtherInstrument } from "../../types/instrument";

export interface IToolsProps {}

const Tools: React.FC<IToolsProps> = () => {

    /* Score data from context by hook */
    const { score } = useScore()

    return (
        <Flex id="RightBarContainer"
        direction={"column"} justifyContent={"start"} alignItems={"center"}
        marginRight={"0.5rem"} marginTop={"0.5rem"} paddingBottom={"1rem"}
        height={"100%"} width={"3rem"}>

            {/*Scores management tools*/}
            <Flex id="toolsContainer" 
            direction={"column"} justifyContent={"space-around"} alignItems={"center"}
            paddingBottom={"0.5rem"} height={"90%"}
            backgroundColor={"#141216"}
            borderTopRadius={"0.5rem"}
            borderBottomColor={"#3a393d"} borderBottomStyle={"solid"} borderBottomWidth={"0.0625rem"}>
                <Button type="button" id="tunnerBtn" title="tunner"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <TunnerIcon size="24px"/>
                </Button>
                <Button type="button" id="countdownBtn" title="countdown"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <CountdownIcon size="24px"/>
                </Button>
                <Button type="button" id="metronomeBtn" title="metronom"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <MetronomeIcon size="24px"/>
                </Button>
                <Button type="button" id="tempoBtn" title="tempo management"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <TempoIcon size="24px"/>
                </Button>
                <Button type="button" id="learningModeBtn" title="learning mode"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <LearningModeIcon size="24px"/>
                </Button>
                <Button type="button" id="looperBtn" title="looper"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <LooperIcon size="24px"/>
                </Button>
                <Button type="button" id="soloBtn" title="mode solo"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <SoloIcon size="24px"/>
                </Button>
                <Button type="button" id="muteBtn" title="mute"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <MuteIcon size="24px"/>
                </Button>
                <Button type="button" id="annotationsBtn" title="annotations"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <AnnotationsIcon size="24px"/>
                </Button>
                <Button type="button" id="impressionBtn" title="print"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <ImpressionIcon size="24px"/>
                </Button>
                <Button type="button" id="chordsBtn" title="chords book"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <ChordsIcon size="24px"/>
                </Button>
            </Flex>

            {/*Others scores from current track*/}
            <Flex id="pistesContainer"
            direction={"column"} justifyContent={"space-around"} alignItems={"center"}
            paddingY={"0.5rem"} gap={"0.5rem"} minW={"38px"}
            backgroundColor={"#141216"}
            borderBottomRadius={"0.5rem"}
            overflowY={"auto"} sx={{
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>
                {/* <Box as={Link} to={""}
                height={"fit-content"} width={"fit-content"}
                borderRadius={"full"} padding={"0.185rem"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <ChantIcon size="32px" viewBox={"5 0 5 45"}/>
                </Box>
                <Box as={Link} to={""}
                height={"fit-content"} width={"fit-content"}
                borderRadius={"full"} padding={"0.185rem"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <DrumsIcon size="32px" viewBox={"5 0 450 550"}/>
                </Box>
                <Box as={Link} to={""}
                height={"fit-content"} width={"fit-content"}
                borderRadius={"full"} padding={"0.185rem"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <BasseIcon size="32px" viewBox={"-10 0 65 70"}/>
                </Box>
                <Box as={Link} to={""}
                height={"fit-content"} width={"fit-content"}
                borderRadius={"full"} padding={"0.185rem"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <PianoIcon size="32px" viewBox={"-2 0 25 25"}/>
                </Box>
                <Box as={Link} to={""}
                height={"fit-content"} width={"fit-content"}
                borderRadius={"full"} padding={"0.185rem"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <GuitarIcon size="32px" viewBox={"-5 -15 90 90"}/>
                </Box> */}

                {score?.instruments.othersInstruments.map((oi: IOtherInstrument) => (
                    <OtherInstrumentCard instrument={oi} />
                ))}
            </Flex>
        </Flex>
    )
}

export default Tools