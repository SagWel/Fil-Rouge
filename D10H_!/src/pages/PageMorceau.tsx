import Morceau from "../components/Morceau";

export interface IPageMorceauProps {onPlay: boolean}

const PageMorceau: React.FC<IPageMorceauProps> = ({onPlay}) => {
    return (
       <Morceau onPlay={onPlay}/>
    );
}

export default PageMorceau;