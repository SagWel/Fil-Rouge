import { Grid, Box, Text } from "@chakra-ui/react";

import PartitionCard from './PartitionCard';
import { type IPartitions } from "../types/partitions";

// Pictures import as modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export interface IResultProps {}

const Result: React.FC<IResultProps> = () => {

    const { instrumentName } = useParams()

    const [partitions, setPartitions] = useState<IPartitions[] | []>([])

    const fetchPartitions = async (URL: string) => {
        const host = import.meta.env.VITE_HOST
        const port = import.meta.env.VITE_SERVER_PORT
        try {            
            const res = await fetch(`http://${host}:${port}${URL}`, {credentials: 'include'})
            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            setPartitions(data)
        } catch (error) {
            console.error('Impossible de récupérer les données des partitions:', error);
        }
    }

    useEffect(() => {
        if (instrumentName) {
            const urlFetch = import.meta.env.VITE_URL_FETCH_ALLPARTITIONS_INSTRUMENT
            
            fetchPartitions(`${urlFetch}${instrumentName}`)
        } else {
            console.error('Instrument manquant ...')
        }
    },[instrumentName])

    if (partitions.length === 0) {
            return <Box textAlign={"center"}><Text color={"white"}>Aucune partition trouvée pour {instrumentName}</Text></Box>
        }
    return(
        <Grid id="resultZone" templateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}
        gap={"7"} justifyItems={"center"} p={"4"}
        overflow={"visible"}
        marginTop={"2rem"} marginBottom={"5rem"}>
            
            {/*Creats a card for each scores in search result*/}
            {partitions.map((partition) => (
                <PartitionCard key={partition.id} partition={partition} currentInstrument={instrumentName as string}/>
            ))}

        </Grid>
    )
}

export default Result;