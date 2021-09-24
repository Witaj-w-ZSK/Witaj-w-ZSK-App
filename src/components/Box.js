import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";
import Statistics from "./Statistics";

const Box = ({props}) => {
    return (
        <div className='box'>
            <Statistics />
            <Card />
        </div>
    );
};

Box.propTypes = {

};

export default Box;