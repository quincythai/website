import React from 'react';
import linkedinIcon from '/linkedin.svg';
import githubIcon from '/github.svg';
import mailIcon from '/mail.svg';
import portrait from '/quincy2.jpeg';

const Block = () => {
  return (
    <div>
      <div className="intro-container flex p-16 gap-16 justify-center items-center">
        <div className="text-container flex flex-col">
          <p className="name font-bold text-5xl m-0">Quincy Thai</p>
          <p className="subtext text-base max-w-xs text-gray-500">
            Hi! I'm Quincy, and I am a transfer student studying Computer Science at UC Berkeley.
          </p>
          <div className="icons flex gap-4">
            <div className="icon">
              <a href="https://www.linkedin.com/in/quincythai/">
                <img src={linkedinIcon} alt="linkedin" className="w-6" />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/quincythai">
                <img src={githubIcon} alt="github" className="w-6" />
              </a>
            </div>
            <div className="icon">
              <a href="mailto:quincythai@berkeley.com">
                <img src={mailIcon} alt="mail" className="w-6" />
              </a>
            </div>
          </div>
        </div>
        <img src={portrait} alt="photo of me" className="portrait w-48 rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Block;
