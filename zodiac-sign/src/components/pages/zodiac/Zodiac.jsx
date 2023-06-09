import React, { useEffect, useState } from 'react'
import './zodiac.css'
import axios from 'axios';
import Loading from '../../loading/Loading';

const Zodiac = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); //handle loading animation

  useEffect( () => {
    fetchData();
  }, []);

  const options = {
    method: 'GET',
    url: 'https://zodiac-sign-api1.p.rapidapi.com/all',
    headers: {
      'X-RapidAPI-Key': 'b5c605835dmsh281e96b713f1c73p1b5ca0jsnf4c656397269',
      'X-RapidAPI-Host': 'zodiac-sign-api1.p.rapidapi.com'
    }
  };
  
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      const data = Object.keys(response.data).map((key) => ({
        name: key,
        ...response.data[key],
      }));
      setData(data);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };
  
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const handleViewMore = (zodiac) => {
    setSelectedZodiac(zodiac);
  };
  const handleBack = () => {
    setSelectedZodiac(null);
  };

  return (
    <div className='card container'>
      {selectedZodiac ? (
        <div className='curr-zodiac'>
          <h2>{selectedZodiac.name}</h2>
          <span>{selectedZodiac.date}</span>
          <p>{selectedZodiac.personality}</p>
          <button className='btn-viewmore' onClick={handleBack}>Back</button>
        </div>
      ) : (
        data.map((data) => (
          <div key={data.name} className='zodiacs-container'>
            <h2>{data.name}</h2>
            <p>{data.date}</p>
            <button className='btn-viewmore' onClick={() => handleViewMore(data)}>View More</button>
          </div>
        ))
      )}
    </div>
  )
}

export default Zodiac
