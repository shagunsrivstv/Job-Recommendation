import React from "react";


const Home = () => {
    return (
        <div 
            className="hero" 
            style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/bgm.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <h1>Find Your Dream Job Effortlessly</h1>
            <p>Discover top opportunities tailored to your skills and preferences.</p>
            <a href="/jobs" className="cta-button">Browse Jobs</a>
        </div>
    );
};

export default Home;
