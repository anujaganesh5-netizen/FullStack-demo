import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/header.css';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left */}
      <div className="left-section">
        <img src="/assets/logo.jpeg" alt="Logo" />
        <h3 className="site-title">InterviewHub</h3>
      </div>

      {/* Center */}
      <div className="nav-icons">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/jobs" className={({ isActive }) => (isActive ? 'active' : '')}>
          Jobs
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
          Resume Builder
        </NavLink>
        <NavLink to="/interview-prep" className={({ isActive }) => (isActive ? 'active' : '')}>
          Interview Prep
        </NavLink>
      </div>

      {/* Right */}
      <div className="right-section">
        <Link className="profile" to="/profile">
          <i className="fa-regular fa-circle-user"></i>
        </Link>

        <h3 id="navUser">Hello, User</h3>

        <Link to="/login" className="login-btn" id="loginBtn">
          Login
        </Link>

        <button type="button" id="logoutBtn" className="login-btn">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
