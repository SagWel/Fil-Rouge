import { Box, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Button, IconButton, Text } from "@chakra-ui/react";
import { SearchIcon, DisableIcon, NotifIcon } from "./svg";

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
                                <SearchIcon />
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
                                <DisableIcon />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box id="notif"
                marginLeft={"1rem"}
                height={"32px"} width={"32px"}>
                    <IconButton type="button" aria-label="Notifications"
                    background={"transparent"} borderRadius={"full"}
                    height={"2rem"} width={"2rem"} minWidth={"2rem"}
                    _active={{
                        backgroundColor: "#464549",
                        color: "#ebe7ee",
                        borderRadius: "full"
                    }}
                    _focusVisible={{
                        borderRadius: "full",
                        outlineColor: "#9A36F3",
                        boxShadow: "none"
                    }}
                    _hover={{
                        background: "#3A393D",
                        borderRadius: "full"
                    }}
                    _f
                    >
                        <NotifIcon />
                    </IconButton>
                </Box>
                <Button id="compte"
                textAlign={"center"}
                marginLeft={"1rem"} paddingX={"0"}
                height={"32px"} minWidth={"32px"}
                bg={"#29282d"} color={"#a9a6aa"} borderRadius={"9999px"}
                _hover={{
                        opacity: "0.76",
                        transition: "opacity 0.2s ease-in-out",
                }}
                _active={{}}
                _focusVisible={{}}
                >
                    <Text>S</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Header