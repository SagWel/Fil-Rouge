import { Grid } from "@chakra-ui/react";

/* Import component */
import ScoreCard from './ScoreCard';

/* Import type */
import { type IScore } from "../types/Score";

export interface IScoresResult {}

/*Mock database*/
const mockPartitons: IScore[] = [
    {
        title : "Zombie",
        artist : "The Cranberries",
        difficulty : 1,
        instrument : "guitare",
        preview : "",
        audioPreviewUrl : "https://fake_url.com",
        id : "1",
    },
    {
        title : "Smells Like Teen Spirit",
        artist : "Nirvanna",
        difficulty : 2,
        instrument : "guitare",
        preview : "",
        audioPreviewUrl : "https://fake_url.com",
        id : "2",
    },
    {
        title : "Comme Des Connards",
        artist : "Mickael Youn",
        difficulty : 2,
        preview : "",
        audioPreviewUrl : "https://fake_url.com",
        id : "3",
    },
    {
        title : "Still Waiting",
        artist : "Sum 41",
        difficulty : 4,
        preview : "",
        audioPreviewUrl : "https://fake_url.com",
        id : "4",
    },
    {
        title : "Pretty Fly (For A White Guy)",
        artist : "The Offspring",
        difficulty : 3,
        preview : "",
        audioPreviewUrl : "https://fake_url.com",
        id : "5",
    }
]

const ScoresResult: React.FC<IScoresResult> = () => {
    return(
        <Grid id="resultZone" templateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}
        gap={"7"} justifyItems={"center"} p={"4"}
        overflow={"visible"}
        marginTop={"2rem"} marginBottom={"5rem"}>
            
            {/*Creats a card for each scores in search result*/}
            {mockPartitons.map((score) => (
                <ScoreCard key={score.id} score={score} currentInstrument={score.instruments.currentInstrument.name}/>
            ))}

        </Grid>
    )
}

export default ScoresResult