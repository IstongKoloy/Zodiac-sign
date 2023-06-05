import React from 'react'
import './navbar.css'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const currURL = location.pathname;

  return (
    <div className='navbar container'>
        <a href="/" className='navbar-brand'>StellarSigns</a>
        <ul className='navbar-lists'>
            <li className='list-item'>
                <a href='/' className={currURL === '/' ? 'link active' : 'link'}>Home</a>
            </li>
            <li className='list-item'>
                <a href='/zodiac' className={currURL === '/zodiac' ? 'link active' : 'link'}>Zodiacs</a>
            </li>
            {/* <li className='list-item'>
                <a href='/about' className={currURL === '/about' ? 'link active' : 'link'}>About</a>
            </li>
            <li className='list-item'>
                <a href='/contact' className={currURL === '/contact' ? 'link active' : 'link'}>Contact</a>
            </li> */}
        </ul>
    </div>
  )
}

export default Navbar
