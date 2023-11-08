import React from "react";
import Divider from "../components/Divider";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-center text-5xl font-bold py-6">Projects</h1>
      <div className="p-10 flex flex-col items-center space-y-10 flex-grow">
        <ProjectCard
          title="This website!"
          tools="React, Tailwind CSS, Vite"
          image="/fullstack.png"
          description="My personal website"
          link=""
        />
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
    </div>
  );
};

export default Projects;
