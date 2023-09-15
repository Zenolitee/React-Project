// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <div><center>
        <h1>Navigate</h1>
        <Link to="/"><button>Home</button></Link>
        <br></br><br></br>
        <Link to="/about"><button>About</button></Link></center>
      </div>
    );
  }

export default Nav;
