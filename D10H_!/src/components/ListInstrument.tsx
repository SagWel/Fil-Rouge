import { Grid } from "@chakra-ui/react";

import InstrumentCard from './InstrumentCard'
import { IInstrument } from "../types/instrument";

// Pictures import as modules
import Guitare from '../../public/img/Guitare.png';
import Basse from '../../public/img/Basse.png';
import Piano from '../../public/img/Piano.png';
import Batterie from '../../public/img/Batterie.png';
import Chant from '../../public/img/Chant.png';
import Ukulele from '../../public/img/Ukulele.png';
import Saxo from '../../public/img/Saxo.png';

export interface IListInstrumentsProps {}

const ListInstruments: React.FC<IListInstrumentsProps> = () => {
    // Instruments data is located here, but it will be moved to the database.
const instrumentData: IInstrument[] = [
    { id: 'guitare' , name: 'guitare' ,  imgSrc: Guitare, linkToSearch: '/partitions/guitare'},
    { id: 'basse' , name: 'basse' ,  imgSrc: Basse , linkToSearch: '/partitions/basse'},
    { id: 'piano' , name: 'piano' ,  imgSrc: Piano , linkToSearch: '/partitions/piano'},
    { id: 'batterie' , name: 'batterie' ,  imgSrc: Batterie , linkToSearch: '/partitions/batterie'},
    { id: 'chant' , name: 'chant' ,  imgSrc: Chant , linkToSearch: '/partitions/chant'},
    { id: 'ukulele' , name: 'ukulele' ,  imgSrc: Ukulele , linkToSearch: '/partitions/ukulele'},
    { id: 'saxo' , name: 'saxo' ,  imgSrc: Saxo , linkToSearch: '/partitions/saxo'},
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