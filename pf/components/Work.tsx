import React, { useState, useEffect } from "react";
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

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 640) {
                setSlidesToShow(1);
            } else if (screenWidth <= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        // Initial setup
        handleResize();

        // Attach event listener for resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: true, // Show navigation dots
        infinite: false, // Enable infinite scrolling
        speed: 500, // Transition speed in milliseconds
        slidesToShow: slidesToShow, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: false, // Enable autoplay
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        arrows: false
    }
    return (
        <div className="w-screen max-h-full h-full bg-gray-100">
            <div className="pb-6">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            numShowing={slidesToShow}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default Work;