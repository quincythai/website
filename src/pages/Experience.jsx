import React from "react";
import ExperienceBlock from "../components/ExperienceBlock";

const Experience = () => {
  return (
    <div>
      <h1 className="py-6 text-center text-5xl font-bold">Experience</h1>
      <ExperienceBlock
        title="University of California, Berkeley"
        subtext="2023 to 2025. B.A. in Computer Science"
        description="Relevant coursework: Data Structures, Foundations of Data ScienceS"
      />
    </div>
  );
};

export default Experience;
