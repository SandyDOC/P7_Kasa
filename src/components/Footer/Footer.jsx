import Logo from "./../../assets/images/logo/Logo_Kasa_White.png";
import "./Footer.scss";

function Footer() {
    return (
    <footer>
       <img src={Logo} alt="logo Kasa" />
       <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}

export default Footer;