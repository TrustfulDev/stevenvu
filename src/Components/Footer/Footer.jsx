import React from 'react';
import { AiFillLinkedin, AiFillFacebook, AiFillGithub, AiFillMail } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* Social Media Icons */}
            <div className="footer-socials">
                <a href="https://www.linkedin.com/in/vu-steven/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                <a href="https://www.facebook.com/stevenvu123" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
                <a href="https://github.com/TrustfulDev" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                <a href="mailto:sssstevenvu@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a>
            </div>
            {/* Footer navbar */}
            <div className="footer-nav">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </div>
            <p>&#169; 2022 Designed and Built by Steven Vu</p>
        </footer>
    );
}

export default Footer;