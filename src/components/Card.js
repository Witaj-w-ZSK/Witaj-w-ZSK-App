import React from 'react';
import PropTypes from 'prop-types';
import uczen from './../uczen_ZSK.png'

const Card = ({props}) => {
    return (
        <div className='card'>
            <p>Stało się właśnie nawiększa rzecz w szkole i nikt nie wie co to. co robisz?</p>
            <img src={uczen} alt='Uczeń ZSK'/>
            <p>Uczeń ZSK</p>
        </div>
    );
};

Card.propTypes = {

};

export default Card;