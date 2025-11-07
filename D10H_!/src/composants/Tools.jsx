import { Flex, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { 
    TunnerIcon, CountdownIcon, MetronomeIcon, TempoIcon, LearningModeIcon,LooperIcon,SoloIcon,MuteIcon, AnnotationsIcon, ImpressionIcon, ChordsIcon,
    PianoIcon, ChantIcon, DrumsIcon, BasseIcon
 } from "./svg";

function Tools () {
    return (
        <Flex id="RightBarContainer"
        direction={"column"} justifyContent={"start"} alignItems={"center"}
        marginRight={"0.5rem"} marginY={"0.5rem"}
        height={"100%"} width={"3rem"}
        borderRadius={"0.5rem"} backgroundColor={"#141216"}>
            <Flex id="toolsContainer" 
            direction={"column"} justifyContent={"center"} alignItems={"center"}
            paddingBottom={"0.5rem"} marginTop={"0.5rem"}
            borderBottomColor={"#3a393d"} borderBottomStyle={"solid"} borderBottomWidth={"0.0625rem"}>
                <Button type="button" id="tunnerBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <TunnerIcon size="24px"/>
                </Button>
                <Button type="button" id="countdownBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <CountdownIcon size="24px"/>
                </Button>
                <Button type="button" id="metronomeBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <MetronomeIcon size="24px"/>
                </Button>
                <Button type="button" id="tempoBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <TempoIcon size="24px"/>
                </Button>
                <Button type="button" id="learningModeBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <LearningModeIcon size="24px"/>
                </Button>
                <Button type="button" id="looperBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <LooperIcon size="24px"/>
                </Button>
                <Button type="button" id="soloBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <SoloIcon size="24px"/>
                </Button>
                <Button type="button" id="muteBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <MuteIcon size="24px"/>
                </Button>
                <Button type="button" id="annotationsBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <AnnotationsIcon size="24px"/>
                </Button>
                <Button type="button" id="impressionBtn"
                backgroundColor={"transparent"}
                padding={"0"}
                borderRadius={"full"}
                height={"38px"} width={"24px"} minWidth={"38px"}
                _hover={{
                                bg: "#29282D"
                            }}>
                    <ImpressionIcon size="24px"/>
                </Button>
                <Button type="button" id="chordsBtn"
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
            <Flex id="pistesContainer"
            direction={"column"} justifyContent={"center"} alignItems={"center"}
            paddingTop={"0.5rem"}>
                <Box as={Link} to={""}
                height={"38px"} width={"38px"}
                borderRadius={"full"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <ChantIcon size="32px" />
                </Box>
                <Box as={Link} to={""}
                height={"38px"} width={"38px"}
                borderRadius={"full"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <DrumsIcon size="32px" />
                </Box>
                <Box as={Link} to={""}
                height={"38px"} width={"38px"}
                borderRadius={"full"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <BasseIcon size="32px" />
                </Box>
                <Box as={Link} to={""}
                height={"38px"} width={"38px"}
                borderRadius={"full"}
                _hover={{
                                bg: "#29282D"
                            }}
                >
                    <PianoIcon size="32px" />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Tools