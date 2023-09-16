// src/Drinktionary.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Drinktionary.css';
import 'react-bootstrap';
import Navbar from './Nav';


const Drinktionary = () => {
    return (
      <div className="background-image">
        <div className="container-fluid p-0">
        <Navbar />
        <center>
        <h1 className= "Drinktionary pt-2">Drinktionary</h1>
        </center>
      </div>
    </div>
    );
  }

export default Drinktionary;