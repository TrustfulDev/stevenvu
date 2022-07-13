import React, { useState, useEffect } from 'react';
import { Loading, Navbar, Hero, About, Projects, Experience, Contact, Footer } from './Components';
import './App.css';

const App = () => {
    // Loading - 4 seconds
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <div className="App">
            { loading ? (
                <Loading />
            ) : (
                <>
                    <div className="home_page">
                        <Navbar />
                        <Hero />
                    </div>
                    <About />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;