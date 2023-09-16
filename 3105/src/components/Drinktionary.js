// src/Drinktionary.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Drinktionary.css';
import 'react-bootstrap';
import Navbar from './Nav';

const Drinktionary = () => {
    return (
      <div>
        <Navbar />
        <center>
        <h1 className= "text-white pt-2">Drinktionary</h1>
        </center>
      </div>
    );
  }

export default Drinktionary;