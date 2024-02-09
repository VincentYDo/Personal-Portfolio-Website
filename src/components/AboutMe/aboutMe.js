import React from "react";
import './aboutMe.css';

const AboutMe = () => {
    return (
        <section id="aboutMe"> 
            <span className="aboutMeTitle">What I do</span>
            <span className="aboutMeDescription">As a full-stack engineer, I bring expertise in React, JavaScript, HTML, CSS, Node.js, Express.js, and MongoDB. With proficiency across these technologies, I develop end-to-end solutions, integrating front-end interfaces with scalable back-end architectures. My commitment to staying updated ensures that I deliver efficient and innovative software solutions consistently.</span>
            <div className="aboutMeBars">
                <div className="aboutMeBar">
                    <img className="skillBarImg" src='' alt='Skill Picture'></img>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>description of skill</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img className="skillBarImg" src='' alt='Skill Picture'></img>
                    <div className="skillBarText">
                        <h2>Database Design</h2>
                        <p>description of skill</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img className="skillBarImg" src='' alt='Skill Picture'></img>
                    <div className="skillBarText">
                        <h2>Security Implementation</h2>
                        <p>description of skill</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img className="skillBarImg" src='' alt='Skill Picture'></img>
                    <div className="skillBarText">
                        <h2>Agile Adaptation</h2>
                        <p>description of skill</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe;