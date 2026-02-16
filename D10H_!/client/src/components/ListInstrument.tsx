import { Grid } from "@chakra-ui/react";

import InstrumentCard from './InstrumentCard'
import { IInstrument } from "../types/instrument";

// Pictures import as modules
import Guitare from '../img/Guitare.png';
import Basse from '../img/Basse.png';
import Piano from '../img/Piano.png';
import Batterie from '../img/Batterie.png';
import Chant from '../img/Chant.png';
import Ukulele from '../img/Ukulele.png';
import Saxo from '../img/Saxo.png';

export interface IListInstrumentsProps {}

const ListInstruments: React.FC<IListInstrumentsProps> = () => {
    // Instruments data is located here, but it will be moved to the database.
const instrumentData: IInstrument[] = [
    { id: 'guitare' , name: 'Guitare' ,  imgSrc: Guitare, linkTo: '/partitions/guitare'},
    { id: 'basse' , name: 'Basse' ,  imgSrc: Basse , linkTo: '/partitions/basse'},
    { id: 'piano' , name: 'Piano' ,  imgSrc: Piano , linkTo: '/partitions/piano'},
    { id: 'batterie' , name: 'Batterie' ,  imgSrc: Batterie , linkTo: '/partitions/batterie'},
    { id: 'chant' , name: 'Chant' ,  imgSrc: Chant , linkTo: '/partitions/chant'},
    { id: 'ukulele' , name: 'Ukulele' ,  imgSrc: Ukulele , linkTo: '/partitions/ukulele'},
    { id: 'saxo' , name: 'Saxo' ,  imgSrc: Saxo , linkTo: '/partitions/saxo'},
]

    return (
    <Grid
    marginTop={"3rem"} paddingBottom={"3rem"}
    justifyItems={"center"}
    templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)"
    }} columnGap={"3rem"} rowGap={"6rem"}
    px={"12"}>
        
        {/*Creats a card for each instrument in database*/}
        {instrumentData.map((instrument) => (
            <InstrumentCard key={instrument.id} instrument={instrument} />
        ))}
    </Grid>
    )
}

export default ListInstruments;