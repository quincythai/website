import React from "react";
import linkedinIcon from "/linkedin.svg";
import githubIcon from "/github.svg";
import mailIcon from "/mail.svg";
import portrait from "/quincy2.jpeg";

const Block = () => {
  return (
    <div>
      <div className="intro-container flex items-center justify-center gap-16 p-16">
        <div className="text-container flex flex-col gap-5">
          <p className="name m-0 text-5xl font-bold">Quincy Thai</p>
          <p className="subtext max-w-xs text-base text-gray-500">
            Hi! I'm Quincy, and I am a transfer student studying Computer
            Science at UC Berkeley.
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
        <img
          src={portrait}
          alt="photo of me"
          className="portrait w-48 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Block;
