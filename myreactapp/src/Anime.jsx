import React from "react";
import "./Anime.css";

export default function Anime() {
  return (
    <div className="anime-container">
      {/* Navbar */}
      <nav className="navbar">
        <span className="nav-name">YOUR NAME</span>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="content">
        <div className="bulb-wrapper">
          <div className="spark"></div>
          <div className="bulb"></div>
        </div>
        <h1 className="title">Divyesh Dhandhukiya</h1>
        <p className="subtitle">Electrical Engineer</p>
      </div>
    </div>
  );
}
