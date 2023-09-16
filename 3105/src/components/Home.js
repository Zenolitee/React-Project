// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-bootstrap';
import Navbar from './Nav';
const Home = () => {
  

    return (    
    <div>
        
        <Navbar />

        
          <center>
            <h1>Home Page</h1>
            
            <Link to="/about"><button class="btn btn-primary">Go to About Page</button></Link>
            <br/><br/>
            <Link to="/nav"><button class="btn btn-primary">Go to Nav Page</button></Link>
            <br/><br/>
            <Link to="/forms"><button class="btn btn-primary">Go to Forms Fill up Page</button></Link>
            </center>

        </div>



    );
}

export default Home;
