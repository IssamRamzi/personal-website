import React from 'react'
import "./styles/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header section'>
        <div className="logo">
            <img className='img' src="https://cdn-images.dzcdn.net/images/cover/765d647cc828d82e2039f07a3db5e103/0x1900-000000-80-0-0.jpg" alt="" />
            <h3 className="name green">Issam Ramzi</h3>
        </div>

        <ul className="nav-components">
            <Link style={{textDecoration: "none"}} to="/">
              <li className='green link'>home</li>
            </Link>

            <Link style={{textDecoration: "none"}} to="/projects">
              <li className='green link'>projects</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Header