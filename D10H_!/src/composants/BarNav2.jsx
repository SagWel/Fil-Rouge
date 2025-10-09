import "react";
import { Link } from "react-router-dom";
import { Flex, Box, Heading, IconButton } from "@chakra-ui/react";

function BarNav() {
    return (
        <Box id="sideleft"
        paddingBottom={"80px"}
        position={"fixed"}
        borderRightColor={"#555257"} borderRightStyle={"solid"} borderRightWidth={"0.0625rem"}
        height={"100%"} bg={"#1B191F"} w={"271px"}
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
                            <svg width="127px" height="20px">
                                <path fill="#fdfcfeff" d="M0 0h10.065c6.232 0 10.639 4.13 10.639 10s-4.407 10-10.639 10H0V0Zm7.823 14.597h1.825c1.956 0 2.999-1.298 2.999-4.597 0-3.299-1.043-4.597-3-4.597H7.824v9.194ZM40.153 20H23.62V0h16.532v5.403h-8.735v2.311h8.213v4.416h-8.213v2.467h8.735V20Zm20.31 0H43.93V0h16.532v5.403h-8.736v2.311h8.214v4.416h-8.214v2.467h8.736V20Zm66.159 0c-1.126-3.058-2.702-6.321-4.821-9.979 2.479-.724 3.961-2.28 3.961-4.67 0-3.637-3.364-5.351-8.683-5.351h-10.952v20h7.823v-8.273c1.738 2.916 3.018 5.667 3.859 8.273h8.813ZM113.95 8.935V5.403h2.712c1.147 0 1.799.623 1.799 1.766s-.652 1.766-1.799 1.766h-2.712ZM102.328 20H85.797V0h16.531v5.403h-8.735v2.311h8.214v4.416h-8.214v2.467h8.735V20ZM64.397 5.403h8.071c-3.349 2.729-6.105 5.82-8.228 9.194V20h17.758v-5.403h-8.876c2.034-2.947 4.876-5.882 8.876-9.194V0H64.397v5.403Z"></path>
                            </svg>
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
                                <svg width="24" height="24">
                                    <path fill="#fdfcfeff" d="M12.037 3.07c.433.21 1.4.832 3.555 2.583 1.883 1.531 3.747 3.406 4.535 4.22.331 1.781.57 3.589.713 5.382.164 2.064.201 3.697.113 5.745h-4.958v-4.308A4 4 0 0 0 12 12.697c-2.203 0-4.015 1.792-4.015 3.995V21H3.047a43.615 43.615 0 0 1 .113-5.745c.142-1.793.381-3.6.712-5.381.789-.815 2.653-2.69 4.536-4.22 2.158-1.755 3.21-2.375 3.629-2.585ZM12.005 1h-.012c-.642 0-2.316 1.044-4.848 3.101C4.536 6.223 2.02 8.918 2.02 8.918a53.892 53.892 0 0 0-.853 6.179c-.257 3.23-.185 5.613 0 7.903H10v-6.31a2 2 0 0 1 4 0V23h8.833c.185-2.29.257-4.673 0-7.903a53.892 53.892 0 0 0-.852-6.18s-2.517-2.694-5.128-4.816C14.323 2.044 12.79 1 12.006 1Z"></path>
                                </svg>
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
                                <svg width={"24"} height={"24"}>
                                    <path fill="#fdfcfeff" d="M 34.149 425.919 c 32.147 27.11 146.205 88.801 238.598 30.32 c 0 0 -35.061 -121.533 112.697 -180.603 c 0 0 -20.852 -29.607 -72.402 -0.108 c -41.581 23.796 -48.658 9.858 -38.223 -22.169 L 385.476 94.04 c 9.73 -10.323 20.117 -9.895 20.117 -9.895 c 25.291 -44.729 54.009 -51.479 54.009 -51.479 L 464.486 0 L 347.91 46.74 c 7.942 15.521 7.887 24.43 6.424 29.21 l -98.382 141.65 c -8.656 5.099 -19.979 9.503 -28.653 4.761 c -16.164 -8.838 -2.894 -29.094 -2.894 -29.094 s -56.793 -9.977 -85.4 52.998 c 0 0 43.296 42.019 -44.107 86.449 C 7.487 377.141 1.995 398.812 34.149 425.919 Z"></path>
                                </svg>
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
                                <svg width={"24"} height={"24"}>
                                    <path fill="#fdfcfeff" d="M22.95 7.174c-.172-1.295-.8-2.38-1.816-3.138-1.143-.875-2.493-1.205-3.919-.954-1.018.179-1.983.634-2.854 1.238A11.52 11.52 0 0 0 12 6.55a11.602 11.602 0 0 0-2.242-2.146c-.9-.646-1.908-1.135-2.973-1.322-1.426-.251-2.777.079-3.919.954-1.015.758-1.644 1.843-1.815 3.138-.355 2.677 1.21 5.754 2.797 7.738a23.24 23.24 0 0 0 2.988 3.117c1.339 1.15 2.825 2.129 4.45 2.842.22.097.477.129.714.129s.493-.032.714-.13c1.609-.705 3.08-1.67 4.409-2.806a23.202 23.202 0 0 0 3.03-3.152c1.586-1.984 3.15-5.061 2.796-7.738Zm-4.351 6.543c-.47.67-1.375 1.652-2.454 2.608-1.284 1.14-2.814 2.243-4.145 2.739-1.225-.457-2.617-1.426-3.832-2.465-1.215-1.04-2.252-2.148-2.767-2.882-1.267-1.808-2.651-4.342-2.393-6.293.105-.793.45-1.397 1.056-1.847l.013-.01c.707-.544 1.48-.735 2.36-.577.803.141 1.668.581 2.487 1.235.82.654 1.595 1.522 2.22 2.522L12 10.07l.856-1.324a10.165 10.165 0 0 1 2.152-2.467c.84-.684 1.73-1.145 2.556-1.29.879-.158 1.652.033 2.36.577l.012.01c.606.45.95 1.054 1.056 1.847.258 1.95-1.126 4.485-2.393 6.293Z"></path>
                                </svg>
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
                            borderRadius={"9999px"}
                            icon={
                                <svg height={"24"} width={"24"}>
                                    <path fill="#fdfcfeff" d="M11.335 11.335V4h1.33v7.335H20v1.33h-7.335V20h-1.33v-7.335H4v-1.33h7.335Z"
                                    height={"16"} width={"16"}></path>
                                </svg>}
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
                            <Link to={"/scorbrary/concert-30-09"} id="concert-30/09">
                                Concert 30/09
                            </Link>
                            <Link to={"/scorbrary/rock"} id="rock" >
                                Rock
                            </Link>
                            <Link to={"/scorbrary/au-coin-du-feu"} id="au-coin-du-feu" >
                                Au coin du feu
                            </Link>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default BarNav