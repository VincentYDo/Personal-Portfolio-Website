import React from "react";
import './pfCard.css';

const PfCard = (props)=>{

    return(
        <div className="card">
            <div className={props.cardId}>
                <div className='imgWrap' >
                    <img className="projectImg" src={props.img} alt="project pic"/>
                    <h1 class='projectTitle'>{props.name}</h1>
                    <p class='text2'>{props.description}</p>
                    <p class='text3'>Tech Stack - {props.techStack}</p>
                </div>
            </div>

        </div>
    )

}

export default PfCard