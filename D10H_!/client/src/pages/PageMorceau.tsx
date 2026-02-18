import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import PartitionRender from "../components/PartitionRender";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { type IPartitions } from "../types/partitions";

import Fond from '../img/FondPart.jpg'

export interface IPageMorceauProps {onPlay: boolean}

const PageMorceau: React.FC<IPageMorceauProps> = ({onPlay}) => {
    const [partition, setPartition] = useState<IPartitions | undefined>(undefined)

    const { morceauId } = useParams()

    const fetchPartition = async (URL: string) => {
        const host = import.meta.env.VITE_HOST
        const port = import.meta.env.VITE_SERVER_PORT

        try {
            const res = await fetch(`http://${host}:${port}${URL}`)

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            setPartition(data)
        } catch (error) {
            console.error('Impossible de récupérer les donnée de la partition:', error);
        }
    }
        
    useEffect(() => {
            if (morceauId) {
                const urlFetch = import.meta.env.VITE_URL_FETCH_PARTITION
                fetchPartition(`${urlFetch}${morceauId}`)
            } else {
                console.error('ID manquant ...')
            }
        },[morceauId])


    return (
       <Flex direction={"column"} overflowY={"auto"} justifyContent={"start"} width={"100%"} height={"100%"} background={"transparent"}>
            <Box width={"100%"} textAlign={"center"} position={"relative"}>
                <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} color={"#c0c0c0"}>
                    <Heading fontWeight={"700"}>{(partition) ? partition.title : "Pas de Titre à afficher"}</Heading>
                    <Text as={"span"} fontWeight={"400"}>{(partition) ? partition.artist.name : "Pas d'Artiste à afficher"}</Text>
                </Flex>
                <Image position={"absolute"} borderRadius={"full"} src={partition?.instruments.currentInstrument.imgSrc} alt="..." h={"4rem"} w={"4rem"} right={"10px"} top={"7px"}/>
            </Box>
            <Box backgroundImage={Fond} backgroundRepeat={"no-repeat"} backgroundPosition={"center"} backgroundSize={"cover"} 
            height={"100%"} width={"97%"} 
            marginY={"10px"} marginInlineStart={"20px"} 
            overflowY={"auto"}>
                <PartitionRender onPlay={onPlay} data={partition}/>
            </Box>
        </Flex>
    );
}

export default PageMorceau;