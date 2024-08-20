import "./Banner.scss";

function Banner({ image, title }) {
    return (
        <div id="banner">
            <img src={image} alt="bannière" className="bannerImg" />
            <p>{title}</p>
        </div>
    )
}

export default Banner;