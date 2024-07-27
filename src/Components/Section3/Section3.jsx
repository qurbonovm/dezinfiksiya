import React from 'react'
import '../Section3/Section3.css'
import Logo1 from '../Img/logos.png'
import Logo2 from '../Img/logos2.png'
import Logo3 from '../Img/logos3.png'
import BG from '../Img/Rectangle.png'
import Women from '../Img/women.png'
import Icon from '../Img/3dicons.png'
import { useTranslation } from 'react-i18next'

function Section3() {
    const {t, i18n} = useTranslation();
  return (
    <div className='service'>
        <h2 className='service-title'>{t('servis')}</h2>
        <p className='service-text'>{t('samara')}</p>
        <div className="service-table">
            <div className="junior">
                <h3 className='junior-title'>{t('klap')}</h3>
                <p className='junior-number'>{t('mebel')}</p>
                <img className='junior-img' src={Logo1} alt="" />
            </div>
            <div className="junior">
                <h3 className='junior-title'>{t('tarakan')}</h3>
                <p className='junior-number'>{t('ular')}</p>
                <img className='junior-img' src={Logo2} alt="" />
            </div>
            <div className="junior">
                <h3 className='junior-title'>{t('chayon')}</h3>
                <p className='junior-number'>{t('hashorat')}</p>
                <img className='junior-img' src={Logo3} alt="" />
            </div>
        </div>
        <img className='service-bg' src={BG} alt="" />
        <div className="service-data">
            <div className="img"><img className='service-women' src={Women} alt="" /></div>
            <div className="datas">
                <img className='service-icon' src={Icon} alt="" />
                <h3 className='service-title2'>{t('rasmiy')}</h3>
                <button className='service-btn'>{t('boglanish')}</button>
            </div>
        </div>
    </div>
  )
}

export default Section3