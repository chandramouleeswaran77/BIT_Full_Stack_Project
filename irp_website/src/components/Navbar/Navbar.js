import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>
      <ul>
        <li><NavLink to="/dashboard" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/experts" activeClassName="active">Expert List</NavLink></li>
        <li><NavLink to="/add-profile" activeClassName="active">Add Profile</NavLink></li>
        <li><NavLink to="/upcoming-events" activeClassName="active">Upcoming Events</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
