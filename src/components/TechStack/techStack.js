import React from "react";
import './techStack.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const techStack = () =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase:'linear'
    }

    return(
        <section id="techStack">    
            <h1>Tech Stack</h1>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
                </Slider>
            
        </section>
    )
}

export default techStack;