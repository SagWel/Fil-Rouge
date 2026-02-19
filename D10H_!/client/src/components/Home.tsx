import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";

import Carousel from "../components/Carousel"
import { type IPartitions } from "../types/partitions";
import PartitionCard from "../components/PartitionCard";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
    const [popularPartitions, setPopularPartitions] = useState<IPartitions[] | []>([])
    const [newsPartitions, setNewsPartitions] = useState<IPartitions[] | []>([])
    const [suggestionsPartitions, setSuggestionsPartitions] = useState<IPartitions[] | []>([])
    const [historyPartitions, setHistoryPartitions] = useState<IPartitions[] | []>([])

    const fetchPartitions = async (URL: string, set: React.Dispatch<React.SetStateAction<IPartitions[] | []>>) => {
        const host = import.meta.env.VITE_HOST
        const port = import.meta.env.VITE_SERVER_PORT

        try {
            const res = await fetch(`http://${host}:${port}${URL}`)

            if (!res.ok) {
                throw new Error(`Erreur HTTP: ${res.status}`);                
            }

            const data = await res.json()
            set(data)
        } catch (error) {
            console.error('Impossible de récupérer les données des partitions:', error);
        }
    }

    useEffect(() => {
        const urlFetchPopular = import.meta.env.VITE_URL_FETCH_POPULAR
        const urlFetchNews = import.meta.env.VITE_URL_FETCH_NEWS
        const urlFetchSuggestions = import.meta.env.VITE_URL_FETCH_SUGGESTIONS

        fetchPartitions(urlFetchPopular, setPopularPartitions)
        fetchPartitions(urlFetchNews, setNewsPartitions)
        fetchPartitions(urlFetchSuggestions, setSuggestionsPartitions)
    })

    return(
        <Box id="homeUser"
        overflowY={"auto"} height={"100%"} mb={"70px"}>
            <Carousel id="recents-carousel" 
            data={historyPartitions} title="Partitions joués récement"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )} />

            <Carousel id="suggestions-carousel"
            data={suggestionsPartitions} title="Suggestions"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Carousel id="news-carousel"
            data={newsPartitions} title="nouveautés"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Carousel id="popular-carousel"
            data={popularPartitions} title="Partitions populaires"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>
        </Box>
    )
}

export default Home