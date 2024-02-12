import React from "react";
import './landingPage.css';
import {Link} from 'react-scroll';
import envelope from '../../assets/envelope.jpg';
import selfie from '../../assets/suitPic Background Removed.png';

const LandingPage = () => {
    return(
        <section id="landingPage">
            <div className="landingPageContent">
                <span className="greeting">Greetings,</span>
                <span className="landingPageText"> I'm <span className='landingPageName'> Vincent Do</span> 
                <br/>Full Stack Developer</span>
                <p className="landingPagePara">I am a dedicated and passionate software engineer, committed to <br/> crafting innovative solutions and continuously expanding my skill<br/>set to drive excellence in software development.</p>
                <Link><button className="btn"><img src={envelope} alt="Hire Me" className="btnImg"></img>Hire Me</button></Link>
            </div>
            <img src={selfie} alt='selfie' className='selfie'/>
        </section>
    )

}

export default LandingPage