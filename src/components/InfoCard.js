import React from "react";

const InfoCard = ({ data }) => {
    return (
        <div className="card">
            <h1>
                <span className="cardValue">{data.value}</span>
                <span className="cardUnit">{data.unit}</span>
            </h1>
            <label>{data.title}</label>
            <p>{data.description}</p>
        </div>
    );
};

export default InfoCard;
