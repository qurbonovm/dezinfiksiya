import React from 'react'
import '../Section/Section.css'
import Image from '../Img/image.png'
import Image2 from '../Img/image2.png'
import {useTranslation} from 'react-i18next'

function Section() {
    const {t, i18n} = useTranslation();
  return (
    <div id='service' className='partone'>
        <div className="container">
            <div className="divs">
                <div className="div-one">
                    <h1 className='partone-title'>{t('dezin')}</h1>
                    <p className='partone-text'>{t('biz')}</p>
                   <div className="divimg"> <img className='partone-img' src={Image2} alt="image2" /></div>
                    <button  className='partone-btn'>{t('boglanish')}</button>
                </div>
                <div className="div-two">
                    <img className='partone-img2' src={Image} alt="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section