import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Job Recommendations</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
