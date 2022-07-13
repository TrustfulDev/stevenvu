import React, { useState } from 'react';
import Tools from '../Tools/Tools';
import minecraft from '../../Assets/minecraft.svg';
import arma3 from '../../Assets/Arma3_Logo.png';
import unrealEngine from '../../Assets/Unreal_Engine_Logo.svg';
import './about.css';

const About = () => {
    const [interested, setInterested] = useState(false);

    return (
        <div className="about-container" id="about">
            <div className="about-header">
                <h1>About Me</h1>
            </div>
            <div className="about-description">
                <h1>Hi, I'm Steven. Nice to meet you.</h1>
                <p>I'm a software engineer student seeking a journey within web and app development. You see, an indefinite goal of mine is to provide excellent experiences to others. A dream I hope to be able to achieve not too far in the future. So let's get started! Please take a look around, and feel free to reach out to me about anything!</p>
                <div className={interested === true ? "not-interested" : "about-button"}>
                    <button type="button" onClick={() => setInterested(true)}>Still Interested?</button>
                </div>
                <div className={interested === true ? "interested-images" : "not-interested"}>
                    <img src={arma3} alt="Arma 3"></img>
                    <img src={minecraft} alt="Minecraft"></img>
                    <img src={unrealEngine} alt="Unreal Engine"></img>
                </div>
                <p className={interested === true ? "interested-info" : "not-interested"}>Creation has been something I've loved for a long time. At a young age, the only way for me to create was through video games. I'm sure you've heard of the game Minecraft before; to me, the beginning of my journey into the world of creation. As time passed, I gradually moved towards more advanced sandboxes such as Arma 3 Eden Editor or even game engines such as Unreal Engine. Besides that, I play about any type of game regardless of genre. So if you'd like to party up, do contact me below! <span>Psst, I also play Airsoft and Badminton.</span></p>
            </div>
            <div className="about-tools-container">
                <Tools />
            </div>
        </div>
    );
}

export default About;