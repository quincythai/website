import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      &#169; {(new Date().getFullYear())} Quincy Thai
    </footer>
  );
};

export default Footer;