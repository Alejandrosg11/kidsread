import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

class Carousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <div>
          <Slider {...settings} className="carousel">
            <div>
               <img src="./assets/carousel01.png" alt=""/> 
            </div>
            <div>
              <h3><img src="./assets/carousel02.png" alt=""/></h3>
            </div>
            <div>
              <h3><img src="./assets/carousel03.png" alt=""/></h3>
            </div>
            <div>
              <h3><img src="./assets/carousel04.png" alt=""/></h3>
            </div>
            <div>
              <h3><img src="./assets/carousel05.png" alt=""/></h3>
            </div>
            <div>
              <h3><img src="./assets/carousel06.png" alt=""/></h3>
            </div>
          </Slider>
          </div>
        );
      }
    }

  export default Carousel