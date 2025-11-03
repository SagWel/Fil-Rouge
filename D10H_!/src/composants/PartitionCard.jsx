import { Box, Heading, Text, Image, Icon, Flex} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GuitarIcon, DrumsIcon, PianoIcon, BasseIcon, ChantIcon, UkuleleIcon, SaxoIcon, DifficultyIcon } from "./svg";

function difficultyLvl(difficulty) {
  const arrayDiff = Array.from({length:difficulty})

  return arrayDiff.map((_, index) => (
  <Box key={index}><DifficultyIcon/></Box>))
}

function IconCard () {
    const { instrumentId } = useParams()
    let InstruIcon = null

    if (instrumentId == "guitare") {
        InstruIcon = <GuitarIcon />
    } else if (instrumentId == "batterie") {
        InstruIcon = <DrumsIcon />
    } else if (instrumentId == "piano") {
        InstruIcon = <PianoIcon />
    } else if (instrumentId == "basse") {
        InstruIcon = <BasseIcon />
    } else if (instrumentId == "chant") {
        InstruIcon = <ChantIcon />
    } else if (instrumentId == "ukulele") {
        InstruIcon = <UkuleleIcon />
    } else if (instrumentId == "saxo") {
        InstruIcon = <SaxoIcon />
    }

    return InstruIcon
}

function PartitionCard ({partition}) {
    return (
    <Flex as={"a"} href="partitons/:instrumentId/morceauId" direction={"column"} justifyContent={"center"} alignItems={"center"} gap={"2"}
    backgroundColor={"transparent"} minH={"192px"}>
        <Box id="cardTop" position={"relative"}
        borderRadius={"0.125rem"} maxW={"12rem"}
        _hover={{
            filter: "brightness(120%)"
        }}>
            <Image src={partition.preview} id="preview" maxW={"12rem"} minH={"13rem"}></Image>
            <Icon position={"absolute"} bottom={"0"} right={"0"}
            zIndex={"300"} maxHeight={"4.125rem"} maxWidth={"4.125Rem"}>
                <IconCard />
            </Icon>
        </Box>
        <Box id="cardInfos">
            <Box color={"#FDFCFE"}>
            <Heading as={"h3"} fontSize={"1.5rem"}>{partition.title}</Heading>
            <Text>{partition.artist}</Text>
            </Box>
            <Flex id="difficultyLvl" 
            direction={"row"} justifyContent={"center"} alignItems={"center"} 
            width={"100%"}
            marginTop={"0.5rem"}>
                {difficultyLvl(partition.difficulty)}
            </Flex>
        </Box>
    </Flex>
    )
}

export default PartitionCard;