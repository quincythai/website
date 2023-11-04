import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Divider from "../components/Divider/Divider";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Footer from "../components/Footer/Footer";

import './Projects.css';

const Projects = () => {
  return (
    <>
      <h1 className="header">Projects</h1>
      <Divider />
      <div className="project-cards-container">
        <ProjectCard 
          title="Bears, Bees, Honey!"
          tools="HTML, CSS, JavaScript"
          image="/bear.png"
          description="Berkeley themed Rock, Paper Scissors game."
          link="https://quincythai.github.io/bears-bees-honey/"
        />
        <ProjectCard 
          title="Etch-a-Sketch"
          tools="HTML, CSS, JavaScript"
          image="/etch.png"
          description="Online sketchpad built using JavaScript."
          link="https://quincythai.github.io/etch-a-sketch/"
        />
        <ProjectCard 
          title="Calculator"
          tools="HTML, CSS, JavaScript"
          image="/calc.png"
          description="Simple, minimalist calculator."
          link="https://quincythai.github.io/calculator/"
        />
        <ProjectCard 
          title="YouTube HomePage Replica"
          tools="HTML, CSS"
          image="/youtube.png"
          link="https://github.com/quincythai/youtube-replica"
        />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
