import React from "react";
import "./links.css";
import linkedinIcon from '../../assets/linkedinIcon.jpeg'
import githubIcon from '../../assets/githubIcon.jpeg'


const Links = () => {
    return (
        <section className="links">
            <div className="linksHeader">
                <h1>Let's Connect</h1>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/vincentydo/" className="Icon">
                    <img src={linkedinIcon} alt="linkedin" />
                </a>
                <a href="https://github.com/Vincent-Y-Do" className="Icon">
                    <img src={githubIcon} alt="github"  />
                </a>
            </div>
        </section>
    )
}

export default Links;