import InstrumentList from "../components/ListInstrument";

import { useLocation } from "react-router-dom";

export interface IPageListeInstrumentsProps {}

const PageListeInstruments: React.FC<IPageListeInstrumentsProps> = () => {
    return (       
        <InstrumentList /> 
    );
}

export default PageListeInstruments