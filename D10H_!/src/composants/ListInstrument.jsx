import { Grid } from "@chakra-ui/react";

import InstrumentCard from './InstrumentCard'

// Pictures import as modules
import Guitare from '../img/Guitare.png';
import Basse from '../img/Basse.png';
import Piano from '../img/Piano.png';
import Batterie from '../img/Batterie.png';
import Chant from '../img/Chant.png';
import Ukulele from '../img/Ukulele.png';
import Saxo from '../img/Saxo.png';

// Instruments data is located here, but it will be moved to the database.
let instrumentData = [
    { id: 'guitare' , name: 'Guitare' ,  imgsrc: Guitare, linkTo: '/partitions/guitare'},
    { id: 'basse' , name: 'Basse' ,  imgsrc: Basse , linkTo: '/partitions/basse'},
    { id: 'piano' , name: 'Piano' ,  imgsrc: Piano , linkTo: '/partitions/piano'},
    { id: 'batterie' , name: 'Batterie' ,  imgsrc: Batterie , linkTo: '/partitions/batterie'},
    { id: 'chant' , name: 'Chant' ,  imgsrc: Chant , linkTo: '/partitions/chant'},
    { id: 'ukulele' , name: 'Ukulele' ,  imgsrc: Ukulele , linkTo: '/partitions/ukulele'},
    { id: 'saxo' , name: 'Saxo' ,  imgsrc: Saxo , linkTo: '/partitions/saxo'},
]

function InstrumentList () {
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

export default InstrumentList;