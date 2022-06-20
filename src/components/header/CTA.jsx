import React from 'react';
import resume from '../../assets/resumeReact.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        resume
      </a>
      <a href="#contact" className="btn btn-primary">
        contact
      </a>
    </div>
  );
};

export default CTA;
