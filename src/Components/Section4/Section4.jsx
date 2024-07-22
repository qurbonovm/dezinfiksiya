import React from 'react'
import '../Section4/Section4.css'
import BG from '../Img/Rectangle2.png'
import Man from '../Img/men.png'


function Section4() {
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  const SendMassage = (event) =>{
    event.preventDefault();
    const token = "7312151972:AAE7TVs7b0SjENJVeHBFNDXRKwEgKFVUqp0";
    const chat_id = 7162378316;
    const url = `https://api.telegram.org/bot${token}/SendMassage`;
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value;
    const massageContent = `Ismi: ${name} \n Telefon raqam: ${number}`;
    axios({
      url:url,
      method:'POST',
      data:{
        "chat_id":chat_id,
        "text":massageContent,
      }
    }).then((res)=>{
      document.getElementById("myForm").reset();
      alert("Yuborildi")
    }).catch((error)=>{
      console.log("Xatolik bor",error);
    })
  }

  return (
    <div className='faq'>
        <div className="faq-table">
            <div className="faq-one">
                <h2 className='faq-title'>FAQ</h2>
            </div>
            <div className="faq-two">
                <button class="accordion">Zararkunandalarni yo'q qilish qanday amalga oshiriladi</button>
                <div class="panel">
                <p className='faq-text2'>Maxsus asbob uskunalar yordamida insektitsidalar aerazolli tumanga aylanadi va devor qog'ozi,
                   devorlar va taxta plitalari orasidagi eng kichik bo'shliqlarga,
                   kpo'zga ko'rinmas hashoratlar uchun potensial yashirish joylariga kiradi</p>
                </div>
               
                <button class="accordion">Siz foydalanadigan dorilar xavflimi?</button>
                <div class="panel">
                <p>Preparatlar odamlar uy hayvanlari va o'simliklar uchun xavfli emas.
                   Ammo davolanishdan keyin xonani 40 daqiqa ventilyasiya qilish kerak</p>
                </div>

                <button class="accordion">Menga o'yimni davolanishga tayyorlashning qandaydir usuli kerakmi?</button>
                <div class="panel">
                <p>Asosan idish tovoq va shaxsiy gigiena vositalarini izolatsiya qilishingiz kerak.
                   Davolash paytida uy hayvonlari ham izolyatsiya qilinishi kerak.</p>
                </div>
            </div>
        </div> 
        <img className='faq-img' src={BG} alt="" />
        <div className="faqs">
            <div className="faq-data">
                <h2 className='faq-title2'>Malumotingizni qoldiring</h2>
                <form onSubmit={SendMassage} id='myForm'>
                <div className="faq-name">
                 <input type="text" id='name' placeholder='Ism'/>
                </div>
                <div className="faq-number">
                <input type="text" placeholder='+998' id='number'/>
                </div>
                <button type='sumbit' className='faq-btn'>Yozilish</button>
                </form>
            </div>
            <div className="faq-data2">
                <h3 className='faq-text'>Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina</h3>
                <img className='faq-img2' src={Man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section4