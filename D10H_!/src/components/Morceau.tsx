import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import PartitionRender from "./PartitionRender";

import Chant from '../../public/img/Chant.png';
import Fond from '../img/FondPart.jpg'

export interface IMorceauProps {onPlay: boolean}

const Morceau: React.FC<IMorceauProps> = ({onPlay}) => {
    return (
        <Flex direction={"column"} overflowY={"auto"} justifyContent={"start"} width={"100%"} height={"100%"} background={"transparent"}>
            <Box width={"100%"} textAlign={"center"} position={"relative"}>
                <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} color={"#ffffff"}>
                    <Heading fontWeight={"700"}>Titre</Heading>
                    <Text as={"span"} fontWeight={"400"}>Artist</Text>
                </Flex>
                <Image position={"absolute"} borderRadius={"full"} src={Chant} h={"4rem"} w={"4rem"} right={"10px"} top={"7px"}/>
            </Box>
            <Box backgroundImage={Fond} backgroundRepeat={"no-repeat"} backgroundPosition={"center"} backgroundSize={"cover"} 
            height={"100%"} width={"97%"} 
            marginY={"10px"} marginInlineStart={"20px"} 
            overflowY={"auto"}>
                <PartitionRender onPlay={onPlay}/>
            </Box>
        </Flex>
    )
}

export default Morceau