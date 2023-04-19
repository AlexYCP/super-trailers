import React, { useState } from 'react';
import './Seeker.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from '../../exports/exports'

const Seeker = ({ data }) => {

    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const title = 'sugerencias de nombres de películas de súper héroes';

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);

        if (searchValue !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase().trim());
            })

            setFilteredResults(filteredData);
        } else {
            setFilteredResults(data);
        }
    }

    return (
        <div className='seeker'>
            <div className='searcher'>
                <input type='text' onChange={(e) => searchItems(e.target.value)} placeholder='nombre del trailer' />
            </div>
            <div className='cards'>
                {
                    filteredResults.map((item, index) => (
                        <Link to={`/trailer/${item.id}/${item.trailer.substring(item.trailer.length - 11)}`}>
                            <Card
                                key={index}
                                image={item.image}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );

}

Seeker.propTypes = {
    data: PropTypes.array.isRequired
}

export default Seeker;
