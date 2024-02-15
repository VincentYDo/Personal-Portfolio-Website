import React from "react";
import './pfCard.css';

const PfCard = (props)=>{

    return(
        <div className={props.cardId}>
            <div className="cardImage">
                <img src={props.img} alt="project pic"/>
            </div>
            <div className="cardText">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                {/* <p>{props.techStack}</p> */}
            </div>
        </div>
    )

}

export default PfCard