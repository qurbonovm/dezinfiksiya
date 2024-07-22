import React from 'react'
import '../Footer/Footer.css'
import Logo from '../Img/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <img className='footer-logo' src={Logo} alt="" />
        <p className='footer-addres'>Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat</p>
        <p className='footer-number'>+998 94 099 3434</p>
            <div className="btns">
            <button className='footer-btn'>Facebook</button>
            <button className='footer-btn'>Instagram</button>
            <button className='footer-btn'>Telegram</button>
            </div>
    </div>
  )
}

export default Footer