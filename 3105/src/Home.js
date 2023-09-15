// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Home = () => {
  

    return (
        <div>
          <center>
            <h1>Home Page</h1>
            
            <Link to="/about"><button>Go to About Page</button></Link>
            <br/><br/>
            <Link to="/nav"><button>Go to Nav Page</button></Link>
            <br/><br/>
            <Link to="/forms"><button>Go to Forms Fill up Page</button></Link>
            </center>
        </div>
    );
}

export default Home;
