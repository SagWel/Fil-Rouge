import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

function PageAcceuil() {
    return (
        <Box>
            <Flex>
                <Heading as={"h3"} 
                color={"#fdfcfeff"} fontSize={"16px"}>
                    Morceaux joués récemment
                </Heading>
            </Flex>
        </Box>
    );
}

export default PageAcceuil;