import React from "react";

interface ProjectInformation {
  title: string;
  description: string[];
  numShowing: number;
}
const ProjectCard = ({
  title,
  description,
  numShowing,
}: ProjectInformation) => {
  return (
    <div className="justify-center items-center flex align-middle">
      <div className="bg-cd_red m-6 w-full">
        <h2 className="text-center font-atkinson_bold">{title}</h2>

        {description.map((text, index) => (
          <p key={index} className="font-atkinson_regular p-2">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
