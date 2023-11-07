import React from "react";

const ExperienceBlock = ({ title, subtext, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl font-bold">{title}</p>
      <p className="text-xs">{subtext}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ExperienceBlock;
