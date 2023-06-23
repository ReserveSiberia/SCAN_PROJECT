import React, { Component } from "react";

import "../styles/Carousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ImgPlaceholder1 from "../assests/images/speed.svg";
import ImgPlaceholder2 from "../assests/images/data.svg";
import ImgPlaceholder3 from "../assests/images/protect.svg";

import Slider from "react-slick";

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };  
  return (
    <div className="carousel">
      <h2>Почему именно мы</h2>
      
      <Slider className="slider" {...settings}>
        <div className="box">
            <img src={ImgPlaceholder1} alt="Banner"/>
            <h3>Высокая и оперативная скорость обработки заявки</h3>
        </div>

        <div className="box">
            <img src={ImgPlaceholder2} alt="Banner"/>
            <h3>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</h3>
        </div>

        <div className="box">
            <img src={ImgPlaceholder3} alt="Banner"/>
            <h3>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</h3>
        </div>

        <div className="box">
            <img src={ImgPlaceholder1} alt="Banner"/>
            <h3>Высокая и оперативная скорость обработки заявки</h3>
        </div>

        <div className="box">
            <img src={ImgPlaceholder2} alt="Banner"/>
            <h3>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</h3>
        </div>

        <div className="box">
            <img src={ImgPlaceholder3} alt="Banner"/>
            <h3>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</h3>
        </div>

      </Slider>
    </div>
  );
}

export default Carousel;