import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} className='logo'></img>
        </Link>
        <ul className='nav-links'>
          <li><Link to='/'>Home
          </Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <a href='https://restrauntmenuhai.netlify.app/' target='_blank' rel='noopener noreferrer'>
              Restraunt
            </a>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
