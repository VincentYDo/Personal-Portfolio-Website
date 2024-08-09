import React, { useEffect } from "react";
import './navbar.css';
import {Link,animateScroll as scroll} from 'react-scroll'


const scrollToTop = ()=>{
    scroll.scrollToTop();
}


const Navbar = ()=>{
    return (
        <nav className="navbar">
            <div className="homepageMenu">
                <Link className="homepageMenuItem" onClick={scrollToTop}>Home</Link>
                <Link className="homepageMenuItem" activeClass="active" to="aboutMe" spy={true} smooth={true} offset={0}  duration={500}>About</Link>
                <Link className="homepageMenuItem" activeClass="active" to="techStack" spy={true} smooth={true} offset={0}  duration={500}>Tech Stack</Link>
                <Link className="homepageMenuItem" activeClass="active" to="portfolio" spy={true} smooth={true} offset={0}  duration={500}>Portfolio</Link>
                <Link className="homepageMenuItem" activeClass="active" to="links" spy={true} smooth={true} offset={0}  duration={500}>Online Profiles</Link>
            </div>
            <span></span>
        </nav>
    );
}

export default Navbar