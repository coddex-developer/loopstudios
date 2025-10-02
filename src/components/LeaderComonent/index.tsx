import "./style.min.scss";

function LeaderComponent() {
    return (
        <>
            <div className="containerLeader">
                <img src="/images/mobile/image-interactive.jpg" className="imageMobile" alt="" />
                <img src="/images/desktop/image-interactive.jpg" className="imageDesktop" alt="" />
                <div className="cardLeaderInfo">
                    <h2>
                        THE LEADER IN INTERACTIVE VR
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim necessitatibus iste, sapiente ad voluptatem possimus?
                        Ex repudiandae alias possimus reiciendis.
                    </p>
                </div>
            </div>
        </>
    )
}
export default LeaderComponent;