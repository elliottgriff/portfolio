import React from 'react';
import MeetupsImg from '../../assets/meetupsImg.png';
import PizzaImg from '../../assets/pizzaImg.png';
import NoteTakerImg from '../../assets/noteTakerImg.png';
import SimonImg from '../../assets/SimonImg.png';
import GoPianoImg from '../../assets/goPianoImg.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
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
            <img src={PizzaImg} alt="meetupimg" />
          </div>
          <h3>Pizza Shop</h3>
          <p>
            Order Different Quantities of Pizza using a Dynamic Cart and
            Checkout Module. Built with Firebase.
          </p>
          <div className="portfolio__item-cta">
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
            <img src={NoteTakerImg} alt="meetupimg" />
          </div>
          <h3>Note Taker</h3>
          <p>Clone of Google Keep.</p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/elliottgriff/notetaker"
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
            <img src={GoPianoImg} alt="meetupimg" />
          </div>
          <h3>GoPiano</h3>
          <p>
            iOS Application for Playing and Sharing Songs on an Interactive
            Mobile Piano. Built with Swift and AudioKit.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/elliottgriff/gopiano"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
