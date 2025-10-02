import { urlImage } from "../../utils/ImagesConfig";

function Footer() {
    return (
        <>
            <div className="containerFooter">
                <div className="menuFooter">
                    <img src={urlImage.url} alt="logo" />
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="socialButtons">
                    <a href="#">
                        <img src="/images/mobile/icon-facebook" />
                    </a>
                    <a href="#">
                        <img src="/images/mobile/icon-twitter" />
                    </a>
                    <a href="#">
                        <img src="/images/mobile/icon-pinterest" />
                    </a>
                    <a href="#">
                        <img src="/images/mobile/icon-instagram" />
                    </a>
                </div>
            </div>
        </>
    )
}
export default Footer;