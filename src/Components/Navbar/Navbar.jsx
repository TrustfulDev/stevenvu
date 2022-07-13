import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../../Assets/SmallTransparent.png'
import './navbar.css';

const Menu = () => (
    <>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
    </>
)

const Navbar = () => {
    /* Used to toggle the menu in mobile navigation */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar-container">
            {/* Main Navbar */}
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-links">
                <Menu />
                <button type="button" onClick={() => alert("I don't have one yet")}>Resume</button>
            </div>

            {/* Mobile Navbar */}
            <div className="navbar-menu">
                { toggleMenu
                    ? <AiOutlineCloseCircle color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <AiOutlineMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                { toggleMenu && (
                    <div className="navbar-menu-container scale-up-center">
                        <div className="navbar-menu-links">
                            <Menu />
                            <button type="button" onClick={() => alert("I don't have one yet")}>Resume</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;