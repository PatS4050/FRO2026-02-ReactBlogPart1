import './Home.css';
import React from 'react';
import logo from "../../assets/logo-white.png";

function Home() {
    return (
        <div className="page-container">
            <div className="homePage">
                <h1>Homepage</h1>
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
        </div>
    )
}

export default Home