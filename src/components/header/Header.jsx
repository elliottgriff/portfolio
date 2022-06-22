import React from 'react';
import './Header.css';
import CTA from './CTA';
import face from '../../assets/face.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Elliott Griffin</h1>
        <h5 className=".text-light">
          Web Developer with Full Stack & Mobile Experience
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={face} alt="myFace" />
        </div>
        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
