import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h3 className="logo">Covid-19</h3>
        <p className="tagline"> Live Traker Dashboard</p>
      </div>
      <div className="menu-container">
        <div className="search-flex">
          <input className="search-input" type="search" placeholder="Search" />
        </div>
        <img
          className="profile-pic"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          alt="pro"
        />
        <img
          className="profile-pic"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          alt="pro"
        />
        <img
          className="profile-pic"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          alt="pro"
        />
      </div>
    </div>
  );
}
