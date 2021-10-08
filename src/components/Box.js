import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Statistics from "./Statistics";
import useImage from "react-hook-image";
import { useState } from "react";

const Box = ({ props }) => {
    const [person, setPerson] = useState("Uczen ZSK");
    const [quote, setQuote] = useState(
        "Stało się właśnie nawiększa rzecz w szkole i nikt nie wie co to."
    );
    const [image, setImage] = useState(
        `${process.env.PUBLIC_URL}/images/uczen_ZSK.png`
    );

    return (
        <div className="box">
            <Statistics />
            <Card person={person} quote={quote} image={image} />
        </div>
    );
};

Box.propTypes = {};

export default Box;
