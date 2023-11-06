import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center absolute w-full text-gray-400 bottom-0 left-0 py-5">
      &#169; {(new Date().getFullYear())} Quincy Thai
    </footer>
  );
};

export default Footer;
