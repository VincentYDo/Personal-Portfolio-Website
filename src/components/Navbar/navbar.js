import React, { useEffect } from "react";
import './navbar.css';
import {Link,animateScroll as scroll} from 'react-scroll'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contactMeImg.png';

const scrollToTop = ()=>{
    scroll.scrollToTop();
}


const Navbar = ()=>{
    return (
        <nav className="navbar">
            <img src={logo}  alt="logo" className="logo"/>
            <div className="homepageMenu">
                <Link className="homepageMenuItem" onClick={scrollToTop}>Home</Link>
                <Link className="homepageMenuItem" activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-25}  duration={500}>About</Link>
                <Link className="homepageMenuItem" activeClass="active" to="portfolio" spy={true} smooth={true} offset={-25}  duration={500}>Portfolio</Link>
                <Link className="homepageMenuItem" activeClass="active" to="links" spy={true} smooth={true} offset={-25}  duration={500}>Online Profiles</Link>
            </div>
            <button className="homepageButton">
                <img src={contactImg} alt='contactMeImg' className='homepageMenuImg'/>Contact Me</button>
        </nav>
    );
}

export default Navbar