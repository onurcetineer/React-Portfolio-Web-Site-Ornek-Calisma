import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Benimle</h5>
      <h2>İletişime Geç</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>E-mail</h4>
          <h5>onurcetineer1@gmail.com</h5>
          <a href="mailto: onurcetineer1@gmail.com">Mail atabilirsiniz</a>
        </article>
        <article className="contact__option">
          <FaLinkedinIn className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Onur Çetiner</h5>
          <a href="https://www.linkedin.com/in/onurcetineer1/">Profilim</a>
        </article>
        <article className="contact__option">
          <AiOutlineWhatsApp className='contact__option-icon'/>
          <h4>Telefon No:</h4>
          <h5>507 494 72 99</h5>
          <a href="tel: +905074947299">Arayabilirsiniz</a>
        </article>
        </div>

      {/* contact opsiyonlar bitiş */}
        <form action="">
          <input type="text" name='name' placeholder='Adınız Soyadınız' />
          <input type="email" name='email' placeholder='E-posta Adresiniz' />
          <textarea name="message" rows="7" placeholder='Mesajınız'></textarea>
          <button type='submit' className='btn btn-primary'>Gönder</button>
        </form>
      </div>
    </section>
  )
}

export default Contact