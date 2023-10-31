import React from 'react';
import './Block.css';

import linkedinIcon from '/linkedin.svg';
import githubIcon from '/github.svg';
import mailIcon from '/mail.svg';
import portrait from '/quincy2.jpeg';
import { Divider } from '@mui/material';

const Block = () => {
  return (
    <div className="intro-container">
      <div className="text-container">
        <p className="name">Quincy Thai</p>
        <div>
          <p className="subtext">
            Hi! I'm Quincy, and I am a transfer student studying Computer Science at UC Berkeley.
          </p>
          <div className="icons">
            <div className="icon">
              <a href="https://www.linkedin.com/in/quincythai/">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/quincythai">
                <img src={githubIcon} alt="github" />
              </a>
            </div>
            <div className="icon">
              <a href="mailto:quincythai@berkeley.com">
                <img src={mailIcon} alt="mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={portrait} alt="photo of me" className="portrait" />
      <Divider />
    </div>
  );
};

export default Block;
