import Logo from "./../../assets/images/logo/Logo_Kasa-Red.png";
import { useLocation, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
    const location = useLocation();
    return (
    <header className="header">
        <img src={Logo} alt="logo Kasa" className="logo"/>
        <nav className="nav">
            <ul>
                <li><NavLink to="/" className={location.pathname === '/' && 'selected'}>Accueil</NavLink></li>
                {/* <li><NavLink to="/" className={location.pathname === '/' ? 'selected' : 'navlink'}>Accueil</NavLink></li> */}
                <li><NavLink to="/about" className={location.pathname === '/about' && 'selected'}>A propos</NavLink></li>
           </ul>
        </nav>
    </header>
    )
}

export default Header;