import React from "react";
import Slider from "react-slick";

import ProjectCard from "./ProjectCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Work = () => {
    const projects = [
        { title: "Project 1", description: ["- I am a test line", "- Where things are happening", "- And I need to test this with various sizes", "- Cause lord knows how this will behave"] },
        { title: "Project 2", description: [] },
        { title: "Project 3", description: [] },
        // Add more projects as needed
    ];

    const settings = {
        dots: true, // Show navigation dots
        infinite: false, // Enable infinite scrolling
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: false, // Enable autoplay
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
    }
    return (
        <div className="w-screen h-screen bg-gray-100">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </Slider>
        </div>
    )
}
export default Work;