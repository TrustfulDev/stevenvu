import React, { useState } from 'react';
import ProjectIcon from '../../Assets/placeholderProject.png';
import sjsuLogo from '../../Assets/sjsu.svg';
import deanzaLogo from '../../Assets/deAnzaLogo.png';
import './experience.css';

/* Singular Content Panel */
const Content = ({ title, date, description, img, className, imgClassName }) => {
    return (
        <>
            <div className={className}>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <ul>
                {description.map(bullet => (
                    <li>{bullet.line}</li>
                ))}
                </ul>
            </div>
            <div className={imgClassName}>
                <img src={img} alt="icon" />
            </div>
        </>
    );
}

/* Main Experience Section */
const Experience = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="experience" id="experience">
            <div className="experience-header">
                <h1>Experience &amp; Education</h1>
            </div>
            <div className="experience-container">
                <div className="experience-tab-container">
                    <div className={ toggleState === 1 ? "experience-tab experience-active-tab" : "experience-tab"} onClick={() => toggleTab(1)}>SJSU</div>
                    <div className={ toggleState === 2 ? "experience-tab experience-active-tab" : "experience-tab"} onClick={() => toggleTab(2)}>De Anza</div>
                    <div className={ toggleState === 3 ? "experience-tab experience-active-tab" : "experience-tab"} onClick={() => toggleTab(3)}>Tab 3</div>
                </div>

                <div className="experience-content-container">
                    <Content 
                        title="San Jose State University" 
                        date="August 2021 - Present" 
                        description={[{line: "I am currently studying Software Engineering as a Junior."}, {line: "Utilizing free access to linkedin learning to self teach HTML/CSS/JS"}]}
                        img={sjsuLogo}
                        className={ toggleState === 1 ? "experience-content active-content" : "experience-content"}    
                        imgClassName={ toggleState === 1 ? "content-img active-img" : "content-img"}
                    />
                    <Content 
                        title="De Anza Community College" 
                        date="June 2018 - 2021" 
                        description={[{line: "Finished with an (A.S.-T) Associate in Science in Computer Science for Transfer"}, {line: "Obtained the Certificate of Achievement in Programming in C/C++"}]} 
                        img={deanzaLogo}
                        className={ toggleState === 2 ? "experience-content active-content" : "experience-content"} 
                        imgClassName={ toggleState === 2 ? "content-img active-img" : "content-img"}
                    />
                    <Content 
                        title="Future Internship" 
                        date="Present - ?" 
                        description={[{line: "Still in search of one"}, {line: "Aiming for an internship in the upcomming Summer of 2023"}]}
                        img={ProjectIcon}
                        className={ toggleState === 3 ? "experience-content active-content" : "experience-content"}
                        imgClassName={ toggleState === 3 ? "content-img active-img" : "content-img"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;