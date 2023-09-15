// src/About.js
import React from 'react';
import { Link } from 'react-router-dom'

const About = () => {
    return (
      <div>
        <center>
        <h1>About Page</h1>
        <Link to="/"><button>Go to Home Page</button></Link>
        <br></br><br></br>
        <Link to="/nav"><button>Navigation</button></Link></center>
      </div>
    );
  }

export default About;
