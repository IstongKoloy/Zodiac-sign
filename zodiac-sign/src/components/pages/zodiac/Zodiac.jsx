import React, { useEffect, useState } from 'react'
import './zodiac.css'
import axios from 'axios';

const Zodiac = () => {
  const [data, setData] = useState([]);

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
      setData(response.data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='container'>
      
    </div>
  )
}

export default Zodiac
