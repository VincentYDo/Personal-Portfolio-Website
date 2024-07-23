import React from "react";
import Navbar from "./src/components/Navbar/navbar";
import LandingPage from "./src/components/LandingPage/landingPage";
import AboutMe from "./src/components/AboutMe/aboutMe";
import Portfolio from "./src/components/Portfolio/portfolio";
import Links from "./src/components/Links/links";

const App = () =>{
    return (
        <div className="App">
            <Navbar/>
            <LandingPage/>
            <AboutMe/>
            <Portfolio/>
            <Links/>
        </div>
    )
}

export default App