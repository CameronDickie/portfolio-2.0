import React from "react";

interface ProjectInformation {
    title: string;
    description: string[];
}
const ProjectCard = ({ title, description }: ProjectInformation) => {
    return (
        <div className="justify-center items-center flex">
            <div className='bg-rose-500 w-screen m-8 w-32 max-h-screen'>
                <h2 className="text-center font-atkinson_bold">{title}</h2>
                
                {description.map((text, index) => (
                    <p className="font-atkinson_regular p-2">{text}</p>
                ))}
            </div>
        </div>
    )
}
export default ProjectCard;