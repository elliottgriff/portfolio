import React from 'react';
import './Footer.css';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          Elliott
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://linkedin.com/in/elliottgriff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/elliottgriff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/elliottgriffn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Elliott Griffin</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
