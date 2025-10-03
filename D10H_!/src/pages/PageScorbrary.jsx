import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

function Scorbrary () {

    const { id } = useParams();

    return (
        <Box id="main">
            <Box id="main-haeder">
                <Heading as={"h1"} color={"#fdfcfeff"} fontSize={"24px"} fontWeight={"900"}> {id} </Heading>
            </Box>
        </Box>
    )
}

export default Scorbrary