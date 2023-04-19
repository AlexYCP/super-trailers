import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';

const Start = () => {

    const title = '¡súper trailers!';
    const start = 'empezar';

    return (
        <div className='start'>
            <h1>{title.toUpperCase()}</h1>
            <Link to='/super-trailers'>
                <button>{start.toUpperCase()}</button>
            </Link>
        </div>
    );

}

export default Start;
