import React from 'react'
import '../Section3/Section3.css'
import Logo1 from '../Img/logos.png'
import Logo2 from '../Img/logos2.png'
import Logo3 from '../Img/logos3.png'
import BG from '../Img/Rectangle.png'
import Women from '../Img/women.png'
import Icon from '../Img/3dicons.png'

function Section3() {
  return (
    <div className='service'>
        <h2 className='service-title'>Service</h2>
        <p className='service-text'>Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>
        <div className="service-table">
            <div className="junior">
                <h3 className='junior-title'>Boshlang’ich tushunchalar</h3>
                <strong className='junior-item'>Nazariy bilimlar</strong>
                <p className='junior-number'>16 dars</p>
                <img className='junior-img' src={Logo1} alt="" />
            </div>
            <div className="junior">
                <h3 className='junior-title'>O'rta</h3>
                <strong className='junior-item'>Nazariy va Amaliy bilimlar</strong>
                <p className='junior-number'>23 dars</p>
                <img className='junior-img' src={Logo2} alt="" />
            </div>
            <div className="junior">
                <h3 className='junior-title'>Yuqori</h3>
                <strong className='junior-item'>Amaliy Bilimlar</strong>
                <p className='junior-number'>16 dars</p>
                <img className='junior-img' src={Logo3} alt="" />
            </div>
        </div>
        <img className='service-bg' src={BG} alt="" />
        <div className="service-data">
            <div className="img"><img className='service-women' src={Women} alt="" /></div>
            <div className="datas">
                <img className='service-icon' src={Icon} alt="" />
                <h3 className='service-title2'>Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina</h3>
                <button className='service-btn'>Bog'lanish</button>
            </div>
        </div>
    </div>
  )
}

export default Section3