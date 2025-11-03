import "react";
import { Link } from "react-router-dom";
import { Flex, Box, Heading, IconButton, Image } from "@chakra-ui/react";
import Fire from '../img/au-coin-du-feu.png'
import Rock from '../img/Rock.png'
import Var from '../img/var.png'
import { LogoIcon, HomeIcon, InstruIcon, HeartIcon, AddIcon } from "./svg";

function BarNav() {
    return (
        <Box id="sideleft"
        paddingBottom={"80px"}
        position={"fixed"}
        height={"100%"} w={"271px"}
        >
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
                    <Flex id="Navigation_Links" 
                    paddingLeft={"0.5rem"} paddingRight={"0.5rem"} gap={"0.25rem"}
                    direction={"column"} justifyContent={"space-around"} 
                    height={"8rem"}>
                        <Link to={"/"}>
                            <Flex id="Acceuil" 
                            gap={"0.5rem"} p={"0.5rem"} 
                            direction={"row"}
                            height={"52,5rem"} color={"#fdfcfeff"}
                            _hover={{
                                bg: "#29282D",
                                borderRadius: "0.5rem"
                            }}>
                                <HomeIcon />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Acceuil</Heading>
                            </Flex>
                        </Link>
                        <Link to={"/Instruments"}>
                            <Flex 
                            gap={"0.5rem"} p={"0.5rem"}
                            direction={"row"}
                            height={"40px"} color={"#fdfcfeff"}
                            _hover={{
                                bg: "#29282D",
                                borderRadius: "0.5rem"
                            }}>
                                <InstruIcon />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Instruments</Heading>
                            </Flex>
                        </Link>
                        <Link to={"/Favoris"}>
                            <Flex 
                            gap={"0.5rem"} p={"0.5rem"} 
                            direction={"row"}
                            height={"40px"} color={"#fdfcfeff"}
                            _hover={{
                                bg: "#29282D",
                                borderRadius: "0.5rem"
                            }}>
                                <HeartIcon />
                                <Heading fontSize={"1.125rem"} fontWeight={"700"}>Favoris</Heading>
                            </Flex>
                        </Link>
                    </Flex>
            </Flex>
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
                            icon={
                                <AddIcon />
                            }
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
                            >
                                
                            </IconButton>
                    </Flex>
                    <Flex id="scorbraries-list"
                    direction={"column"} padding={"0 1rem"}
                    fontFamily={"Inter, Arial, sans-serif"} fontSize={"16px"} fontWeight={"400"}
                    color={"#fdfcfeff"}>
                            <Flex as={Link} to={"/scorbrary/concert-30-09"} id="concert-30/09" alignItems={"center"} gap={"0.5rem"} padding={"0.5rem"} borderRadius={"0.5rem"}
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
                            <Flex as={Link} to={"/scorbrary/rock"} id="rock" alignItems={"center"} gap={"0.5rem"} padding={"0.5rem"} borderRadius={"0.5rem"}
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
                            <Flex as={Link} to={"/scorbrary/au-coin-du-feu"} id="au-coin-du-feu" alignItems={"center"} gap={"0.5rem"} padding={"0.5rem"} borderRadius={"0.5rem"}
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
        </Box>
    )
}

export default BarNav