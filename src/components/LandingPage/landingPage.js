import React from "react";
import './landingPage.css';
import selfie from '../../assets/DSC05201-2.jpg';

const LandingPage = () => {
    return(
        <section id="landingPage">
            <div className="landingPageContent">
                <span className="greeting">Greetings,</span>
                <span className="landingPageText"> I'm <span className='landingPageName'> Vincent Do</span> 
                <br/>Full Stack Developer</span>
                <p className="landingPagePara">I am a dedicated and passionate software engineer, committed to <br/> crafting innovative solutions and continuously expanding my skill<br/>set to drive excellence in software development.</p>
                
            </div>
            <img src={selfie} alt='selfie' className='selfie'/>
        </section>
    )

}

export default LandingPage