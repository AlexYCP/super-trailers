import React, { useEffect } from 'react';
import './Trailer.css';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, House } from 'react-bootstrap-icons';
import ReactPlayer from 'react-player';

const Trailer = ({ data, getTrailer }) => {

    const navigate = useNavigate();

    let params = useParams();
    let id = params.trailerId;
    let key = params.ytTrailerId;

    useEffect(() => {
        getTrailer(id);
    }, []);

    return (
        <div className='trailer'>
            <div className='navbar'>
                <button onClick={() => navigate(-1)}>
                    <ArrowLeft className='arrow' />
                </button>
                <button onClick={() => navigate('/')}>
                    <House className='house ' />
                </button>
            </div>
            <div className='video-information'>
                <div className='information'>
                    <h5>{data?.title}</h5>
                    <h6>{data?.subtitle}</h6>
                    <p>{data?.synopysis}</p>
                </div>
                <div className='video'>
                    {
                        key !== null ?
                            (
                                <ReactPlayer
                                    className='yt-video'
                                    playing={false}
                                    controls={true}
                                    url={`https://www.youtube.com/watch?v=${key}`}
                                    height='17vh'
                                    width='87vw'
                                />
                            ) :
                            null
                    }
                </div>
            </div>
        </div>
    );

}

Trailer.propTypes = {
    data: PropTypes.object.isRequired,
    getTrailer: PropTypes.func.isRequired
}

export default Trailer;
