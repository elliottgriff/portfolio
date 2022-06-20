import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/elliottgriff" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/elliottgriff" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.twitter.com/elliottgriffn" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
