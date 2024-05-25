import React from "react";
import "./card.css"

function Card(props) {
    return (
        <div className="card">
            <a href={props.link} target="_blank">
                <div className="card_body">
                    <img src={props.img} className="card_image" />
                    <div className="card_texts">
                    <h2 className="card_title">{props.title}</h2>
                    <h2 className="card_desc">{props.desc}</h2>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
