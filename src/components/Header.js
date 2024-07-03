// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Welcome to 9B St. Peter Canisius</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#assignments">Assignments</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
