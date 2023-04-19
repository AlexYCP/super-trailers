import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { Card } from '../exports/exports';

const Test = () => {

    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        getData();
        searchItems();
    }, []);

    const getData = async () => {
        try {
            let response = await api.get('/api/v1/super-trailers');

            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);

        if (searchValue !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
            })

            setFilteredResults(filteredData);
        } else {
            setFilteredResults(data);
        }
    }

    return (
        <div>
            <input type='text' onChange={(e) => searchItems(e.target.value)} placeholder='...' />
            {
                searchInput !== '' ?
                    (
                        filteredResults.map((item, index) => (
                            <div key={index}>
                                <Card
                                    key={index}
                                    image={item.image}
                                />
                            </div>
                        ))
                    ) :
                    (
                        data.map((item, index) => (
                            <div key={index}>
                                <Card
                                    key={index}
                                    image={item.image}
                                />
                            </div>
                        ))
                    )
            }
        </div>
    );

}

export default Test;
