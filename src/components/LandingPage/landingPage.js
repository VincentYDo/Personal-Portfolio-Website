import React from "react";
import './landingPage.css';
import {Link} from 'react-scroll'

const LandingPage = () => {
    return(
        <section id="landingPage">
            <div className="landingPageContent">
                <span className="greeting">Greetings,</span>
                <span className="landingPageText"> I'm <span className='landingPageName'> Vincent Do</span> 
                <br/>Full Stack Developer</span>
                <p className="landingPagePara">I am a dedicated and passionate software engineer, committed to crafting innovative solutions and continuously expanding my skill set to drive excellence in software development.</p>
                <Link><button className="btn"><img src="" alt="Hire Me"></img>Hire Me</button></Link>

            </div>
        </section>
    )

}

export default LandingPage