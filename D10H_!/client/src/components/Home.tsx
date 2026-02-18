import { Box } from "@chakra-ui/react"

import Carousel from "./Carousel"
import { type IPartitions } from "../types/partitions";
import PartitionCard from "./PartitionCard";
import Img from '../../public/img/Partition.jpeg'
import Chant from '../../public/img/Chant.png'

const MOCK_PARTITIONS1: IPartitions[] = [
    {
        id: 1, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img,
    },
    {
        id: 2, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 3, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 4, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 5, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 6, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 7, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 8, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 9, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 10, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 11, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
    {
        id: 12, // Dans ton .ts c'est un number
        title: "Stairway to Heaven",
        artist: {
            id: 101,
            name: "Led Zeppelin",
            picture: "https://e-cdns-images.dzcdn.net/images/artist/6dc40ad177e302c12946f0b7418f49e6/500x500-000000-80-0-0.jpg",
        },
        album: {
            id: 201,
            title: "Led Zeppelin IV",
            cover: "https://e-cdns-images.dzcdn.net/images/cover/610078330746e39860b77821c97a73a3/500x500-000000-80-0-0.jpg",
            deezer_link: "https://www.deezer.com/album/78245",
            artist: { id: 101, name: "Led Zeppelin", picture: "" } // Nécessaire selon ton interface
        },
        genre: {
            id: 1,
            name: "Rock",
            picture: ""
        },
        measures: [],
        difficulty: 3,
        instruments: {
            currentInstrument: { id: 1, name: "guitare", imgSrc: Chant },
            othersInstruments: []
        },
        bpm: 82,
        time_signature: "4/4",
        clef: "G",
        duration: 482,
        deezer_link: "https://www.deezer.com/track/674640",
        audio_preview: "",
        partition_preview: Img, // Ton import local
    },
];

const MOCK_PARTITIONS2: IPartitions[] = []

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
    return(
        <Box id="main"
        overflowY={"auto"} height={"100%"} mb={"70px"}>
            <Carousel id="recents-carousel" 
            data={MOCK_PARTITIONS2} title="Partitions joués récement"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )} />

            <Carousel id="suggestions-carousel"
            data={MOCK_PARTITIONS1} title="Suggestions"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Carousel id="news-carousel"
            data={MOCK_PARTITIONS2} title="nouveautés"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Carousel id="popular-carousel"
            data={MOCK_PARTITIONS1} title="Partitions populaires"
            renderItem={(item:IPartitions) => (
                <PartitionCard key={item.id} partition={item} currentInstrument={item.instruments.currentInstrument.name} />
            )}/>

            <Box as="section" id="listen" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
        </Box>
    )
}

export default Home