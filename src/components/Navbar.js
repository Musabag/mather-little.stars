
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/our-staffs">Our Staffs</Link></li>
                <li><Link to="/document-upload">Document Upload</Link></li>
                <li><Link to="/art">Art</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/coding">Coding</Link></li>
                <li><Link to="/cooking">Cooking</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;