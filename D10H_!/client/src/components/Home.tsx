import { Box } from "@chakra-ui/react"

import Carousel from "./Carousel"
import { type IPartitions } from "../types/partitions";
import PartitionCard from "./PartitionCard";
import Img from '../img/partition.jpeg'

const MOCK_PARTITIONS: IPartitions[] = [
    { id: "1", title: "Stairway to Heaven", artist: "Led Zeppelin", difficulty: 3, instrument: "guitare", preview: Img, audioPreviewUrl: "" },
    { id: "2", title: "Bohemian Rhapsody", artist: "Queen", difficulty: 5, instrument: "piano", preview: Img, audioPreviewUrl: "" },
    { id: "3", title: "Stairway to Heaven", artist: "Led Zeppelin", difficulty: 3, instrument: "guitare", preview: Img, audioPreviewUrl: "" },
    { id: "4", title: "Bohemian Rhapsody", artist: "Queen", difficulty: 5, instrument: "piano", preview: Img, audioPreviewUrl: "" },
    { id: "5", title: "Stairway to Heaven", artist: "Led Zeppelin", difficulty: 3, instrument: "guitare", preview: Img, audioPreviewUrl: "" },
    { id: "6", title: "Bohemian Rhapsody", artist: "Queen", difficulty: 5, instrument: "piano", preview: Img, audioPreviewUrl: "" },
    { id: "7", title: "Stairway to Heaven", artist: "Led Zeppelin", difficulty: 3, instrument: "guitare", preview: Img, audioPreviewUrl: "" },
    { id: "8", title: "Bohemian Rhapsody", artist: "Queen", difficulty: 5, instrument: "piano", preview: Img, audioPreviewUrl: "" },
    { id: "9", title: "Stairway to Heaven", artist: "Led Zeppelin", difficulty: 3, instrument: "guitare", preview: Img, audioPreviewUrl: "" },
    { id: "10", title: "Bohemian Rhapsody", artist: "Queen", difficulty: 5, instrument: "piano", preview: Img, audioPreviewUrl: "" },
    { id: "11", title: "Stairway to Heaven", artist: "Led Zeppelin", difficulty: 3, instrument: "guitare", preview: Img, audioPreviewUrl: "" },
    { id: "12", title: "Bohemian Rhapsody", artist: "Queen", difficulty: 5, instrument: "piano", preview: Img, audioPreviewUrl: "" },
];

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
    return(
        <Box id="main"
        overflowY={"auto"} height={"100%"}>
            <Carousel id="recents-carousel" 
            data={MOCK_PARTITIONS} title="Mourceaux joués récement"
            renderItem={(item) => (
                <PartitionCard key={item.id} partition={item} />
            )} />
            <Box as="section" id="suggestions" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
            <Box as="section" id="news" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
            <Box as="section" id="tops" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
            <Box as="section" id="listen" display={"block"}>

                {/* future CAROUSEL */}

            </Box>
        </Box>
    )
}

export default Home