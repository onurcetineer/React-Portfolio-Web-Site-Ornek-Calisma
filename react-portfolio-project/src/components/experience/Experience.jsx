import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>Neler biliyorum?</h5>
      <h2>Yeteneklerim</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>HTML</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>CSS</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Tailwind</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Bootstrap</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>Javascript</h4>
              <small className='text-light'>Orta seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>React</h4>
              <small className='text-light'>Orta seviye</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__grafic">
        <h3>Diğer</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>SEO</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>Github</h4>
              <small className='text-light'>Orta seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Adobe Photoshop</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>Adobe Audition</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>Adobe Illustrator</h4>
              <small className='text-light'>İyi seviye</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Adobe Premiere Pro</h4>
              <small className='text-light'>Orta seviye</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience