import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GoKeyboard } from 'react-icons/go';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BsPerson />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <GoKeyboard />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiLightbulbFlashLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlinePhone />
      </a>
    </nav>
  );
};

export default Nav;
