import React from 'react'
import '../Navbar/Navbar.css'
import Logo from '../Img/logo.png'
import {useTranslation} from 'react-i18next'

function Navbar() {
  const {t, i18n} = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage)
  }
  return (
    <div className='header'>
        <div className="container">
            <img className='header-logo' src={Logo} alt="" />
            <ul className='header-item'>
                <li className="header-list">{t('servis')}</li>
                <li className="header-list">{t('haqida')}</li>
                <li className="header-list">{t('faq')}</li>
                <li className="header-list">{t('kontakt')}</li>
                <select name="Lng" id="lng" onChange={handleChange}>
                <option value="uz">UZ</option>
                <option value="en">EN</option>
              </select>
            </ul>
            <button className='header-btn'>{t('boglanish')}</button>
        </div>
    </div>
  )
}

export default Navbar