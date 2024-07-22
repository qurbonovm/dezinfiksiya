import React from 'react'
import '../Navbar/Navbar.css'
import Logo from '../Img/logo.png'

function Navbar() {
  return (
    <div className='header'>
        <div className="container">
            <img className='header-logo' src={Logo} alt="" />
            <ul className='header-item'>
                <li className="header-list">Service</li>
                <li className="header-list">About</li>
                <li className="header-list">Faq</li>
                <li className="header-list">Contact</li>
            </ul>
            <button className='header-btn'>Bog'lanish</button>
        </div>
    </div>
  )
}

export default Navbar