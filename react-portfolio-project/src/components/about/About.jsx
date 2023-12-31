import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Bilmeniz Gerekenler</h5>
      <h2>Hakkımda</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Deneyim</h5>
              <small>+2 Yıl</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Memnuniyet</h5>
              <small>%100</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proje</h5>
              <small>200+</small>
            </article>

          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          
          <div className='about-btn'><a href="#contact" className='btn btn-primary'>İletişime Geç</a> </div>
           
        </div>
      </div>
    </section>
  )
}

export default About