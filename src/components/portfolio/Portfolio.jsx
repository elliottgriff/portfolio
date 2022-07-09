import React from 'react';
import MeetupsImg from '../../assets/meetupsImg.png';
import PizzaImg from '../../assets/pizzaImg.png';
import GoPianoImg from '../../assets/goPianoImg.png';
import CreativeTwo from '../../assets/creative2.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CreativeTwo} alt="creativeImg" />
          </div>
          <h3>Creative Wall Designs</h3>
          <p>
            Interior Decorating company serving Connecticut for over 30 years.
            Built with React and Material UI.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://www.creativewalldesignsct.com"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              href="https://github.com/elliottgriff/creativewalldesigns"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MeetupsImg} alt="meetupimg" />
          </div>
          <h3>Meetups</h3>
          <p>
            Add and Save your Favorite Meetup Locations with Descriptions and
            Images. Built with Firebase.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://meetups.elliottgriff.com"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/elliottgriff/meetups"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PizzaImg} alt="pizzaimg" />
          </div>
          <h3>Pizza Shop</h3>
          <p>
            Order Different Quantities of Pizza using a Dynamic Cart and
            Checkout Module. Built with Firebase.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://pizzashop.elliottgriff.com"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/elliottgriff/pizzashop"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={GoPianoImg} alt="goPianoImg" />
          </div>
          <h3>GoPiano</h3>
          <p>
            iOS Application for Playing and Sharing Songs on an Interactive
            Mobile Piano. Built with Swift and AudioKit.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://apps.apple.com/us/app/gopiano/id1450201903"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
            <a
              href="https://github.com/elliottgriff/gopiano"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
