import React from 'react'
import '../Footer/Footer.css'
import Logo from '../Img/logo.png'
import { useTranslation } from 'react-i18next'

function Footer() {
  const {t, i18n} = useTranslation();
  return (
    <div className='footer'>
        <img className='footer-logo' src={Logo} alt="" />
        <p className='footer-addres'>{t('lokatsiya')}</p>
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