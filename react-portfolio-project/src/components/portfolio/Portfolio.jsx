import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>Çalışmalarım</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>E-ticaret Website Örneği </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/onurcetineer/WooCommerce-website-sample2" className='btn'>Github</a>
            <a href="https://onurcetineer.github.io/WooCommerce-website-sample2/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
            
            <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" /> 
          </div>
            <h3>Hulu Clone Website </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/onurcetineer/hulu-website-clone" className='btn'>Github</a>
            <a href="https://onurcetineer.github.io/hulu-website-clone/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Starbucks Clone Website </h3>
              <div className="portfolio__item-cta">
            <a href="https://github.com/onurcetineer/starbucks-clone" className='btn'>Github</a>
            <a href="https://onurcetineer.github.io/starbucks-clone/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>Sneakers E-Ticaret Website Örneği </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/onurcetineer/Nike-E-Commerce-Website" className='btn'>Github</a>
            <a href="https://onurcetineer.github.io/Nike-E-Commerce-Website/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>Portfolio Website Örneği </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/onurcetineer/WooCommerce-website-sample2" className='btn'>Github</a>
            <a href="https://onurcetineer.github.io/WooCommerce-website-sample2/" className='btn btn-primary' target='_blank'>Live</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>Son Örneği Buraya Yükle </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/onurcetineer/WooCommerce-website-sample2" className='btn'>Github</a>
            <a href="https://onurcetineer.github.io/WooCommerce-website-sample2/" className='btn btn-primary' target='_blank'>Live</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio