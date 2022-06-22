import React from 'react';
import './About.css';
import wedding from '../../assets/wedding.jpeg';
import { FaAward } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

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
              <h5>3+ Years</h5>
              <small>Developer Experience</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>Web and Mobile</small>
            </article>
          </div>
          <p>
            I'm a Web Developer specializing in React, with experience in Full
            Stack & Mobile applications.
          </p>
          <p>I have a Bachelor's Degree in Psychology.</p>
          <p>I love soccer, music, and good coffee.</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
