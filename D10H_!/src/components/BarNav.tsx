import { Link, useLocation } from "react-router-dom";
import { 
    Flex, Box, Heading, IconButton, Image, Modal, ModalBody, ModalHeader, ModalCloseButton, ModalContent, 
    ModalOverlay, useDisclosure, Text, Input, FormControl, FormLabel, Switch, Textarea, ButtonGroup, Button
 } from "@chakra-ui/react";

// Pictures import as modules
import Fire from '../img/au-coin-du-feu.png'
import Rock from '../img/Rock.png'
import Var from '../img/var.png'

// SVGs import from a unique file
import { LogoIcon, HomeIcon, HomeFullIcon, InstruIcon, HeartIcon, HeartFullIcon, AddIcon, CollabIcon, PrivateIcon, LeftCarouselIcon, RightCarouselIcon, CameraIcon } from "./svg";


export interface IBarNavProps {}

const BarNav: React.FC<IBarNavProps> = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { pathname } = useLocation()



    return (
        <Box id="sideleft"
        paddingBottom={"80px"}
        position={"fixed"}
        height={"100%"} w={"271px"}
        >

            {/*Navigation links box*/}
            <Flex id="navigation" 
            p={"1.5rem 0 1rem"} paddingTop={"1rem"}
            direction={"column"} justifyContent={"space-between"} 
            height={"14rem"} 
            borderBottomColor={"#3a393d"} borderBottomStyle={"solid"} borderBottomWidth={"0.0625rem"}>
                <Box id="Links" 
                p={"0 1rem 0px 1rem"} 
                color={"#fdfcfeff"}>
                    <Box id="D10H_!" 
                    paddingLeft={"105px"}
                    fontSize={"1,125rem"} fontWeight={"600"}>
                        <Link to={"/"}>D10H !</Link>
                    </Box>
                    <a id="Deezer_Link" href="https://www.deezer.com/">
                        <Box>
                            <LogoIcon />
                        </Box>
                    </a>
                    </Box>
                    <Flex id="Navigation-Links" 
                    paddingLeft={"0.5rem"} paddingRight={"0.5rem"} gap={"0.25rem"}
                    direction={"column"} justifyContent={"space-around"} 
                    height={"8rem"}>
                        {
                        (pathname == "/") ? (
                            <Flex as={Link} to={"/"} id="acceuil"
                            gap={"0.5rem"} 
                            p={"0.5rem"}
                            height={"52.5rem"}
                            color={"#bb73ff"}
                            bg={"#29282D"}
                            borderRadius={"0.5rem"}>
                                <HomeFullIcon color="#bb73ff" />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Acceuil</Heading>
                            </Flex>
                        ) : (
                            <Flex as={Link} to={"/"} id="acceuil"
                            gap={"0.5rem"} p={"0.5rem"}
                            height={"52,5rem"} color={"#fdfcfeff"}
                            borderRadius={"0.5rem"}
                            _hover={{
                                bg: "#29282D",
                            }}>
                                <HomeIcon />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Acceuil</Heading>
                            </Flex>
                        )
                        }
                        {
                        (pathname == "/Instruments") ? (
                            <Flex as={Link} to={"/instruments"} id="instruments"
                            gap={"0.5rem"} 
                            p={"0.5rem"}
                            height={"52.5rem"}
                            color={"#bb73ff"}
                            bg={"#29282D"}
                            borderRadius={"0.5rem"}>
                            <InstruIcon color="#bb73ff"/>
                            <Heading fontSize={"1.125rem"} fontWeight={"700"}>Instruments</Heading>
                        </Flex>
                        ) : (
                            <Flex as={Link} to={"/instruments"} id="instruments"
                            gap={"0.5rem"} p={"0.5rem"}
                            height={"52,5rem"} color={"#fdfcfeff"}
                            borderRadius={"0.5rem"}
                            _hover={{
                                bg: "#29282D",
                            }}>
                                <InstruIcon />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Instruments</Heading>
                            </Flex>
                        )
                        }
                        {
                        (pathname.includes("/favoris")) ? (
                            <Flex as={Link} to={"/favoris"}
                            gap={"0.5rem"} 
                            p={"0.5rem"}
                            height={"52,5rem"} 
                            color={"#bb73ff"}
                            bg={"#29282D"}
                            borderRadius={"0.5rem"}
                            >
                                <HeartFullIcon color="#bb73ff" />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Favoris</Heading>
                            </Flex>
                        ) : (
                            <Flex as={Link} to={"/favoris"}
                            gap={"0.5rem"} 
                            p={"0.5rem"}
                            height={"52,5rem"} 
                            color={"#fdfcfeff"}
                            borderRadius={"0.5rem"}
                            _hover={{
                                bg: "#29282D",
                            }}>
                                <HeartIcon />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Favoris</Heading>
                            </Flex>
                        )
                    }
                </Flex>
            </Flex>

            {/*List of the user's playlists, named "Scorbrary", of musical scores*/}
            <Box id="sidebar">
                <Box id="sidebar-visible">
                    <Flex id="scorbraries" 
                    padding={"0px 1rem 0px 16px"}
                    direction={"row"} justifyContent={"space-between"} alignItems={"center"} 
                    height={"40px"}>
                            <Link to={"/favoris/scorbraries"}>
                                <Heading fontSize={"1.125rem"} fontWeight={"700"} color={"#fdfcfeff"}>Scorbraries</Heading>
                            </Link>
                            <IconButton id="boutoun-new-scorbrary" aria-label="Ajouter un Scorbrary"
                            padding={"0"}
                            height={"2rem"} width={"2rem"} minWidth={"2rem"}
                            borderRadius={"full"}
                            icon={<AddIcon />}
                            variant={"ghost"}
                            _hover={{
                                bg: "#3A393D",
                            }}
                            _active={{
                                bg: "#464549",
                            }}
                            _focusVisible={{
                                outlineColor: "#9A36F3",
                                boxShadow: "none",
                            }}
                            onClick={onOpen}
                            >
                                
                            </IconButton>
                    </Flex>
                    <Flex id="scorbraries-list"
                    direction={"column"} padding={"0 1rem"}
                    fontFamily={"Inter, Arial, sans-serif"} fontSize={"16px"} fontWeight={"400"}
                    color={"#fdfcfeff"}>
                            <Flex as={Link} to={"favoris/scorbraries/concert-30-09"} id="concert-30/09" alignItems={"center"} gap={"0.5rem"} padding={"0.5rem"} borderRadius={"0.5rem"}
                            _hover={{
                                bg: "#29282D",
                            }}
                            >
                                <Flex alignItems={"center"} justifyContent={"center"}
                                borderRadius={"0.125rem"}
                                minWidth={"3rem"} width={"3rem"} height={"3rem"}
                                opacity={"1"}
                                >
                                    <Image src={Var} />                                    
                                </Flex>
                                <Box>
                                    Concert 30/09
                                </Box>
                            </Flex>
                            <Flex as={Link} to={"favoris/scorbraries/rock"} id="rock" alignItems={"center"} gap={"0.5rem"} padding={"0.5rem"} borderRadius={"0.5rem"}
                            _hover={{
                                bg: "#29282D",
                            }}
                            >
                                <Flex alignItems={"center"} justifyContent={"center"}
                                borderRadius={"0.125rem"}
                                minWidth={"3rem"} width={"3rem"} height={"3rem"}
                                opacity={"1"}
                                >
                                    <Image src={Rock} />
                                </Flex>
                                <Box>
                                    Rock
                                </Box>
                            </Flex>
                            <Flex as={Link} to={"favoris/scorbraries/au-coin-du-feu"} id="au-coin-du-feu" alignItems={"center"} gap={"0.5rem"} padding={"0.5rem"} borderRadius={"0.5rem"}
                            _hover={{
                                bg: "#29282D",
                            }}
                            >
                                <Flex alignItems={"center"} justifyContent={"center"}
                                borderRadius={"0.125rem"}
                                minWidth={"3rem"} width={"3rem"} height={"3rem"}
                                opacity={"1"}
                                >
                                    <Image src={Fire} />
                                </Flex>
                                <Box>
                                    Au coin du feu
                                </Box>
                            </Flex>
                    </Flex>
                </Box>
            </Box>

            {/*Scorbrary add modal*/} 
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay background={"rgba(0, 0, 0, 0.48)"}
                style={{
                    opacity: "1"
                }} />
                <ModalContent 
                maxW={"48rem"}
                paddingBottom={"1rem"} paddingTop={"0.25rem"}
                bg={"#000000"} borderRadius={"0.5rem"}
                boxShadow={"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px"}
                style={{
                    opacity: 1,
                    transform: "none"
                }} >
                    <ModalHeader display={"flex"}
                    justifyContent={"space-between"}
                    paddingInlineStart={"1rem"} paddingInlineEnd={"0.75rem"} padding={"1.5rem"}
                    fontSize={"18px"} fontWeight={"700"} lineHeight={"24px"} fontFamily={"Inter,Arial,sans-serif"}
                    borderBottom={"1px solid #38373b"}>
                        <Heading as={"h2"} 
                        fontFamily={"Inter,Arial,sans-serif"} fontWeight={"700"} fontSize={"20px"} lineHeight={"24px"} textDecoration={"none"} color={"#ffffff"}
                        margin={0}>
                            Créer ma scorbrary
                        </Heading>
                        <ModalCloseButton color={"#ffffff"} flexShrink={0}
                        position={"static"} 
                        bg={""} w={"auto"} h={"auto"}
                        onClick={onClose}></ModalCloseButton>
                    </ModalHeader>
                    <ModalBody 
                    width={"100%"}
                    paddingInline={"1.5rem"}
                    fontSize={"14px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"} lineHeight={"20px"} textDecoration={"none"} textAlign={"left"}>
                        <Flex
                        flexDirection={"column"}>
                            <Box id="carousel-select"
                            position={"relative"}
                            width={"100%"} maxWidth={"100%"}
                            marginTop={"1.5rem"}>
                                {/*Carousel*/}
                                <Flex alignItems={"center"} justifyContent={"center"}
                                position={"absolute"} left={0} top={0}
                                height={"100%"}
                                padding={"1.5rem"}
                                backgroundImage={"linear-gradient(to right, #000000, transparent)"}
                                opacity={0} 
                                pointerEvents={"none"}
                                zIndex={1}>
                                    <Button aria-label="Scroll to previous"
                                    minH={"2rem"} minW={"2rem"}
                                    padding={0}
                                    color={"#000000"}
                                    bg={"#ffffff"}
                                    borderRadius={"full"}
                                    outline={"transparent 2px solid"}>
                                        <LeftCarouselIcon />
                                    </Button>
                                </Flex>
                                <Flex alignItems={"center"} justifyContent={"center"}
                                position={"absolute"} right={0} top={0}
                                height={"100%"}
                                padding={"1.5rem"}
                                backgroundImage={"linear-gradient(to right, #000000, transparent)"}
                                opacity={1} 
                                pointerEvents={"auto"}
                                zIndex={1}>
                                    <Button minH={"2rem"} minW={"2rem"} h={"auto"}
                                    padding={0}
                                    color={"#000000"}
                                    bg={"#ffffff"}
                                    borderRadius={"full"}
                                    outline={"transparent 2px solid"}>
                                        <RightCarouselIcon color="rgb(0, 0, 0)" />
                                    </Button>
                                </Flex>
                                <Flex gap={"2rem"}
                                position={"relative"}
                                paddingInline={"calc(50% - 72px)"} paddingY={"3rem"}
                                overflowX={"scroll"} scrollBehavior={"smooth"} scrollSnapType={"x"} scrollSnapStop={"normal"}
                                sx={{
                                    "&::-webkit-scrollbar": {
                                        display: "none"
                                    },
                                    "-ms-overflow-style": "none",
                                    "scrollbar-width": "none",
                                }}>
                                    <Flex id="template-color-4" 
                                    alignItems={"center"} justifyContent={"center"}
                                    position={"relative"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.5rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        w={"100%"} h={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"solid 2px #ad47ff"} outlineOffset={"2px"}
                                        transform={"scale(1.4, 1.4)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box
                                            w={"100%"} h={"100%"}
                                            borderRadius={"0.25rem"} 
                                            overflow={"hidden"}
                                            scrollSnapAlign={"none"}>
                                                <Box>
                                                    <Box role="presentation"
                                                    scrollSnapAlign={"none"}
                                                    style={{
                                                        position: "relative",
                                                        userSelect: "none",
                                                        width: "144px",
                                                        height: "144px"
                                                    }}>
                                                        <canvas width={"540"} height={"540"}
                                                        style={{
                                                            padding: "0",
                                                            margin: "0",
                                                            border: "0",
                                                            background: "transparent",
                                                            position: "absolute",
                                                            top: "0",
                                                            left: "0",
                                                            width: "144px",
                                                            height: "144px",
                                                            display: "block"
                                                        }}/>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-1"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box 
                                            position={"relative"}
                                            w={"100%"} h={"100%"}
                                            scrollSnapAlign={"none"}>
                                                <Button aria-label="Télécharge un fichier"
                                                position={"absolute"} left={"50%"} top={"50%"}
                                                padding={0}
                                                background={"#000000"}
                                                color={"#ffffff"}
                                                borderRadius={"full"}
                                                transform={"translate(-50%, -50%)"}
                                                zIndex={1}>
                                                    <CameraIcon />
                                                </Button>
                                                <Box 
                                                w={"100%"} h={"100%"}
                                                borderRadius={"0.25rem"}
                                                overflow={"hidden"}
                                                scrollSnapAlign={"none"}>
                                                    <Box>
                                                        <Box 
                                                        w={"144px"} h={"144px"}
                                                        position={"relative"}
                                                        userSelect={"none"}
                                                        scrollSnapAlign={"none"}>
                                                            <canvas width={"540"} height={"540"} 
                                                            style={{
                                                                padding: "0px",
                                                                margin: "0px",
                                                                border: "0px",
                                                                background: "transparent",
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "0px",
                                                                width: "144px",
                                                                height: "144px",
                                                                display: "block",
                                                            }}/>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-pattern-sticker-4"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box 
                                            w={"100%"} h={"100%"}
                                            borderRadius={"0.25rem"}
                                            overflow={"hidden"}
                                            scrollSnapAlign={"none"}>
                                                <Box>
                                                    <Box 
                                                    w={"144px"} h={"144px"}
                                                    position={"relative"}
                                                    userSelect={"none"}
                                                    scrollSnapAlign={"none"}>
                                                        <canvas width={"540"} height={"540"} 
                                                        style={{
                                                            padding: "0px",
                                                            margin: "0px",
                                                            border: "0px",
                                                            background: "transparent",
                                                            position: "absolute",
                                                            top: "0px",
                                                            left: "0px",
                                                            width: "144px",
                                                            height: "144px",
                                                            display: "block",
                                                        }}/>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-image-sticker-7"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box 
                                            position={"relative"}
                                            w={"100%"} h={"100%"}
                                            scrollSnapAlign={"none"}>
                                                <Button aria-label="Télécharge un fichier"
                                                position={"absolute"} left={"50%"} top={"50%"}
                                                padding={0}
                                                background={"#000000"}
                                                color={"#ffffff"}
                                                borderRadius={"full"}
                                                transform={"translate(-50%, -50%)"}
                                                zIndex={1}>
                                                    <CameraIcon />
                                                </Button>
                                                <Box 
                                                w={"100%"} h={"100%"}
                                                borderRadius={"0.25rem"}
                                                overflow={"hidden"}
                                                scrollSnapAlign={"none"}>
                                                    <Box>
                                                        <Box 
                                                        w={"144px"} h={"144px"}
                                                        position={"relative"}
                                                        userSelect={"none"}
                                                        scrollSnapAlign={"none"}>
                                                            <canvas width={"540"} height={"540"} 
                                                            style={{
                                                                padding: "0px",
                                                                margin: "0px",
                                                                border: "0px",
                                                                background: "transparent",
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "0px",
                                                                width: "144px",
                                                                height: "144px",
                                                                display: "block",
                                                            }}/>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-pattern-4"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box 
                                            w={"100%"} h={"100%"}
                                            borderRadius={"0.25rem"}
                                            overflow={"hidden"}
                                            scrollSnapAlign={"none"}>
                                                <Box>
                                                    <Box 
                                                    w={"144px"} h={"144px"}
                                                    position={"relative"}
                                                    userSelect={"none"}
                                                    scrollSnapAlign={"none"}>
                                                        <canvas width={"540"} height={"540"} 
                                                        style={{
                                                            padding: "0px",
                                                            margin: "0px",
                                                            border: "0px",
                                                            background: "transparent",
                                                            position: "absolute",
                                                            top: "0px",
                                                            left: "0px",
                                                            width: "144px",
                                                            height: "144px",
                                                            display: "block",
                                                        }}/>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-mask-sticker-5"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box 
                                            position={"relative"}
                                            w={"100%"} h={"100%"}
                                            scrollSnapAlign={"none"}>
                                                <Button aria-label="Télécharge un fichier"
                                                position={"absolute"} left={"50%"} top={"50%"}
                                                padding={0}
                                                background={"#000000"}
                                                color={"#ffffff"}
                                                borderRadius={"full"}
                                                transform={"translate(-50%, -50%)"}
                                                zIndex={1}>
                                                    <CameraIcon />
                                                </Button>
                                                <Box 
                                                w={"100%"} h={"100%"}
                                                borderRadius={"0.25rem"}
                                                overflow={"hidden"}
                                                scrollSnapAlign={"none"}>
                                                    <Box>
                                                        <Box 
                                                        w={"144px"} h={"144px"}
                                                        position={"relative"}
                                                        userSelect={"none"}
                                                        scrollSnapAlign={"none"}>
                                                            <canvas width={"540"} height={"540"} 
                                                            style={{
                                                                padding: "0px",
                                                                margin: "0px",
                                                                border: "0px",
                                                                background: "transparent",
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "0px",
                                                                width: "144px",
                                                                height: "144px",
                                                                display: "block",
                                                            }}/>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-6"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box
                                            position={"relative"}
                                            w={"100%"} h={"100%"}
                                            scrollSnapAlign={"none"}>
                                                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}
                                                h={"100%"} w={"100%"}
                                                padding={"0.25rem"}
                                                bg={"#242326"}
                                                borderRadius={"0.25rem"}
                                                overflow={"hidden"}
                                                scrollSnapAlign={"none"}>
                                                    <Image alt="mosaic of the scorbrary" src="https://cdn-files.dzcdn.net/cache/slash/images/components/modals/playlist_assistant/mosaic.f908989931add75c2177.png" 
                                                    h={"auto"} w={"90%"} maxW={"180px"}
                                                    border={0} borderStyle={"none"} verticalAlign={"middle"}/>
                                                    <Text
                                                    fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} fontFamily={"Inter,Arial,sans-serif"} color={"#a19fa4"} textAlign={"center"}>
                                                        Une mosaïque des
                                                        <br/>
                                                        albums de cette playlist
                                                    </Text>
                                                </Flex>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-sticker-3"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box 
                                            position={"relative"}
                                            w={"100%"} h={"100%"}
                                            scrollSnapAlign={"none"}>
                                                <Button aria-label="Télécharge un fichier"
                                                position={"absolute"} left={"50%"} top={"50%"}
                                                padding={0}
                                                background={"#000000"}
                                                color={"#ffffff"}
                                                borderRadius={"full"}
                                                transform={"translate(-50%, -50%)"}
                                                zIndex={1}>
                                                    <CameraIcon />
                                                </Button>
                                                <Box 
                                                w={"100%"} h={"100%"}
                                                borderRadius={"0.25rem"}
                                                overflow={"hidden"}
                                                scrollSnapAlign={"none"}>
                                                    <Box>
                                                        <Box 
                                                        w={"144px"} h={"144px"}
                                                        position={"relative"}
                                                        userSelect={"none"}
                                                        scrollSnapAlign={"none"}>
                                                            <canvas width={"540"} height={"540"} 
                                                            style={{
                                                                padding: "0px",
                                                                margin: "0px",
                                                                border: "0px",
                                                                background: "transparent",
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "0px",
                                                                width: "144px",
                                                                height: "144px",
                                                                display: "block",
                                                            }}/>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                    <Flex id="template-mask-1"
                                    position={"relative"}
                                    alignItems={"center"} justifyContent={"center"}
                                    height={"144px"} minW={"144px"}
                                    borderRadius={"0.25rem"}
                                    scrollSnapAlign={"center"}>
                                        <Button 
                                        width={"100%"} height={"100%"}
                                        background={"transparent"} padding={0}
                                        borderRadius={"0.25rem"}
                                        outline={"transparent solid 2px"} outlineOffset={"2px"}
                                        transform={"translateX(1.5rem)"} transition={"transform 0.2s ease-in, outline-color 0.2s ease-in"}
                                        scrollSnapAlign={"none"}>
                                            <Box 
                                            w={"100%"} h={"100%"}
                                            borderRadius={"0.25rem"}
                                            overflow={"hidden"}
                                            scrollSnapAlign={"none"}>
                                                <Box>
                                                    <Box 
                                                    w={"144px"} h={"144px"}
                                                    position={"relative"}
                                                    userSelect={"none"}
                                                    scrollSnapAlign={"none"}>
                                                        <canvas width={"540"} height={"540"} 
                                                        style={{
                                                            padding: "0px",
                                                            margin: "0px",
                                                            border: "0px",
                                                            background: "transparent",
                                                            position: "absolute",
                                                            top: "0px",
                                                            left: "0px",
                                                            width: "144px",
                                                            height: "144px",
                                                            display: "block",
                                                        }}/>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Box id="infos-scorbrary"
                            padding={"1.5rem"}>
                                <Flex flexDirection={"column"} gap={"1rem"} marginBottom={"1rem"}>
                                    <Flex id="name-input"
                                    flexDirection={"column"} gap={"0.25rem"} alignItems={"flex-start"}>
                                        <Text fontSize={"14px"} fontWeight={"400"} lineHeight={"20px"} fontFamily={"Inter,Arial,sans-serif"} role="heading" color={"whiteAlpha.900"}>
                                            Nom
                                        </Text>
                                        <Input placeholder={"Nom de la Scrobrary"} maxLength={50}  
                                        paddingStart={"1rem"} paddingInlineEnd={"0.75rem"}
                                        h={"2rem"} minH={0} 
                                        bg={"#242326"}
                                        border={"transparent 0.125rem solid"} borderRadius={"0.5rem"}
                                        fontSize={"14px"} fontFamily={"Inter,Arial,sans-serif"} fontWeight={"400"} lineHeight={"20px"}
                                        _active={{
                                            borderColor: "#ad47ff"
                                        }}
                                        _focus={{
                                            borderColor: "#ad47ff"
                                        }}
                                        _hover={{
                                            background: "#2e2c30",
                                            color: "#f5f2f8"
                                        }}
                                        _placeholder={{
                                            color: "#706e73"
                                        }}/>
                                    </Flex>
                                    <FormControl display={"flex"} alignItems={"center"} position={"relative"} width={"100%"}>
                                        <FormLabel gap={"1rem"} display={"flex"} flex={"1 1 0%"}
                                        marginInlineEnd={"0.75rem"}
                                        fontWeight={"500"} fontSize={"0.875rem"} color={"#a19fa4"}>
                                            <Flex alignItems={"center"} justifyContent={"center"} width={"2rem"} h={"2rem"} borderRadius={"full"} background={"#242326"}>
                                                <CollabIcon />
                                            </Flex>
                                            <Flex alignItems={"center"} justifyContent={"space-between"} flex={"1 1 0%"}>
                                                <Flex direction={"column"}>
                                                    <Text
                                                    fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"} lineHeight={"24px"} color={"#ffffff"}>
                                                        Collaborative
                                                    </Text>
                                                    <Text as={"span"}
                                                    fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} fontFamily={"Inter,Arial,sans-serif"} color={"#a19fa4"}>
                                                        Tu peux inviter tes amis à ajouter des titres
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Switch 
                                            sx={{
                                                ".chakra-switch__track": {
                                                    bg: "#242326",
                                                    p: "0.25rem"
                                                },

                                                "&[data-checked]": {
                                                    ".chakra-switch__track": {
                                                        bg: "#ad47ff"
                                                    }
                                                },

                                                ".chakra-switch__thumb": {
                                                    bg: "white"
                                                }
                                            }}/>
                                        </FormLabel>
                                    </FormControl>
                                    <FormControl display={"flex"} alignItems={"center"} position={"relative"} width={"100%"}>
                                        <FormLabel gap={"1rem"} display={"flex"} flex={"1 1 0%"}
                                        marginInlineEnd={"0.75rem"}
                                        fontWeight={"500"} fontSize={"0.875rem"} color={"#a19fa4"}>
                                            <Flex alignItems={"center"} justifyContent={"center"} width={"2rem"} h={"2rem"} borderRadius={"full"} background={"#242326"}>
                                                <PrivateIcon />
                                            </Flex>
                                            <Flex alignItems={"center"} justifyContent={"space-between"} flex={"1 1 0%"}>
                                                <Flex direction={"column"}>
                                                    <Text
                                                    fontSize={"16px"} fontWeight={"400"} fontFamily={"Inter,Arial,sans-serif"} lineHeight={"24px"} color={"#ffffff"}>
                                                        Privée
                                                    </Text>
                                                    <Text as={"span"}
                                                    fontSize={"12px"} fontWeight={"400"} lineHeight={"16px"} fontFamily={"Inter,Arial,sans-serif"} color={"#a19fa4"}>
                                                        Il n'y a que toi qui peux voir cette playlist
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Switch 
                                            sx={{
                                                ".chakra-switch__track": {
                                                    bg: "#242326",
                                                    p: "0.25rem"
                                                },

                                                "&[data-checked]": {
                                                    ".chakra-switch__track": {
                                                        bg: "#ad47ff"
                                                    }
                                                },

                                                ".chakra-switch__thumb": {
                                                    bg: "white"
                                                }
                                            }}/>
                                        </FormLabel>
                                    </FormControl>
                                </Flex>
                                <Flex direction={"column"} gap={"0.25rem"} alignItems={"flex-start"}
                                marginY={"0.5rem"}>
                                    <Text fontSize={"14px"} fontWeight={"400"} lineHeight={"20px"} fontFamily={"Inter,Arial,sans-serif"} color={"#ffffff"}>
                                        Description
                                    </Text>
                                    <Textarea maxLength={200} placeholder="Description de la playlist"
                                    minH={"0"} h={"92px"}
                                    padding={"8px 0.75rem 8px 1rem"}
                                    bg={"#242326"}
                                    border={"transparent 0.125rem solid"} borderRadius={"0.5rem"}
                                    fontSize={"0.875rem"} lineHeight={"24px"} color={"#ffffff"}
                                    resize={"none"} 
                                    _placeholder={{
                                            color: "#706e73"
                                        }}
                                    _active={{
                                        borderColor: "#ad47ff"
                                    }}
                                    _focus={{
                                        borderColor: "#ad47ff"
                                    }}
                                    _hover={{
                                        background: "#2e2c30",
                                        color: "#f5f2f8"
                                    }}/>
                                </Flex>
                            </Box>
                            <ButtonGroup id="Btns" role="group"
                            justifyContent={"flex-end"}
                            padding={"1.5rem"}
                            borderTop={"1px solid #38373b"}
                            >
                                <Button type="button" 
                                gap={"0.25rem"}
                                minH={"3rem"} minW={"3rem"}
                                padding={"0.75 1,5rem"}
                                lineHeight={"24px"} fontWeight={"700"} fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} color={"#ffffff"}
                                bg={"transparent"}
                                borderRadius={"0.75rem"}
                                >
                                <Text as={"span"} >
                                    Annuler
                                </Text>
                                </Button>
                                <Button type="button" 
                                gap={"0.25rem"}
                                minH={"3rem"} minW={"3rem"}
                                padding={"0.75 1,5rem"}
                                lineHeight={"24px"} fontWeight={"700"} fontSize={"16px"} fontFamily={"Inter,Arial,sans-serif"} color={"#ffffff"}
                                bg={"#ad47ff"}
                                borderRadius={"0.75rem"}>
                                    <Text as={"span"}>
                                        Créer
                                    </Text>
                                </Button>
                            </ButtonGroup>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default BarNav