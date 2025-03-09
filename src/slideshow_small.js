import React from "react";
import Slider from "react-slick";

const Slideshow_small = ({images}) => { 
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        siwpeToSlide: true,
        // fade: true,
        dots: true,
        dotsClass: "slick-dots",
        pauseOnHover: false,
        cssEase: "linear",
    };
    return (
        <div className="slideshow-small">
        <Slider {...settings}>
            {images.map((item) => (
                <div key={item.id} className="image-body">
                    <img src={item.imagePath} alt="Slideshow" className="slideshow-image-small" />
                </div>
            ))}
        </Slider>
        </div>
    );
}
export default Slideshow_small;