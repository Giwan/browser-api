import React from "react";

const InfoCard = ({ data }) => {
    return (
        <div className="card">
            <label>{data.title}</label>
            <h1>
                <span className="cardValue">{data.value}</span>
                <span className="cardUnit">{data.unit}</span>
            </h1>
            <p>{data.description}</p>
        </div>
    );
};

export default InfoCard;
