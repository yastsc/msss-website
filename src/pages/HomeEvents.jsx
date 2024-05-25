import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import "./HomeFeaturedNews.css";
import "./HomeEvents.css";
import data from "./Events.json";

function HomeEvents() {
  var settings = {
    // dots: true,
    // infinite: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1 style= {{ paddingTop: "5rem"}} className="featuredNewsTitle">Events</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="card_container" key={index}>
              <Card 
                img={item.img}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeEvents;
