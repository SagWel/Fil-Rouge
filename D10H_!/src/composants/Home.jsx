import { Link } from "react-router-dom";
import { Box, Flex, Heading, Button } from "@chakra-ui/react"
import { LeftCarouselIcon, RightCarouselIcon } from "./svg";

function Home () {
    return(
        <Box id="main"
        overflowY={"auto"} height={"100%"}>
            <Box as="section" id="recents" display={"block"}>
                {/* CARROUSEL */}
            </Box>
            <Box as="section" id="suggestions" display={"block"}>
                {/* CARROUSEL */}
            </Box>
            <Box as="section" id="news" display={"block"}>
                {/* CARROUSEL */}
            </Box>
            <Box as="section" id="tops" display={"block"}>
                {/* CARROUSEL */}
            </Box>
            <Box as="section" id="listen" display={"block"}>
                {/* CARROUSEL */}
            </Box>
        </Box>
    )
}

export default Home