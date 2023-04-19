import React from 'react';
import './Content.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, House, ArrowRight } from 'react-bootstrap-icons';
import { Seeker } from '../../exports/exports';

const Content = ({ data }) => {

    const navigate = useNavigate();
    const title = '¡elige tu trailer!';

    return (
        <div className='content'>
            <div className='navbar'>
                <button className='left' onClick={() => navigate(-1)} >
                    <ArrowLeft className='arrow' />
                </button>
                <button onClick={() => navigate('/')}>
                    <House className='house' />
                </button>
                <button className='right' onClick={() => navigate(+1)} >
                    <ArrowRight className='arrow' />
                </button>
            </div>
            <Seeker data={data} />
        </div>
    );

}

Content.propTypes = {
    data: PropTypes.array.isRequired
}

export default Content;
