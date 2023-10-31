import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Block from "../components/Block/Block";
import Divider from "../components/Divider/Divider";
import "./Homepage.css";

const Homepage = () => {
  const links = [
    { text: "Home", url: "/" },
    { text: "Projects", url: "/project" },
    { text: "Experience", url: "/experience" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div className="homepage-container">
      <Navbar links={links} />
      <div className="block-container">
        <Block />
      </div>
    </div>
  );
};

export default Homepage;
