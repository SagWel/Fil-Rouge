import "react";
import { Link } from "react-router-dom";
import './BarNav.css'

function BarNav() {
    return (
        <nav className="barnav">
            <ul>
                <li className="liste nom">
                    D10H !
                </li>
                <li>
                    <Link to="https://www.deezer.com/fr/" className="liens liste deezer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="20" fill="none">
                            <path fill="currentColor" d="M0 0h10.065c6.232 0 10.639 4.13 10.639 10s-4.407 10-10.639 10H0V0Zm7.823 14.597h1.825c1.956 0 2.999-1.298 2.999-4.597 0-3.299-1.043-4.597-3-4.597H7.824v9.194ZM40.153 20H23.62V0h16.532v5.403h-8.735v2.311h8.213v4.416h-8.213v2.467h8.735V20Zm20.31 0H43.93V0h16.532v5.403h-8.736v2.311h8.214v4.416h-8.214v2.467h8.736V20Zm66.159 0c-1.126-3.058-2.702-6.321-4.821-9.979 2.479-.724 3.961-2.28 3.961-4.67 0-3.637-3.364-5.351-8.683-5.351h-10.952v20h7.823v-8.273c1.738 2.916 3.018 5.667 3.859 8.273h8.813ZM113.95 8.935V5.403h2.712c1.147 0 1.799.623 1.799 1.766s-.652 1.766-1.799 1.766h-2.712ZM102.328 20H85.797V0h16.531v5.403h-8.735v2.311h8.214v4.416h-8.214v2.467h8.735V20ZM64.397 5.403h8.071c-3.349 2.729-6.105 5.82-8.228 9.194V20h17.758v-5.403h-8.876c2.034-2.947 4.876-5.882 8.876-9.194V0H64.397v5.403Z" clip-rule="evenodd"></path>
                        </svg>
                    </Link>
                </li>
                <li className="css-barnav"></li>
                <li>
                    <Link to="/" className="liens liste">
                        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-mpq5dm" data-testid="HouseFilledIcon">
                            <path d="M22.834 14.656c-.182-2.288-.495-3.923-.853-5.738 0 0-2.517-2.695-5.128-4.817C14.324 2.044 12.788 1 12.006 1h-.012c-.764 0-2.316 1.044-4.847 3.101-2.61 2.122-5.128 4.817-5.128 4.817-.358 1.816-.671 3.45-.853 5.738A52.258 52.258 0 0 0 1.167 23H9v-6.31a3 3 0 0 1 3-2.994 3 3 0 0 1 3 2.994V23h7.833c.185-2.29.257-5.113 0-8.344Z"></path>
                        </svg>
                    Acceuil</Link>
                </li>
                <li>
                    <Link to="/Instruments" className="liens liste">Liste Instruments</Link>
                </li>
                <li>
                    <Link to="/Connexion" className="liens liste">Connexion</Link>
                </li>
            </ul>
        </nav>
    );
}

export default BarNav