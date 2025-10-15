import { Box, Flex, Heading, Button} from "@chakra-ui/react";

function main () {
    return (
        <Box id="main"
        overflowY={"auto"} height={"100%"}
        margin={"0 3.0625rem"} padding={"1.5rem 1.5rem 0 1.5rem"}>
            <Box id="header-container">
                <Box color={"#fdfcfe"}>
                    <Heading as={"h2"} fontSize={"64px"} fontFamily={"Tahoma,Arial,sans-serif"}>Favoris</Heading>
                    
                </Box>
            </Box>
        </Box>
    )
}

export default main 