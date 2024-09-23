import React from "react";
import Item from "../projects/Item";
import { categories, projectsData } from "@/constants/projects";

const Projects = () => {
    return (
        <div className="container mx-auto p-12" id="projects">
            <h3 className="flex align-center font-semibold text-2xl">
                Projects
                <span className="material-symbols-outlined rotate-90">
                    arrow_right_alt
                </span>
            </h3>
            {
                categories.map(({ id, description, image, name }, index) => (
                    <Item id={id} key={id} name={name} image={image} titleLeft={index % 2 == 0} />
                ))
            }
        </div>
    )
};

export default Projects;