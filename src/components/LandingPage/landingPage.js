import React from "react";
import './landingPage.css';

const LandingPage = () => {
    return(
        <section id="landingPage">
            <div className="landingPageContent">
                <span className="greeting">Greetings,</span>
                <span className="landingPageText"> I'm <span className='landingPageName'> Vincent Do</span> 
                <br/>Full Stack Developer</span>
                <p className="landingPagePara">I am a dedicated and passionate software engineer, committed to crafting innovative solutions and continuously expanding my skill set to drive excellence in software development.</p>
            </div>
        </section>
    )

}

export default LandingPage