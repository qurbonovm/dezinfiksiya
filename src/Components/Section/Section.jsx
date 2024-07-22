import React from 'react'
import '../Section/Section.css'
import Image from '../Img/image.png'
import Image2 from '../Img/image2.png'

function Section() {
  return (
    <div id='service' className='partone'>
        <div className="container">
            <div className="divs">
                <div className="div-one">
                    <h1 className='partone-title'>Dizenfeksiya xizmati</h1>
                    <p className='partone-text'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan 
                        kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                   <div className="divimg"> <img className='partone-img' src={Image2} alt="image2" /></div>
                    <button  className='partone-btn'>Bog'lanish</button>
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