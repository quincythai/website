import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({ title, image, tools, description, link }) => {
  return (
    <a href={link} className="no-inherit">
      <div className="card">
        <img src={image} alt="project image" className="card-image" />
        <div className="text-container">
          <p className="font-bold text-xl">{title}</p>
          <p className="text-xs">{tools}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
