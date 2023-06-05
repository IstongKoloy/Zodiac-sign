import React, { useState } from 'react'
import './hero.css'
import axios from 'axios';
import Loading from '../../loading/Loading';

const Hero = () => {
  const [zodiac, setZodiac] = useState(''); //input field value
  const [result, setResult] = useState(false); //for div visibility
  const [response, setResponse] = useState(null); //handle api fetch value
  const [isLoading, setIsLoading] = useState(false); //handle loading animation
  
  // fn that sets the input field to capitalize the first letter then lowercase for the rest letters
  const handleInputZodiac = event => {
    const inputZodiac = event.target.value;
    setZodiac(inputZodiac.charAt(0).toUpperCase() + inputZodiac.slice(1).toLowerCase())
  }

  // gets the data from Zodiac sign API
  const options = {
    method: 'GET',
    url: 'https://zodiac-sign-api1.p.rapidapi.com/search',
    params: {sign: zodiac},
    headers: {
      'X-RapidAPI-Key': 'b5c605835dmsh281e96b713f1c73p1b5ca0jsnf4c656397269',
      'X-RapidAPI-Host': 'zodiac-sign-api1.p.rapidapi.com'
    }
  };

  // 
  const handleClickZodiac = async (e) => {
    e.preventDefault();
    try {
      setResult(true);
      setIsLoading(true);
      const response = await axios.request(options);
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <div className={`container hero ${result ? 'hide' : ''}`}>
        <div className='hero-content fade-in-text'>
          <h1>Discover Your Zodiac Sign</h1>
          <p>Find out more about your zodiac sign and its characteristics.</p>
          <div className='view-zodiac'>
              <input
                  type="text"
                  value={zodiac}
                  onChange={handleInputZodiac}
              />
              <button onClick={handleClickZodiac}>View Zodiac</button>
          </div>
        </div>
        <div className={`hero-zodiacs fade-in-text ${!result ? '' : 'hide'}`} >
          <svg viewBox="0 0 100 100" width="400" height="400">
            <defs>
              <path id="circle"
                d="
                  M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0"/>
            </defs>
            <text fontSize="17">
              <textPath xlinkHref="#circle">
                ♈︎ ♉︎ ♊︎ ♋︎ ♌︎ ♍︎ ♎︎ ♏︎ ♐︎ ♑︎ ♒︎ ♓︎
              </textPath>
            </text>
          </svg>
        </div>
    </div>
    <div className={`container results ${result ? '' : 'hide'}`}>
    {isLoading ? (
          <Loading />
        ) : (
          <div className="result-content">
            <div className='zodiac-name fade-in-text' style={{ color: 'white' }}>
              <h1>{zodiac}</h1>
              {response && (
                <span>{response.date}</span>
              )}
            </div>
            <div className='description fade-in-text' style={{ color: 'white' }}>
              {response && (
                <p>{response.personality}</p>
              )}
            </div>
            <div className='home'>
                <a href="/" className='btn'>Go back</a>
            </div>
          </div>
        )}
    </div>
    </>
  )
}

export default Hero
