import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Merhabalar!</h5>
        <h1>Ben Onur.</h1>
        <h5 className="text-light">Jr. Front-end Developer</h5>
         <CTA />
         <HeaderSocial />
 
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Aşağı Kaydır</a>
      </div>
    </header>
  )
}

export default Header

