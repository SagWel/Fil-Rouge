import { Link } from "react-router-dom";
import  { Image, Text, Box } from "@chakra-ui/react";
import type { IInstrument } from "../types/instrument";

export interface IInstrumentCardProps { instrument: IInstrument }

// Card for each instrument in database
const InstrumentCard: React.FC<IInstrumentCardProps> = ({instrument}) => {
    return (
        <Box as={Link} to={instrument.linkToSearch} role="group"
        display={"flex"} justifyContent={"center"} alignItems={"center"}
        position={"relative"}
        height={"16rem"} width={"16rem"}
        borderRadius={"full"} overflow={"hidden"}
        >
            <Image src={instrument.imgSrc} height={"100%"} width={"100%"} />
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