import React from "react";
import './pfCard.css';

const PfCard = (props)=>{

    return(
        <div className="card">
            <div className={props.cardId}>
                <div className='imgWrap' >
                    <img className="projectImg" src={props.img} alt="project pic"/>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <p>{props.techStack}</p>
                </div>
            </div>

        </div>
    )

}

export default PfCard