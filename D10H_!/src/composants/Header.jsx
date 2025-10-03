import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function Header() {
    return(
        <Box id="header-container">
            <Flex id="header"
            direction={"row"} align={"center"}
            height={"80px"} width={"100%"}
            borderBottomColor={"#3a393d"} borderBottomStyle={"solid"} borderBottomWidth={"0.0625rem"}>
                <Box id="search-bar"
                marginRight={"auto"}
                width={"375px"}>
                    <Box id="search-zone">
                        <InputGroup>
                            <InputLeftElement>
                                <svg width={"24"} height={"24"}>
                                    <path fill="#fdfcfeff" d="M10.947 5.35c3.725 0 5.614 1.89 5.614 5.614 0 1.513-.326 2.745-.967 3.661l-.392.477-.398.374c-.925.731-2.223 1.102-3.857 1.102-3.725 0-5.614-1.889-5.614-5.614 0-3.725 1.889-5.613 5.614-5.613Zm0-1.332C6.486 4.018 4 6.503 4 10.964s2.486 6.947 6.947 6.947c1.955 0 3.53-.478 4.684-1.39l3.243 3.462L20 18.927l-3.315-3.537c.79-1.127 1.209-2.61 1.209-4.426 0-4.46-2.486-6.946-6.947-6.946Z"></path>
                                </svg>
                            </InputLeftElement>
                            <Input color={"#6F6D6A"} >Artistes, titres, Scorbrary</Input>
                        </InputGroup>
                    </Box>
                </Box>
                <Box id="icons">
                    <Box id="notif">
                    </Box>
                    <Box id="compte">
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Header