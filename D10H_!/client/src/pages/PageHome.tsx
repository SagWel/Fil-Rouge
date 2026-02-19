import Home from "../components/Home";
import Login from "../components/login";

export interface IPageAcceuilProps {}

const PageAcceuil: React.FC<IPageAcceuilProps> = () => {
    return(
        <Login />
    )
}

export default PageAcceuil;