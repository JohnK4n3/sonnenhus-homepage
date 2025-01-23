import React from 'react';
import Slider from 'react-slick';
import { useState, useEffect } from "react";

const SliderThumb = ({images}) => { 
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
    });

    const settings = {
        infinite: true,
        centerPadding: "125px",
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 5,
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
    };
    const thumbnailSettings = {
        slidesToShow: 1,
        slidesToScroll: 3,
        asNavFor: ".slider-for",
        centerMode:true,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: ( <div className="slick-next">
        Next</div>),
      prevArrow: (
       <div className="slick-prev">
            Previous
          </div>
        
      ),
        
      };

  
    return ( 
        <div> 
          <div className="slideshow">
          <Slider {...settings}
              asNavFor={nav2}
              ref={(slider) => setSlider1(slider)}
          >
             {images.map((item) => (
              <div key={item.id}>
                <img src={item.imagePath} alt="Slideshow" className="slideshow-image" />
              </div>
            ))}
          </Slider>
          </div>
          <div className="thumbnail-wrapper">
          <Slider
            {...thumbnailSettings}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          > 
          {images.map((item) => (
              <div key={item.id}>
                <hr />
                <img src={item.imagePath} alt={item.alt} className="thumb-img" />
                <hr />
            </div>
          ))}
        </Slider>
        </div>
        </div>
    );
        };
  
  export default SliderThumb;