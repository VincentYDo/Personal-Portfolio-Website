import React from "react";
import Navbar from "./src/components/Navbar/navbar";
import LandingPage from "./src/components/LandingPage/landingPage";

const App = () =>{
    return (
        <div className="App">
            <Navbar/>
            <LandingPage/>
        </div>
    )
}

export default App