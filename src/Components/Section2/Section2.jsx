import React from 'react'
import '../Section2/Section2.css'
import Miya from '../Img/miya.png'
import Mijoz from '../Img/mijoz.png'
import Kelishuv from '../Img/kelishdik.png'
import Dezinfeksiya from '../Img/disinfection.png'
import {useTranslation} from 'react-i18next'

function Section2() {
    const {t, i18n} = useTranslation();
  return (
    <div className='parttwo'>
            <h2 className='parttwo-title'>{t('afzal')}</h2>
            <div className="table">
                <div className="parttwo-brain">
                    <div className="image"><img className='parttwo-img' src={Miya} alt="" /></div>
                    <strong className='parttwo-item'>{t('tezda')}</strong>
                    <p className='parttwo-text'>{t('ariza')}</p>
                </div>
                <div className="parttwo-customer">
                    <div className="image2"><img className='parttwo-img' src={Mijoz} alt="" /></div>
                    <strong className='parttwo-item'>{t('yetuk')}</strong>
                    <p className='parttwo-text'>{t('xodim')}</p>
                </div>
                <div className="parttwo-hand">
                    <div className="imgae3"><img className='parttwo-img' src={Kelishuv} alt="" /></div>
                    <strong className='parttwo-item'>{t('maqul')}</strong>
                    <p className='parttwo-text'>{t('siz')}</p>
                </div>
            </div>
            <img className='parttwo-imgklapa' src={Dezinfeksiya} alt="" />
            <div className="parttwo-klapa">
                <h2 className='klapa-item'>{t('klapa')}</h2>
                <p className='klapa-text'>{t('bizning')}</p>
                <button className='klapa-btn'>{t('boglanish')}</button>
            </div>
        </div>
  )
}

export default Section2