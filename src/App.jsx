import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import logo from './assets/logo-white.png';
import Home from './pages/home/Home.jsx';
import Pagina404 from "./pages/pagina404/Pagina404.jsx";
import Overzicht from "./pages/overzicht/Overzicht.jsx";
import Newpost from "./pages/newpost/Newpost.jsx";
import Navigation from "./components/navigation/Navigation.jsx"

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newpost" element={<Newpost/>}/>
                <Route path="/overzicht/:blogpost" element={<Overzicht/>}/>
                <Route path="*" element={<Pagina404/>}/>
            </Routes>
            <footer><p>footer</p></footer>
        </>

    )
}

export default App
