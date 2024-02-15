import React from "react";
import portfolio from './portfolio.css'
import PfCarousel from "./pfCarousel.js";


// we want a pic, project name, description, tech stack

const Portfolio = ()=>{
    
    const data = [
        {   name: 'Kafkometry',
            img: require('../../assets/portfolioPics/kafkometryCardImg.jpeg'),
            description: 'A web application that allows users to track target metrics in their Kafka Clusters.',
            techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
        },
        {
            name: 'Find-My-Fuel',
            img: require('../../assets/portfolioPics/findMyFuelCardImg.png'),
            description: 'A web application that allows users to find the nearest fuel stations to them.',
            techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
        },
        {
            name: ' Frenchies',
            img: require('../../assets/portfolioPics/frenchieCardImg.jpeg'),
            description: 'A web application that allows users to find local restaurants in their area.',
            techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
        },
        {
            name: 'Scratch',
            img: require('../../assets/portfolioPics/scratchCardImg.png'),
            description: 'A web application that allows users to find local restaurants in their area.',
            techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
        }
    
    ];
    
    return (
        <section id="portfolio">
            <span>My Portfolio</span>
            <div className="cardsContainer">
                <PfCarousel/>

                {/* <div className="card">
                    <div className="cardImage">
                        <img src="" alt="project pic"/>
                    </div>
                    <div className="cardText">
                        <h2>Kafkometry</h2>
                        <p>Project Description</p>
                        <p>Tech Stack</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src="" alt="project pic"/>
                    </div>
                    <div className="cardText">
                        <h2>Find-My-Fuel</h2>
                        <p>Project Description</p>
                        <p>Tech Stack</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src="" alt="project pic"/>
                    </div>
                    <div className="cardText">
                        <h2>Frenchies</h2>
                        <p>Project Description</p>
                        <p>Tech Stack</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src="" alt="project pic"/>
                    </div>
                    <div className="cardText">
                        <h2>Scratch</h2>
                        <p>Project Description</p>
                        <p>Tech Stack</p>
                    </div>
                </div> */}
            </div>

        </section>
    )
}

export default Portfolio;