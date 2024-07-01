import React, { useEffect } from "react";
import './navbar.css';
import {Link, Events, animateScroll as scroll} from 'react-scroll'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contactMeImg.png';

const scrollToBottom = ()=>{
    scroll.scrollToBottom();
}

const scrollToTop = ()=>{
    scroll.scrollToTop();
}


const Navbar = ()=>{
    return (
        <nav className="navbar">
            <img src={logo}  alt="logo" className="logo"/>
            <div className="homepageMenu">
                <Link className="homepageMenuItem" onClick={scrollToTop}>Home</Link>
                <Link className="homepageMenuItem">About</Link>
                <Link className="homepageMenuItem">Portfolio</Link>
                <Link className="homepageMenuItem">Clients</Link>
            </div>
            <button className="homepageButton">
                <img src={contactImg} alt='contactMeImg' className='homepageMenuImg'/>Contact Me</button>
        </nav>
    );
}

export default Navbar