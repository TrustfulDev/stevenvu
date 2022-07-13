import React, { useState, useEffect } from 'react';
import { PuffLoader } from 'react-spinners';
import FadeIn from 'react-fade-in';
import './loading.css';

const Loading = () => {
    // Delay - 1 seconds
    const [renderLogo, setRenderLogo] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setRenderLogo(true);
        }, 1000);
    }, []);

    return (
        <>
            { renderLogo && 
                <div className="load-container scale-up-center">
                    <PuffLoader className='fade-out' color={'#d76733'} loading={true} size={250} />
                    <FadeIn>
                        <h1 className="load-text fade-out">Decrypting Portfolio</h1>
                    </FadeIn>
                </div> 
            }
        </>
    );
}

export default Loading;