import React from 'react';
import './About.css';
import wedding from '../../assets/wedding.jpeg';
import { FaAward } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={wedding} alt="myFaceAbout" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>3+ years</h5>
              <small>developer experience</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>projects</h5>
              <small>web and mobile</small>
            </article>
          </div>

          <p>i am a web developer with full stack and mobile experience</p>

          <a href="#contact" className="btn btn-primary">
            lets talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
