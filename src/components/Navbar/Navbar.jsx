import React from 'react';
import './Navbar.css';


import fsdLogo from '../../assets/icons/fsd-logo.png';
import reactLogo from '../../assets/icons/react.svg';

const Navbar = () => {
  const links = [
    { text: "Home", url: "/" },
    { text: "About Me", url: "/aboutme" },
    { text: "Projects", url: "/projects" },
    { text: "Experience", url: "/experience" },
  ];

  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={fsdLogo} alt="fsdLogo" />
        <img src={reactLogo} alt="reactLogo" className="logo" />
      </div>
      <div className="right-section">
        <ul>
          {links.map((link) => (
            <li className="link" key={link.text}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;