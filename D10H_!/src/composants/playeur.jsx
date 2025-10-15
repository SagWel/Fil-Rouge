import React from "react";
import { Link, Route } from "react-router-dom";
import { Box, Flex, Button, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import Cover from '../img/dont-stop-the-party.png';

function playeur () {
    return (
        <Flex 
        alignItems={"center"} justifyContent={"space-between"}
        padding={"0 1rem"}
        position={"fixed"} right={"0"} bottom={"0"} left={"0"} zIndex={"300"}
        minWidth={"768px"} height={"80px"}
        background={"#141216"}
        borderTop={"1px solid #4e4c51"} >
            <Flex id="info-piste"
            alignItems={"center"} width={"33%"}>
                <Box id="cover" height={"3rem"} width={"3rem"}
                borderColor={"#3a393d"} borderStyle={"solid"} borderWidth={"0.0625rem"} >
                    <img src={Cover} alt="Cover" />
                </Box>
                <Flex id="title-artist" direction={"column"} justifyContent={"center"} alignItems={"start"} color="#fdfcfe"
                marginLeft={"0.5rem"}>
                    <Box id="title"
                    fontWeight={"400"}
                    _hover={{
                        textDecoration: "underline"
                    }}
                    >
                        <Link
                        // to={"direction page album de la piste}
                        >
                            Don't Stop The Party
                        </Link>
                    </Box>
                    <Box id="artist"
                    fontSize={"14px"}
                    _hover={{
                        textDecoration: "underline"
                    }}
                    >
                        <Link
                        // to={"direction page artiste"}
                        >
                            Black Eyed Peas
                        </Link>
                    </Box>
                </Flex>
                <Flex id="add-buttons" 
                direction={"row"} justifyContent={"center"} alignItems={"center"}
                marginLeft={"1rem"}>
                    <Button aria-label="Retirer des coups de coeur"
                    display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                    minHeight={"2rem"} minWidth={"2rem"} height={"2rem"} padding={"0"}
                    color={"#fdfcfe"} background={"transparent"}
                    borderRadius={"9999px"}
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
                        <svg height={"24"} width={"24"} focusable={"false"} color="#b560ff" fill="#b560ff">
                            <path d="M19.963 8.49c-.125-.942-.582-1.73-1.32-2.282a3.553 3.553 0 0 0-2.85-.694c-.756.133-1.472.475-2.115.928A8.405 8.405 0 0 0 12 8.036a8.405 8.405 0 0 0-1.678-1.594c-.643-.453-1.36-.795-2.115-.928a3.553 3.553 0 0 0-2.85.694c-.738.551-1.195 1.34-1.32 2.282-.258 1.947.88 4.185 2.034 5.628a16.74 16.74 0 0 0 2.375 2.437 12.87 12.87 0 0 0 3.034 1.896c.161.071.348.095.52.095.172 0 .359-.024.52-.095a12.957 12.957 0 0 0 3.154-1.997 16.84 16.84 0 0 0 2.255-2.336c1.154-1.443 2.292-3.681 2.034-5.628Z"></path>
                        </svg>
                    </Button>
                    <Box 
                    marginLeft={"0.25rem"}>
                        <Button aria-label="Open context menu"
                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                        padding={"0"}
                        minHeight={"2rem"} minWidth={"2rem"} height={"2rem"}
                        color={"#fdfcfe"} background={"transparent"}
                        borderRadius={"9999px"}
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
                            <svg height={"24"} width={"24"} focusable={"false"} fill="#fdfcfe">
                                <path d="M11.335 11.335V4h1.33v7.335H20v1.33h-7.335V20h-1.33v-7.335H4v-1.33h7.335Z"></path>
                            </svg>
                        </Button>
                    </Box>
                </Flex>
            </Flex>
            <Flex id="-center-control"
            direction={"column"} width={"33%"} gap={"0.25rem"} padding={"0 1rem"}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Flex display={"inline-flex"} gap={"0.5rem"}>
                        <Button type="button" aria-label="activer le mode aléatoire"
                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                        padding={"0"}
                        minWidth={"2rem"} minHeight={"2rem"} height={"2rem"}
                        background={"transparent"}
                        borderRadius={"9999px"}
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
                            <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe" display={"block"}>
                                <path d="M17.945 13.424a10.61 10.61 0 0 0-.415-.366l-.263-.227-.878 1.004.279.24c.11.093.196.166.373.329.372.344.67.628.971.93h-2.22a2.525 2.525 0 0 1-2.105-1.127L12.215 12l1.472-2.207a2.525 2.525 0 0 1 2.105-1.126h2.221c-.301.3-.599.584-.972.929-.177.163-.263.236-.373.33l-.279.239.878 1.004.263-.227c.123-.104.218-.184.415-.366a34.106 34.106 0 0 0 1.683-1.652 1.333 1.333 0 0 0 0-1.848 33.583 33.583 0 0 0-1.683-1.652 10.731 10.731 0 0 0-.415-.366l-.263-.227-.878 1.004.279.24c.11.093.196.165.373.329.372.343.67.628.971.93h-2.22a3.856 3.856 0 0 0-3.215 1.72l-1.163 1.744-1.163-1.744a3.856 3.856 0 0 0-3.215-1.72H4v1.333h3.036c.848 0 1.635.42 2.106 1.126L10.612 12l-1.47 2.207a2.525 2.525 0 0 1-2.106 1.126H4v1.334h3.036a3.855 3.855 0 0 0 3.215-1.72l1.163-1.745 1.163 1.744a3.856 3.856 0 0 0 3.215 1.72h2.221c-.301.3-.599.585-.972.93-.177.163-.263.236-.373.33l-.279.239.878 1.004.263-.227c.123-.104.218-.184.415-.366a34.106 34.106 0 0 0 1.683-1.652 1.333 1.333 0 0 0 0-1.848 33.517 33.517 0 0 0-1.683-1.652Z"></path>
                            </svg>
                        </Button>
                        <Button type="button" aria-label="Précédent"
                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                        padding={"0"}
                        minWidth={"2rem"} minHeight={"2rem"} height={"2rem"}
                        background={"transparent"}
                        borderRadius={"9999px"}
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
                            <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe" display={"block"}>
                                <path d="M7.379 5H6.13v14H7.38V13.163a67.442 67.442 0 001.988 1.28 76.073 76.073 0 004.231 2.443 69.672 69.672 0 003.153 1.588.618.618 0 00.878-.507c.093-1.127.161-2.306.2-3.524a76.016 76.016 0 000-4.886 69.651 69.651 0 00-.2-3.524.618.618 0 00-.878-.507 69.648 69.648 0 00-3.153 1.588 76.158 76.158 0 00-6.22 3.723V5Z"></path>
                            </svg>
                        </Button>
                        <Button type="button" aria-label="Ecouter"
                        display={"inline-flex"} justifyContent={"center"} alignItems={"center"}
                        marginLeft={"0"} padding={"0"}
                        minHeight={"2rem"} height={"2rem"} minWidth={"2rem"}
                        background={"#a238ff"} borderRadius={"9999px"}
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
                            <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe" display={"block"}>
                                <path d="M15.82 9.383a81.65 81.65 0 00-4.534-2.618 74.589 74.589 0 00-3.378-1.702.662.662 0 00-.94.543 74.476 74.476 0 00-.216 3.777 81.376 81.376 0 000 5.234 74.47 74.47 0 00.215 3.777c.038.458.525.739.94.543a74.596 74.596 0 003.379-1.702 81.654 81.654 0 004.533-2.618 74.416 74.416 0 003.195-2.096.635.635 0 000-1.041 74.368 74.368 0 00-3.195-2.097Z"></path>
                            </svg>
                        </Button>
                        <Button type="button" aria-label="Suivant"
                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                        padding={"0"}
                        minWidth={"2rem"} minHeight={"2rem"} height={"2rem"}
                        background={"transparent"}
                        borderRadius={"9999px"}
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
                            <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe" display={"block"}>
                                <path d="M16.621 5h1.248v14H16.62V13.163a67.378 67.378 0 01-1.988 1.28 76.01 76.01 0 01-4.231 2.443 69.672 69.672 0 01-3.153 1.588.618.618 0 01-.877-.507 69.532 69.532 0 01-.201-3.524 75.958 75.958 0 010-4.886c.039-1.218.107-2.397.2-3.524a.618.618 0 01.878-.507 69.648 69.648 0 013.153 1.588 76.173 76.173 0 016.22 3.723V5Z"></path>
                            </svg>
                        </Button>
                        <Button type="button" aria-label="Réécouter tous les titres"
                        display={"inline-flex"} alignItems={"center"} justifyContent={"center"}
                        marginLeft={"0"} padding={"0"}
                        minHeight={"2rem"} height={"2rem"} minWidth={"2rem"}
                        background={"transparent"} borderRadius={"9999px"}
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
                            <svg height={"24"} width={"24"} color="#fdfcfe" fill="#fdfcfe" focusable={"false"} display={"block"}>
                                <path d="M8.993 4.518c.11.065.2.118.381.234.61.391 1.019.671 1.616 1.11a1.18 1.18 0 0 1 .286 1.609 29.367 29.367 0 0 1-1.14 1.597 7.699 7.699 0 0 1-.289.36l-.11.136-.977-.785.13-.16.01-.012c.068-.083.127-.154.239-.3.132-.174.248-.33.36-.481l.17-.232-.282.058C6.683 8.205 5.254 9.709 5.254 12c0 3.32 2.882 4.298 5.347 4.527l-.104 1.25C6.367 17.393 4 15.292 4 12c0-2.945 1.869-4.932 5.26-5.597l.261-.051-.221-.15c-.186-.125-.38-.251-.603-.395a8.155 8.155 0 0 0-.349-.213l-.168-.1.649-1.073.164.097Zm4.51 1.706C17.634 6.606 20 8.707 20 12c0 2.902-1.818 4.88-5.118 5.572l-.255.053.216.147c.197.134.403.268.64.421.17.108.249.155.352.214l.166.1-.649 1.072-.16-.095-.011-.006a9.166 9.166 0 0 1-.375-.23 27.485 27.485 0 0 1-1.616-1.11 1.18 1.18 0 0 1-.285-1.609c.4-.598.687-1.001 1.14-1.596.126-.165.193-.246.27-.34l.018-.021.112-.136.977.785-.132.16c-.072.088-.13.159-.246.311-.12.157-.226.298-.328.435l-.176.24.29-.067c2.563-.587 3.916-2.074 3.916-4.3 0-3.32-2.881-4.298-5.347-4.527l.105-1.25Z"></path>
                            </svg>
                        </Button>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"}
                paddingTop={"0.125rem"} paddingBottom={"0.125rem"}
                width={"100%"} position={"relative"}>
                    <Box paddingRight={"1rem"}>
                        <Text fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} color={"#fdfcfe"}
                        margin={"0"}>
                            01:24
                        </Text>
                    </Box>
                    <Slider flex={"1"} aria-label="Temps de lecture"
                    min={"0"} max={"367.41333333333336"} value={"84.594652"} step={"1"}>
                        <SliderTrack 
                        height={"4px"}
                        background={"#29282d"}
                        borderRadius={"4px"}>
                            <SliderFilledTrack background={"#a238ff"} />
                        </SliderTrack>
                        <SliderThumb display={"hidden"}></SliderThumb>
                    </Slider>
                    <Box paddingLeft={"1rem"}
                    position={"absolute"} right={"0"}>
                        <Text fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} color={"#fdfcfe"}
                        margin={"0"}>
                            06:07
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box id="other-control" display={"inline-flex"} justifyContent={"flex-end"} alignItems={"center"}
            width={"33%"}>
                <Button type="button" aria-label="Afficher les paroles"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"9999px"}
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
                    <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe">
                        <path d="M15.042 4c-1.136 0-2.272.537-3.347 1.612-1.411 1.411-1.876 2.928-1.433 4.413L4 17.238 6.762 20l7.213-6.262c.355.106.71.178 1.067.178 1.136 0 2.272-.537 3.346-1.611 2.15-2.15 2.15-4.544 0-6.693C17.314 4.537 16.178 4 15.042 4Zm-8.21 14.182-1.014-1.014 5.077-5.837a6.7 6.7 0 0 0 .8.974c.32.319.646.575.974.8l-5.837 5.077Zm5.865-6.88C11.903 10.51 11.5 9.72 11.5 8.959c0-.454.16-.918.445-1.387l4.484 4.484c-.469.284-.933.445-1.387.445-.762 0-1.55-.403-2.345-1.197Zm4.827-.155-4.67-4.67c.74-.695 1.476-1.06 2.188-1.06.761 0 1.55.402 2.345 1.196.794.795 1.196 1.583 1.196 2.345 0 .712-.365 1.447-1.06 2.189Z"></path>
                    </svg>
                </Button>
                <Button type="button" aria-label="Open queuelist"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"9999px"}
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
                    <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe">
                        <path d="M19.173 5.552A45.35 45.35 0 0 0 12.053 5c-2.785 0-5.21.246-7.23.57A.968.968 0 0 0 4 6.522v2.644c0 .469.347.874.827.95a45.347 45.347 0 0 0 7.12.552 45.4 45.4 0 0 0 7.23-.57.968.968 0 0 0 .823-.951V6.502a.97.97 0 0 0-.827-.95ZM5.333 7v-.16a44.358 44.358 0 0 1 6.72-.507l.358.001c2.116.017 4.22.18 6.256.488v2.005a44.35 44.35 0 0 1-6.72.507l-.358-.001a44.336 44.336 0 0 1-6.256-.488V7ZM4 14.325h16v-1.33H4v1.33Zm0 3.68h16v-1.33H4v1.33Z"></path>
                    </svg>
                </Button>
                <Button type="button" aria-label="Chromcast"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"9999px"}
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
                    <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe">
                        <path d="M19.6 6.4c-.3-.2-.7-.4-1.1-.4h-13c-.4 0-.8.2-1.1.4-.3.2-.4.7-.4 1.1v1h.8c.2 0 .4 0 .5.1V7.3h13.4v9.4h-5.3c0 .117.034.234.063.331.02.069.037.128.037.169v.8h5c.4 0 .8-.2 1.1-.4.3-.2.4-.6.4-1v-9c0-.5-.2-.9-.4-1.2ZM4 16.2c1 0 1.8.8 1.8 1.8H4v-1.8Zm2.5-.7c.7.7 1 1.5 1 2.5h1.3c0-2.7-2.1-4.8-4.8-4.8v1.3c1 0 1.8.3 2.5 1Z"></path>
                    </svg>
                </Button>
                <Button type="button" aria-label="Volume button"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"9999px"}
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
                    <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe">
                        <path d="M7.015 8.007 10.33 4h1.657s.827 3.636.827 8.007c0 4.357-.83 7.993-.83 7.993H10.33l-3.245-3.993H4.667c-.368 0-.667-.325-.667-.727V8.735c0-.402.299-.728.667-.728h2.348Zm1.104 7.16 2.78 3.42c.236-1.366.582-3.837.582-6.58 0-2.76-.346-5.239-.582-6.604L8.043 8.857l-.4.483h-2.31v5.334h2.386l.4.493Zm9.643-7.786-.943.942c1.137 1.137 1.731 2.399 1.72 3.65-.012 1.267-.646 2.542-1.834 3.686l.925.96c1.451-1.398 2.227-3 2.242-4.634.015-1.617-.715-3.21-2.11-4.604Zm-3.277 3.193c.448.45.683.936.679 1.408-.005.48-.256.973-.727 1.426l.925.96c.735-.707 1.127-1.528 1.135-2.374.008-.838-.362-1.655-1.07-2.362l-.942.942Z"></path>
                    </svg>
                </Button>
                <Button type="button" aria-label="Audio"
                display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"middle"}
                padding={"0"} marginLeft={"0.25rem"}
                minWidth={"2rem"} minHeight={"2rem"} height={"2rem"} 
                color={"#fdfcfe"} background={"transparent"}
                borderRadius={"9999px"}
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
                    <svg height={"24"} width={"24"} focusable={"false"} color="#fdfcfe" fill="#fdfcfe">
                        <path d="M7 14c.215 0 .455.037.658.076a2.016 2.016 0 011.598 1.59h9.411V17H9.256a2.017 2.017 0 01-1.598 1.592c-.203.039-.443.075-.658.075-.215 0-.456-.036-.66-.075a2.017 2.017 0 01-1.598-1.6 3.656 3.656 0 01-.076-.658c0-.215.037-.456.076-.66a2.016 2.016 0 011.599-1.598C6.544 14.037 6.785 14 7 14Zm0 1.334a2.39 2.39 0 00-.407.05.684.684 0 00-.542.543 2.4 2.4 0 00-.051.407c0 .086.016.227.05.406.054.275.268.49.543.542.18.035.32.052.407.052.086 0 .227-.017.406-.052a.684.684 0 00.542-.542c.035-.179.052-.32.052-.406 0-.086-.017-.228-.052-.407a.684.684 0 00-.542-.542A2.39 2.39 0 007 15.334ZM17 9.666c.215 0 .455.037.658.076.81.156 1.444.789 1.6 1.599.039.203.075.444.075.659 0 .215-.036.455-.075.658a2.017 2.017 0 01-1.6 1.6c-.203.039-.443.075-.658.075-.215 0-.456-.036-.66-.075a2.016 2.016 0 01-1.596-1.591H5.333V11.333h9.411a2.016 2.016 0 011.597-1.59A3.66 3.66 0 0117 9.665ZM17 11c-.086 0-.228.016-.407.05a.684.684 0 00-.542.543c-.035.179-.051.32-.051.407 0 .086.016.227.05.406.054.275.268.49.543.542.18.035.32.052.407.052.086 0 .227-.017.406-.052a.683.683 0 00.542-.542c.035-.179.052-.32.052-.406 0-.086-.017-.228-.052-.407a.684.684 0 00-.542-.542A2.397 2.397 0 0017 11ZM7 5.333c.215 0 .455.037.658.076.808.156 1.44.785 1.598 1.591h9.411v1.334H9.256a2.017 2.017 0 01-1.598 1.59C7.455 9.965 7.215 10 7 10c-.215 0-.456-.036-.66-.075a2.016 2.016 0 01-1.598-1.6 3.653 3.653 0 01-.076-.658c0-.215.037-.456.076-.66A2.016 2.016 0 016.341 5.41c.203-.039.444-.076.659-.076Zm0 1.334c-.086 0-.228.016-.407.05a.684.684 0 00-.542.543c-.035.18-.051.32-.051.407 0 .086.016.227.05.406.054.275.268.49.543.542.18.035.32.052.407.052.086 0 .227-.017.406-.052a.683.683 0 00.542-.542c.035-.179.052-.32.052-.406 0-.086-.017-.228-.052-.407a.684.684 0 00-.542-.542c-.179-.035-.32-.051-.406-.051Z"></path>
                    </svg>
                </Button>
            </Box>

        </Flex>
    )
}

export default playeur;