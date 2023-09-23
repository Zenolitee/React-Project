// src/Nav.js
import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">VA-11 HALL-A</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forms">Shimmer Experiment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/drinktionary">Drinktionary</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;