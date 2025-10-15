import { Box, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Button, IconButton } from "@chakra-ui/react";

function Header() {
    return(
        <Flex id="header-container" 
        alignItems={"center"}
        height={"80px"} minWidth={"770px"}
        padding={"1rem"}
        background={"#000000"}
        position={"fixed"} left={"272px"} right={"0"} top={"0"}
        borderBottom={"1px solid #4e4c51"}>
            <Flex id="header"
            direction={"row"} align={"center"}
            height={"80px"} width={"100%"}
            >
                <Box id="top-search-bar"
                marginRight={"auto"}
                width={"375px"}>
                    <InputGroup id="search-zone"
                    bg={"#242326"}
                    color={"#6D6D71"}
                    borderRadius={"0.5rem"}
                    >
                        <InputLeftElement id="search-icon"
                        margin={"0 0.75rem 0 1rem"} left={"0"}
                        width={"1.5rem"} height={"3rem"}
                        display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Button type="submit"
                            display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"baseline"} gap={'0.25rem'}
                            padding={"0"}
                            appearance={"none"} userSelect={"none"} whiteSpace={"nowrap"} outline={"transparent solid 2px"} pointerEvents={"none"}
                            textDecoration={"none"} 
                            background={"transparent"}
                            _active={{
                            borderColor: "#9A36F3"
                        }}
                            >
                                <svg width={"24"} height={"24"} focusable={"false"}>
                                    <path fill="#FDFCFE" d="M10.947 5.35c3.725 0 5.614 1.89 5.614 5.614 0 1.513-.326 2.745-.967 3.661l-.392.477-.398.374c-.925.731-2.223 1.102-3.857 1.102-3.725 0-5.614-1.889-5.614-5.614 0-3.725 1.889-5.613 5.614-5.613Zm0-1.332C6.486 4.018 4 6.503 4 10.964s2.486 6.947 6.947 6.947c1.955 0 3.53-.478 4.684-1.39l3.243 3.462L20 18.927l-3.315-3.537c.79-1.127 1.209-2.61 1.209-4.426 0-4.46-2.486-6.946-6.947-6.946Z"></path>
                                </svg>
                            </Button>
                        </InputLeftElement>
                        <Input type="search" aria-label="Rechercher" placeholder="Artistes, titres, Scorbraries ..."
                        padding={"0 2.75rem 0 2.75rem" }
                        height={"3rem"} width={"100%"}
                        borderRadius={"0.5rem"} borderColor={"transparent"} borderWidth={"0.125rem"} borderStyle={"solid"}
                        textDecoration={"none"}
                        _placeholder={{
                            color: "#6F6D6A",
                            fontWeight: "425",
                            fontFamily: "Inter, Arial, sans-serif",
                        }}
                        _hover={{
                            borderColor: "#2e2c30",
                            bg: "#2e2c30",
                        }}
                        _focus={{
                            borderColor: "#A238FF",
                            boxShadow: "none"
                        }}
                        _active={{
                            borderColor: "#A238FF"
                        }}
                        sx={{
                            '::-webkit-search-cancel-button' : {
                                WebkitAppearance: 'none'
                            }
                        }}
                        ></Input>
                        <InputRightElement
                        right={"0"}
                        width={"1.5rem"} height={"3rem"}
                        margin={"0 0.75rem 0 1rem"}
                        display={"flex"} alignItems={"center"} justifyContent={"center"}
                        >
                            <Button type="button" aria-label="Effacer"
                            padding={"0"}
                            display={"inline-flex"} alignItems={"center"} justifyContent={"center"} verticalAlign={"baseline"} gap={'0.25rem'}
                            appearance={"none"} userSelect={"none"} whiteSpace={"nowrap"} outline={"transparent solid 2px"} pointerEvents={"none"}
                            textDecoration={"none"}
                            background={"transparent"}
                            >
                                <svg width={"24"} height={"24"} focusable={"false"}>
                                    <path fill="#A39FA5" d="M18.47 6.47 12.942 12l5.53 5.53-.942.94L12 12.942l-5.53 5.53-.94-.942L11.058 12l-5.53-5.53.942-.94L12 11.058l5.53-5.53.94.942Z"></path>
                                </svg>
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box id="notif"
                marginLeft={"1rem"}
                height={"32px"} width={"32px"}>
                    <IconButton type="button" aria-label="Notifications"
                    background={"transparent"} borderRadius={"9999xp"}
                    height={"2rem"} width={"2rem"} minWidth={"2rem"}
                    _active={{
                        backgroundColor: "#464549",
                        color: "#ebe7ee",
                        borderRadius: "9999px"
                    }}
                    _focusVisible={{
                        borderRadius: "9999px",
                        outlineColor: "#9A36F3",
                        boxShadow: "none"
                    }}
                    _hover={{
                        background: "#3A393D",
                        borderRadius: "9999px"
                    }}
                    >
                        <svg height={"24"} width={"24"}>
                            <path fill="#F5F2F8" d="M19.48 16.773s-.902-5.09-2.634-8.647C15.114 4.569 13.607 4.5 12 4.5c-1.607 0-3.114.069-4.846 3.626-1.732 3.556-2.634 8.647-2.634 8.647h4.761v.007c-.032 1.699.963 2.72 2.64 2.72h.158c1.677 0 2.672-1.021 2.64-2.72v-.007h4.76ZM6.197 15.409c.394-1.73 1.133-4.53 2.183-6.686 1.392-2.86 2.278-2.86 3.62-2.86s2.228 0 3.62 2.86c1.049 2.152 1.788 4.954 2.183 6.686H6.197Zm7.159 1.397c.006.323-.04.763-.296 1.023-.25.254-.671.307-.981.307h-.158c-.31 0-.731-.053-.98-.306-.256-.261-.303-.701-.297-1.024v-.033h2.711v.033Z"></path>
                        </svg>
                    </IconButton>
                </Box>
                <Box id="compte"
                display={"inline-flex"} justifyContent={"center"} alignItems={"center"}
                marginLeft={"1rem"}
                height={"32px"} width={"32px"}
                bg={"#29282d"} color={"#a9a6aa"} borderRadius={"9999px"}
                >
                    S
                </Box>
            </Flex>
        </Flex>
    )
}

export default Header