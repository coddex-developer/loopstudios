import "./style.min.scss"
import Navbar from "../../fragments/navbar";

function MainComponent() {
    return (
        <>
            <div className="mainContainer">
                < Navbar />
                <div className="banner">
                    <h1>
                        IMMERSIVE EXPERIENCES THAT DELIVER
                    </h1>
                </div>
            </div>
        </>
    )
}
export default MainComponent;