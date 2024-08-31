import React from 'react';
import './AdminSidebar.css';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <nav>
        <ul className="admin-main-links">
            <p>MAIN MENU</p>
            <li><NavLink to="/admin">Dashboard</NavLink></li>
            <li><NavLink to="users">Students</NavLink></li>
            <li><NavLink to="courses">Courses</NavLink></li>
            <li><NavLink to="feedback">feedback</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default AdminSidebar;
