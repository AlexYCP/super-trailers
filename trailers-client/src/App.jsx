import React, { useState, useEffect } from 'react'
import './App.css'
import api from './api/axiosConfig';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Start, Content, Trailer } from './exports/exports';

function App() {

  const [data, setData] = useState([]);
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await api.get('/api/v1/super-trailers');

      console.log('Data');
      console.log(response.data)

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getTrailer = async (trailerId) => {
    try {
      let response = await api.get(`/api/v1/super-trailers/${trailerId}`);

      console.log('Trailer');
      console.log(response.data);

      setTrailer(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/super-trailers' element={<Content data={data} />} />
          <Route path='/trailer/:trailerId/:ytTrailerId' element={<Trailer data={trailer} getTrailer={getTrailer} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App
