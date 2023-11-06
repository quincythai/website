import React from 'react';
import fsdLogo from "/fsd-logo.png";
import reactLogo from "/react.svg";

const Navbar = () => {
  const links = [
    { text: "Home", url: "/" },
    { text: "About Me", url: "/aboutme" },
    { text: "Projects", url: "/projects" },
    { text: "Experience", url: "/experience" },
  ];

  return (
    <nav className="flex justify-between items-center border-b border-gray-100 shadow-md px-10 py-2 sticky top-0 bg-white z-10">
      <div className="flex items-center space-x-4">
        <img src={fsdLogo} alt="fsdLogo" className="w-12" />
        <img src={reactLogo} alt="reactLogo" className="w-12" />
      </div>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.url} className="text-gray-500 text-lg hover:text-blue-500">{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
