import React from "react";
import './portfolio.css'
import { data, responsiveSettings } from "./pfData";
import PfCard from "./pfCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Portfolio = ()=>{
    
    const cards = data.map(item =>(
        <PfCard 
        name={item.name} 
        img={item.img} 
        description={item.description} 
        techStack={item.techStack} 
        cardId={item.id}
        />
    ));
    
    return (
        <section id="portfolio">
            <span>My Portfolio</span>
            <div className="cardsContainer">
                <Carousel 
                containerClass="carouselContainer"
                showDots={false}
                arrows={false}
                draggable={true}
                swipeable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                pauseOnHover={true}
                partialVisbile={false}
                ssr={true}
                responsive={responsiveSettings} >
                    {cards}  
                </Carousel>
            </div>
        </section>
    )
}

export default Portfolio;