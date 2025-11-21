import { Link } from "react-router-dom";
import  { Image, Text, Box } from "@chakra-ui/react";

// Card for each instrument in database
function InstrumentCard ({instrument}) {
    return (
        <Box as={Link} to={instrument.linkTo} role="group"
        display={"flex"} justifyContent={"center"} alignItems={"center"}
        position={"relative"}
        height={"16rem"} width={"16rem"}
        borderRadius={"full"} overflow={"hidden"}
        >
            <Image src={instrument.imgsrc} height={"100%"} width={"100%"} />
            <Text 
            position={"absolute"} overflow={"hidden"}
            opacity={"0"}
            color={"#FDFCFE"} fontSize={"24px"} fontWeight={"700"} textShadow={"5px 5px 0 black"}
            zIndex={"1"}
            _groupHover={{
                opacity: "1"
            }}>{instrument.name}</Text>
        </Box>
    )
}

export default InstrumentCard;