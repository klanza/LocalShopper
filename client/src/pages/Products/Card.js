import React from "react";
import "./card.css";

const Card = props => (
  <div className="card">
    <div onClick={() => props.handleCardClick(props.id)} className="img-thumbnail" >
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default Card;
