import { Grid } from "@chakra-ui/react";

import PartitionCard from './PartitionCard';
import { IPartitions } from "../types/partitions";

// Pictures import as modules
import PartitionImg from '../../public/img/Partition.jpeg';

export interface IResultProps {}

/*Mock database*/
const mockPartitons: IPartitions[] = [
        {
            title : "Zombie",
            artist : "The Cranberries",
            difficulty : 1,
            instrument : "guitare",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "1",
        },
        {
            title : "Smells Like Teen Spirit",
            artist : "Nirvanna",
            difficulty : 2,
            instrument : "batterie",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "2",
        },
        {
            title : "Comme Des Connards",
            artist : "Mickael Youn",
            difficulty : 2,
            instrument : "piano",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "3",
        },
        {
            title : "Still Waiting",
            artist : "Sum 41",
            difficulty : 4,
            instrument : "basse",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "4",
        },
        {
            title : "Pretty Fly (For A White Guy)",
            artist : "The Offspring",
            difficulty : 3,
            instrument : "chant",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "5",
        },
        {
            title : "Over The Rainbow",
            artist : "Israel Kamakawiwo'ole",
            difficulty : 2,
            instrument : "ukulele",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "6",
        },
        {
            title : "Baker Street",
            artist : "Gerry Rafferty",
            difficulty : 2,
            instrument : "saxo",
            preview : PartitionImg,
            audioPreviewUrl : "https://fake_url.com",
            id : "7",
        },
    ]

const Result: React.FC<IResultProps> = () => {
    return(
        <Grid id="resultZone" templateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}
        gap={"7"} justifyItems={"center"} p={"4"}
        overflow={"visible"}
        marginTop={"2rem"} marginBottom={"5rem"}>
            
            {/*Creats a card for each scores in search result*/}
            {mockPartitons.map((partition) => (
                <PartitionCard key={partition.id} partition={partition} />
            ))}

        </Grid>
    )
}

export default Result;