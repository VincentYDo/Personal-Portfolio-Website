import React from "react";
import './pfCard.css';

const PfCard = (props)=>{

    return(
        <div className="card">
            <div className={props.cardId}>
                
                <img className="projectImg" src={props.img} alt="project pic"/>
                
                {/* <div className="cardText">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p>{props.techStack}</p>
                </div> */}
            </div>

        </div>
    )

}

export default PfCard