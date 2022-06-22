import React from 'react';
import resume from '../../assets/resumeReact.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Resume
      </a>
      <a href="mailto:ELLIOTTCGRIFFIN@ME.COM" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
