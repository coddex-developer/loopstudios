import { urlImage } from "../../utils/ImagesConfig";
import "./style.min.scss";
function Navbar() {

    return (
        <>
            <div className="navbarContainer">
                <img src={urlImage.url} alt="logo" />
                <img src="/images/icon-hamburger.svg" className="menuHamburguer" alt="menuHamburguer" />
                <ul className="navbarMenu">
                    <li className="btnUrlNavbar">About</li>
                    <li className="btnUrlNavbar">Careers</li>
                    <li className="btnUrlNavbar">Events</li>
                    <li className="btnUrlNavbar">Products</li>
                    <li className="btnUrlNavbar">Support</li>
                </ul>
            </div>
        </>
    )
}
export default Navbar;