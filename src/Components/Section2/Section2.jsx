import React from 'react'
import '../Section2/Section2.css'
import Miya from '../Img/miya.png'
import Mijoz from '../Img/mijoz.png'
import Kelishuv from '../Img/kelishdik.png'
import Dezinfeksiya from '../Img/disinfection.png'

function Section2() {
  return (
    <div className='parttwo'>
            <h2 className='parttwo-title'>Avfzalliklarimiz</h2>
            <div className="table">
                <div className="parttwo-brain">
                    <div className="image"><img className='parttwo-img' src={Miya} alt="" /></div>
                    <strong className='parttwo-item'>Tezda xizmat ko’rsatish</strong>
                    <p className='parttwo-text'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan 
                        kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                </div>
                <div className="parttwo-customer">
                    <div className="image2"><img className='parttwo-img' src={Mijoz} alt="" /></div>
                    <strong className='parttwo-item'>Yetuk mutahasislaimiz</strong>
                    <p className='parttwo-text'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan 
                        kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                </div>
                <div className="parttwo-hand">
                    <div className="imgae3"><img className='parttwo-img' src={Kelishuv} alt="" /></div>
                    <strong className='parttwo-item'>Sizga maqul vaqtda</strong>
                    <p className='parttwo-text'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan 
                        kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                </div>
            </div>
            <img className='parttwo-imgklapa' src={Dezinfeksiya} alt="" />
            <div className="parttwo-klapa">
                <h2 className='klapa-item'>Klapa va zararli hashorot endi yo’q deb hisoblang !!!</h2>
                <p className='klapa-text'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                <button className='klapa-btn'>Bog'lanish</button>
            </div>
        </div>
  )
}

export default Section2