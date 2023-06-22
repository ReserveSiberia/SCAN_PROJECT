import React, { Component, useState } from "react";

import "../styles/CarouselResults.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


function CarouselResults() {
  const res = {
    "data": [{
      "data": [{
        "date": "2020-11-01T03:00:00+03:00",
        "value": 8
      }, {
        "date": "2020-06-01T03:00:00+03:00",
        "value": 6
      }],
      "histogramType": "totalDocuments"
    }, {
      "data": [{
        "date": "2020-11-01T03:00:00+03:00",
        "value": 0
      }, {
        "date": "2020-06-01T03:00:00+03:00",
        "value": 1
      }],
      "histogramType": "riskFactors"
    }]
  };
  const [totalrisks, setTotalrisks] = useState([]);
  if(!totalrisks.length) {
    setTotalrisks(res.data)
  };
  const totals = totalrisks.map(totalrisk => totalrisk.data);
  console.log(totals.map(total => total.date));
  // totalrisks.map(totalrisk => console.log(totalrisk.data[0].date));
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
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
      <h2>Общая сводка</h2>
      <h6>Найдено {totalrisks.length} вариантов</h6>
      
      <Slider {...settings}>
       {/* {totalrisks.map(totalrisk => 
        <div className="box">
            <h3>{totalrisk.data[0].date}</h3>
            <h4>{totalrisk.data[0].value}</h4>
            <h4>{totalrisk.data[1].value}</h4>
        </div>)} */}

      </Slider> 
    </div>
  );
}

export default CarouselResults;