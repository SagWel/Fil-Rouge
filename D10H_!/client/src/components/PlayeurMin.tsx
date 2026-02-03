import { Link } from "react-router-dom";
import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
import Cover from '../img/dont-stop-the-party.png';
import { HeartLoveOnIcon, AddIcon, ShuffleIcon, PreviousIcon, PlayIcon, NextIcon, LoopAllIcon, LyricsIcon, QueueListIcon, ChromcastIcon, VolumeIcon, AudioIcon } from "./svg";

export interface IPlayeurMinProps {onClick: () => void}

const PlayeurMin: React.FC<IPlayeurMinProps> = ({onClick}) => {
    return (
        <Flex 
        alignItems={"center"} justifyContent={"space-between"}
        padding={"0 1rem"}
        minWidth={"768px"} height={"40px"}
        background={"#141216"}
        borderTop={"1px solid #4e4c51"} >
            <Flex id="info-piste"
            alignItems={"center"} width={"33%"} height={"100%"}>
                <Box id="cover" width={"2.5rem"}
                borderColor={"#3a393d"} borderStyle={"solid"} borderWidth={"0.0625rem"}>
                    <Image src={Cover} alt="Cover"/>
                </Box>
                <Box id="title"
                fontWeight={"400"} color={"#fdfcfe"} marginLeft={"0.5rem"}
                _hover={{
                    textDecoration: "underline"
                }}
                >
                    <Link
                    to={"direction page album de la piste"}
                    >
                        Don't Stop The Party
                    </Link>
                </Box>
                <Flex id="add-buttons"
                direction={"row"} justifyContent={"center"} alignItems={"center"}
                marginLeft={"1rem"}>
                    <Button aria-label="Retirer des coups de coeur"
                    display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                    minHeight={"2rem"} minWidth={"2rem"} height={"2rem"} padding={"0"}
                    color={"#fdfcfe"} background={"transparent"}
                    borderRadius={"full"}
                    _active={{
                                background: "transparent",
                                color: "#bb73ff",
                        }}
                        _focus={{
                            zIndex: "1"
                        }}
                        _focusVisible={{
                            boxShadow: "none",
                            outlineColor: "#ad47ff"
                        }}
                        _hover={{
                            background: "#2e2c30",
                            color: "#f5f2f8"
                        }}
                    >
                        <HeartLoveOnIcon />
                    </Button>
                    <Box 
                    marginLeft={"0.25rem"}>
                        <Button aria-label="Open context menu"
                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                        padding={"0"}
                        minHeight={"2rem"} minWidth={"2rem"} height={"2rem"}
                        color={"#fdfcfe"} background={"transparent"}
                        borderRadius={"full"}
                        _active={{
                                background: "transparent",
                                color: "#bb73ff",
                        }}
                        _focus={{
                            zIndex: "1"
                        }}
                        _focusVisible={{
                            boxShadow: "none",
                            outlineColor: "#ad47ff"
                        }}
                        _hover={{
                            background: "#2e2c30",
                            color: "#f5f2f8"
                        }}
                        >
                            <AddIcon />
                        </Button>
                    </Box>
                </Flex>
            </Flex>
            <Flex id="-center-control"
            justifyContent={"center"} alignItems={"center"}
            width={"33%"} gap={"0.25rem"} padding={"0 1rem"}>
                <Flex display={"inline-flex"} gap={"0.5rem"}>
                    <Button type="button" aria-label="activer le mode aléatoire"
                    display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                    padding={"0"}
                    minWidth={"2rem"} minHeight={"2rem"} height={"2rem"}
                    background={"transparent"}
                    borderRadius={"full"}
                    _active={{
                            background: "transparent",
                            color: "#bb73ff",
                    }}
                    _focus={{
                        zIndex: "1"
                    }}
                    _focusVisible={{
                        boxShadow: "none",
                        outlineColor: "#ad47ff"
                    }}
                    _hover={{
                        background: "#2e2c30",
                        color: "#f5f2f8"
                    }}
                    >
                        <ShuffleIcon />
                    </Button>
                    <Button type="button" aria-label="Précédent"
                    display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                    padding={"0"}
                    minWidth={"2rem"} minHeight={"2rem"} height={"2rem"}
                    background={"transparent"}
                    borderRadius={"full"}
                    _active={{
                            background: "transparent",
                            color: "#bb73ff",
                    }}
                    _focus={{
                        zIndex: "1"
                    }}
                    _focusVisible={{
                        boxShadow: "none",
                        outlineColor: "#ad47ff"
                    }}
                    _hover={{
                        background: "#2e2c30",
                        color: "#f5f2f8"
                    }}
                    >
                        <PreviousIcon />
                    </Button>
                    <Button type="button" aria-label="Ecouter"
                    display={"inline-flex"} justifyContent={"center"} alignItems={"center"}
                    marginLeft={"0"} padding={"0"}
                    minHeight={"2rem"} height={"2rem"} minWidth={"2rem"}
                    background={"#a238ff"} borderRadius={"full"}
                    onClick={onClick}
                    _active={{
                        color: "#e2dfe6",
                        background: "#ca97ff"
                    }}
                    _focus={{
                        zIndex: "1"
                    }}
                    _focusVisible={{
                        boxShadow: "none",
                        outlineColor: "#f5f2f8"
                    }}
                    _hover={{
                        color: "#f5f2f8",
                        background: "#bb73ff"
                    }}
                    >
                        <PlayIcon />
                    </Button>
                    <Button type="button" aria-label="Suivant"
                    display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                    padding={"0"}
                    minWidth={"2rem"} minHeight={"2rem"} height={"2rem"}
                    background={"transparent"}
                    borderRadius={"full"}
                    _active={{
                            background: "transparent",
                            color: "#bb73ff",
                    }}
                    _focus={{
                        zIndex: "1"
                    }}
                    _focusVisible={{
                        boxShadow: "none",
                        outlineColor: "#ad47ff"
                    }}
                    _hover={{
                        background: "#2e2c30",
                        color: "#f5f2f8"
                    }}
                    >
                        <NextIcon />
                    </Button>
                    <Button type="button" aria-label="Réécouter tous les titres"
                    display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                    marginLeft={"0"} padding={"0"}
                    minHeight={"2rem"} height={"2rem"} minWidth={"2rem"}
                    background={"transparent"} borderRadius={"full"}
                    _active={{
                            background: "transparent",
                            color: "#bb73ff",
                    }}
                    _focus={{
                        zIndex: "1"
                    }}
                    _focusVisible={{
                        boxShadow: "none",
                        outlineColor: "#ad47ff"
                    }}
                    _hover={{
                        background: "#2e2c30",
                        color: "#f5f2f8"
                    }}
                    >
                        <LoopAllIcon />
                    </Button>
                </Flex>
            </Flex>
            <Flex id="timline" 
            alignItems={"center"} justifyContent={"center"}
            paddingY={"0.125rem"}
            position={"relative"}>
                <Box paddingRight={"0.5rem"}>
                    <Text fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} color={"#fdfcfe"}
                    margin={"0"}>
                        01:24
                    </Text>
                </Box>
                <Box textAlign={"center"} minWidth={"24px"}>
                    <Text fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} color={"#fdfcfe"}
                    margin={"0"}>
                        -----
                    </Text>
                </Box>
                <Box paddingLeft={"0.5rem"}
                position={"relative"} right={"0"}>
                    <Text fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} color={"#fdfcfe"}
                    margin={"0"}>
                        06:07
                    </Text>
                </Box>
            </Flex>
            <Box id="other-control" display={"inline-flex"} justifyContent={"flex-end"} alignItems={"center"}
            width={"33%"}>
                <Button type="button" aria-label="Afficher les paroles"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"full"}
                _active={{
                                background: "transparent",
                                color: "#bb73ff",
                        }}
                        _focus={{
                            zIndex: "1"
                        }}
                        _focusVisible={{
                            boxShadow: "none",
                            outlineColor: "#ad47ff"
                        }}
                        _hover={{
                            background: "#2e2c30",
                            color: "#f5f2f8"
                        }}>
                    <LyricsIcon />
                </Button>
                <Button type="button" aria-label="Open queuelist"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"full"}
                _active={{
                                background: "transparent",
                                color: "#bb73ff",
                        }}
                        _focus={{
                            zIndex: "1"
                        }}
                        _focusVisible={{
                            boxShadow: "none",
                            outlineColor: "#ad47ff"
                        }}
                        _hover={{
                            background: "#2e2c30",
                            color: "#f5f2f8"
                        }}>
                    <QueueListIcon />
                </Button>
                <Button type="button" aria-label="Chromcast"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"full"}
                _active={{
                                background: "transparent",
                                color: "#bb73ff",
                        }}
                        _focus={{
                            zIndex: "1"
                        }}
                        _focusVisible={{
                            boxShadow: "none",
                            outlineColor: "#ad47ff"
                        }}
                        _hover={{
                            background: "#2e2c30",
                            color: "#f5f2f8"
                        }}>
                    <ChromcastIcon />
                </Button>
                <Button type="button" aria-label="Volume button"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"full"}
                _active={{
                                background: "transparent",
                                color: "#bb73ff",
                        }}
                        _focus={{
                            zIndex: "1"
                        }}
                        _focusVisible={{
                            boxShadow: "none",
                            outlineColor: "#ad47ff"
                        }}
                        _hover={{
                            background: "#2e2c30",
                            color: "#f5f2f8"
                        }}>
                    <VolumeIcon />
                </Button>
                <Button type="button" aria-label="Audio"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"full"}
                _active={{
                                background: "transparent",
                                color: "#bb73ff",
                        }}
                        _focus={{
                            zIndex: "1"
                        }}
                        _focusVisible={{
                            boxShadow: "none",
                            outlineColor: "#ad47ff"
                        }}
                        _hover={{
                            background: "#2e2c30",
                            color: "#f5f2f8"
                        }}>
                    <AudioIcon />
                </Button>
            </Box>
        </Flex>
    )
}

export default PlayeurMin;