// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import your page components
import About from './About';
import Nav from './Nav';
import Forms from './Forms';
import Drinktionary from './Drinktionary';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/nav" element={<Nav/>} />
            <Route exact path="/forms" element={<Forms/>} />
            <Route exact path="/drinktionary" element={<Drinktionary/>} />
            {/* Add more routes for other pages here */}
        </Routes>
    </Router>
  );
}

export default AppRouter;
