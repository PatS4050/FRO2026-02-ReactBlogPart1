import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import logo from './assets/logo-white.png';
import Home from './pages/home/Home.jsx';
import Pagina404 from "./pages/pagina404/Pagina404.jsx";
import Posts from "./pages/posts/Posts.jsx";
import Newpost from "./pages/newpost/Newpost.jsx";
import Navigation from "./components/navigation/Navigation.jsx"
import Blogpost from "./components/blogpost/Blogpost.jsx";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newpost" element={<Newpost/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="*" element={<Pagina404/>}/>
                <Route path="/posts/:id" element={<Blogpost/>}/>
            </Routes>
            <footer><p>footer</p></footer>
        </>

    )
}

export default App
