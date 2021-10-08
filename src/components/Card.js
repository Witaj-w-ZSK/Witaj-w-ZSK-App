import React, { useState } from "react";
import PropTypes from "prop-types";
import useImage from "react-hook-image";

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.quote}</p>
            <img className="imageCard" src={props.image} alt={props.image} />
            <p>{props.person}</p>
        </div>
    );
};

Card.propTypes = {
    person: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Card;
