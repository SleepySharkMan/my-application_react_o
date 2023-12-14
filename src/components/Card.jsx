import React from "react";

const Card = ({ cardInfo }) => {
    return (
        <div className="card">
            <img src={cardInfo.img} alt="" className="img-card" />
            <div>{cardInfo.title}</div>
        </div>
    );
};

export default Card;