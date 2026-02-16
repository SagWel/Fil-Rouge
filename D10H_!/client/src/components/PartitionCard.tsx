import { Box, Heading, Text, Image, Flex} from "@chakra-ui/react";
import { type IPartitions } from "../types/partitions";

// SVGs import from a unique file
import { GuitarIcon, DrumsIcon, PianoIcon, BasseIcon, ChantIcon, UkuleleIcon, SaxoIcon, DifficultyIcon } from "./svg";
import { type InstrumentType } from "../types/instrument";

// Displays icons according to the difficulty value
function difficultyLvl(difficulty: number): React.JSX.Element[] {
  const arrayDiff = Array.from({length:difficulty})

  return arrayDiff.map((_, index: number) => (
  <Box key={index}><DifficultyIcon/></Box>))
}

// 
function IconCard (instrumentKey: InstrumentType): React.JSX.Element | null {

    switch (instrumentKey) {
        case 'guitare': return <GuitarIcon />
        case 'batterie': return <DrumsIcon />
        case 'piano': return <PianoIcon />
        case 'basse': return <BasseIcon />
        case 'chant': return <ChantIcon />
        case 'ukulele': return <UkuleleIcon />
        case 'saxo': return <SaxoIcon />
        default: return null
    }
}


export interface IPartitionCardProps { partition: IPartitions, currentInstrument: string }

// Card for each scores in search result
const PartitionCard: React.FC<IPartitionCardProps> = ({partition, currentInstrument}) => {
    console.log(partition);
        
    return (
    <Flex as={"a"} href={`/partitions/${currentInstrument}/${partition.id}`} direction={"column"} justifyContent={"center"} alignItems={"center"} gap={"2"}
    backgroundColor={"transparent"} minH={"192px"}>
        <Box id="cardTop" position={"relative"}
        borderRadius={"0.125rem"} maxW={"12rem"} overflow={"visible"}
        _hover={{
            filter: "brightness(120%)"
        }}>
            <Image src={partition.partition_preview} id="preview" maxW={"12rem"} minH={"13rem"}></Image>
            <Flex position={"absolute"} bottom={"-0.5rem"} right={"-33px"} boxSize={"4.125rem"} 
            zIndex={"100"} maxHeight={"4.125rem"} maxWidth={"4.125Rem"}>
                {IconCard(partition.instruments.currentInstrument.name)}
            </Flex>
        </Box>
        <Box id="cardInfos">
            <Box color={"#FDFCFE"}>
            <Heading as={"h3"} fontSize={"1.5rem"}>{partition.title}</Heading>
            <Text>{partition.artist.name}</Text>
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