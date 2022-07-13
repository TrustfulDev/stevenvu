import React from 'react';
import { AiFillLinkedin, AiFillFacebook, AiFillGithub, AiFillMail } from 'react-icons/ai';
import FadeIn from 'react-fade-in';
import './hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <FadeIn>
                <h1>Steven Vu</h1>
                <p>Software Engineer &amp; Front-end Developer</p>
                {/* Used in the footer, check footer.css for styling */}
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/vu-steven/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a href="https://www.facebook.com/stevenvu123" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
                    <a href="https://github.com/TrustfulDev" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href="mailto:sssstevenvu@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a>
                </div>
            </FadeIn>
        </div>
    );
}

export default Hero;