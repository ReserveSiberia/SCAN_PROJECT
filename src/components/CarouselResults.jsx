import React, { Component, useState } from "react";
import {format} from 'date-fns';

import "../styles/CarouselResults.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


function CarouselResults() {
  const res = {
    "data": [{
      "data": [{
        "date": "2020-27-01T03:00:00+03:00",
        "value": 9
      }, {
        "date": "2020-22-01T03:00:00+03:00",
        "value": 8
      }, 
      {
        "date": "2020-20-01T03:00:00+03:00",
        "value": 7
      },
              {
        "date": "2020-17-01T03:00:00+03:00",
        "value": 6
      }, {
        "date": "2020-15-01T03:00:00+03:00",
        "value": 6
      }, 
      {
        "date": "2020-13-01T03:00:00+03:00",
        "value": 4
      },
              {
        "date": "2020-11-01T03:00:00+03:00",
        "value": 3
      }, {
        "date": "2020-06-01T03:00:00+03:00",
        "value": 2
      }, 
      {
        "date": "2020-03-01T03:00:00+03:00",
        "value": 1
      }],
      "histogramType": "totalDocuments"
    }, {
      "data": [{
        "date": "2020-27-01T03:00:00+03:00",
        "value": 1
      }, {
        "date": "2020-22-01T03:00:00+03:00",
        "value": 3
      }, 
      {
        "date": "2020-20-01T03:00:00+03:00",
        "value": 5
      },
              {
        "date": "2020-17-01T03:00:00+03:00",
        "value": 7
      }, {
        "date": "2020-15-01T03:00:00+03:00",
        "value": 9
      }, 
      {
        "date": "2020-13-01T03:00:00+03:00",
        "value": 8
      },
              {
        "date": "2020-11-01T03:00:00+03:00",
        "value": 3
      }, {
        "date": "2020-06-01T03:00:00+03:00",
        "value": 2
      }, 
      {
        "date": "2020-03-01T03:00:00+03:00",
        "value": 1
      }],
      "histogramType": "riskFactors"
    }]
  };

  const [totals, setTotals] = useState([]);
  if(!totals.length) {
    setTotals(res.data[0].data)
  };

  //const [risks, setRisks] = useState([]);
  //if(!risks.length) {
  //  setRisks(res.data[1].data)
  //};
  //console.log(totalrisks);
  //const totals = totalrisks[0].data;
  //const risks = totalrisks[1].data;
  //console.log(totals);
  //console.log(risks);
  
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
    <div className="carousel_res">
      <h2>Общая сводка</h2>
      <h6>Найдено {totals.length} вариантов</h6>
      
      <Slider className="slider_res"{...settings}>
        {totals.map(total => 
        <div className="box_res">
            <h3>{total.date.substr(0, 10)}</h3>
            <h4>{total.value}</h4>
        </div>)} 
        
      </Slider> 
    </div>
  );
}

export default CarouselResults;



