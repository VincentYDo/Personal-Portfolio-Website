import React from "react";
import './aboutMe.css';
import webDesign from '../../assets/webDesign.png';
import database from '../../assets/database.png';
import security from '../../assets/security.png';
import adaptation from '../../assets/adaptation.png';

const AboutMe = () => {
    return (
        <section id="aboutMe"> 
            <span className="aboutMeTitle">What I do</span>
            <span className="aboutMeDescription">As a full-stack engineer, I bring expertise in React, JavaScript, HTML, CSS, Node.js, Express.js, and MongoDB. With proficiency across these technologies, I develop end-to-end solutions, integrating front-end interfaces with scalable back-end architectures. My commitment to staying updated ensures that I consistently deliver efficient and innovative software solutions.</span>
            <div className="aboutMeBars">
                <div className="aboutMeBar">
                    <img className="skillBarImg" src={webDesign} alt='Web Design'></img>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Description of skill and how it's good to hire me or something. More words to fill the space.</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img className="skillBarImg" src={database} alt='Database Design'></img>
                    <div className="skillBarText">
                        <h2>Database Design</h2>
                        <p>Description of skill and how it's good to hire me or something. More words to fill the space.</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img className="skillBarImg" src={security} alt='Security Implementation'></img>
                    <div className="skillBarText">
                        <h2>Security Implementation</h2>
                        <p>Description of skill and how it's good to hire me or something. More words to fill the space.</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img className="skillBarImg" src={adaptation} alt='Agile Adaptation'></img>
                    <div className="skillBarText">
                        <h2>Agile Adaptation</h2>
                        <p>Description of skill and how it's good to hire me or something. More words to fill the space.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe;