import React from 'react';
import html5Logo from '../../Assets/html5.png';
import css3Logo from '../../Assets/css3.png';
import jsLogo from '../../Assets/js.png';
import reactjsLogo from '../../Assets/reactjs.png';
import './tools.css';

const Tools = () => {
    return (
        <div className='tools-container'>
            <img src={html5Logo} alt="html5" />
            <img src={css3Logo} alt="css3" />
            <img src={jsLogo} alt="Javascript" />
            <img src={reactjsLogo} alt="React js" />
        </div>
    );
}

export default Tools;