import React from 'react';
import './Navbar.css';

import fsdLogo from '../../assets/icons/fsd-logo.png';
import reactLogo from '../../assets/icons/react.svg';

const Navbar = (props) => {
  const { links } = props;

  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={fsdLogo} alt="fsdLogo" />
        <img src={reactLogo} alt="reactLogo" className="logo" />
      </div>
      <div className="right-section">
        <ul>
          {links.map((link, index) => (
            <li className="link" key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;