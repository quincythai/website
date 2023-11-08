import React from "react";

const ProjectCard = ({ title, image, tools, description, link }) => {
  return (
    <a href={link} className="text-black">
      <div className="flex transform gap-7 rounded-lg border border-gray-300 bg-white  p-5 transition duration-300 ease-in-out hover:scale-105">
        <img src={image} alt="project image" className="w-28 rounded-md" />
        <div className="flex flex-col justify-center space-y-2">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs">{tools}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
