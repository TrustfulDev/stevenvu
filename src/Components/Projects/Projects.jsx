import React from 'react';
import './projects.css';
import ProjectIcon from '../../Assets/placeholderProject.png';

/* Singular Project Panel */
const Project = ({ image, title, description }) => {
    return (
        <div className="project-panel">
            <img src={image} alt={title} />
            <div className="project-panel-description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

/* Main Project Section */
const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                <Project image={ProjectIcon} title="Coming Soon" description="A super descriptive project for those who wants to read random words used as placeholder for a project description. Only the determined will be able to read the entire description without expecting anything in return." />
                <Project image={ProjectIcon} title="Coming Soon" description="A super descriptive project for those who wants to read random words used as placeholder for a project description. Only the determined will be able to read the entire description without expecting anything in return." />
                <Project image={ProjectIcon} title="Coming Soon" description="A super descriptive description for those who wants to read random words used as placeholder for a project description. Only the determined will be able to read the entire description without expecting anything in return." />
            </div>
        </div>
    );
}

export default Projects;