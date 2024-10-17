import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./nav_bar.css";
import Logo from "../../assets/logo.jpg";

function Navigation() {
  return (
    <div className="main-container">
      <div className="nav-bar-container">
        <div className="logo-wrapper">
          <img src={Logo} className="logo" />
        </div>
        <div className="link-wrapper">
          <NavLink to="/" className="link">
            <label className="link-label">HOME</label>
          </NavLink>
          <NavLink to="/schedules" className="link">
            <label className="link-label">SCHEDULES</label>
          </NavLink>
          <NavLink to="/contact" className="link">
            <label className="link-label">CONTACT</label>
          </NavLink>
        </div>
        <div className="login-wrapper">
          <button className="login-btn">Login</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
