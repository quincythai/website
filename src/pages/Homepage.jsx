import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Block from "../components/Block/Block";

const Homepage = () => {
  const links = [
    { text: "Home", url: "/" },
    { text: "Projects", url: "/project" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <>
      <Navbar links={links} />
      <Block />
    </>
  );
};

export default Homepage;
