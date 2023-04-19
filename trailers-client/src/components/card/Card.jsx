import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ image }) => {

    return (
        <div className='card'>
            <img src={image} alt='Carátula' />
        </div>
    );

}

Card.propTypes = {
    image: PropTypes.element.isRequired
}

export default Card;
