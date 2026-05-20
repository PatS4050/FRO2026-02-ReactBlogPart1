import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import logo from './assets/logo-white.png';
import Home from './pages/home/Home.jsx';
import Pagina404 from "./pages/pagina404/Pagina404.jsx";
import Overzicht from "./pages/overzicht/Overzicht.jsx";
import Newpost from "./pages/newpost/Newpost.jsx";

function App() {
    return (
        <>
            <nav><p>navbar</p></nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newpost" element={<Newpost/>}/>
                <Route path="/overzicht" element={<Overzicht/>}/>
                <Route path="*" element={<Pagina404/>}/>
            </Routes>
            <main>
                <div className="page-container">
                    <img src={logo} alt="Company logo"/>
                    <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
                    <Home/>
                    <footer><p>footer</p></footer>
                </div>
            </main>
        </>
    )
}

export default App
