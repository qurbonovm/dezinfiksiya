import React from 'react'
import '../Section4/Section4.css'
import BG from '../Img/Rectangle2.png'
import Man from '../Img/men.png'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'


function Section4() {
    const { t, i18n } = useTranslation();
    return (
        <div className='faq'>
            <div className="faq-table">
                <div className="faq-one">
                    <h2 className='faq-title'>FAQ</h2>
                </div>
                <div className="faq-two">
                    {/* Accordion */}
                    <Accordion >
                        <AccordionItem className="faq-accardion" header="Zararkunandalarni yo'q qilish qanday amalga oshiriladi?">
                           Maxsus asbob uskanalar yordamida insektitsidlar aerozolli tumanga aylanadi.
                        </AccordionItem>

                        <AccordionItem className="faq-accardion" header="Siz foydalanadigan dorilar xavflimi?">
                           Preparatlar odamlar uy hayvonlari va usimliklar uchun xafvli emas.
                        </AccordionItem>

                        <AccordionItem className="faq-accardion" header="Menga uymni davalashda qandaydir usul kerakmi?">
                            Asosan idish-tovoq va shaxsiy geginiya vositalarini izolyatsiya qilish kerak. 
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <img className='faq-img' src={BG} alt="" />
            <div className="faqs">
                <div className="faq-data">
                    <h2 className='faq-title2'>{t('data')}</h2>
                    <form id='myForm'>
                        <div className="faq-name">
                            <input type="text" id='name' placeholder='Ism' />
                        </div>
                        <div className="faq-number">
                            <input type="text" placeholder='+998' id='number' />
                        </div>
                        <button type='sumbit' className='faq-btn'>{t('boglanish')}</button>
                    </form>
                </div>
                <div className="faq-data2">
                    <h3 className='faq-text'>{t('kop')}</h3>
                    <img className='faq-img2' src={Man} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section4