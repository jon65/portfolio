import './Navbar.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`et-hero-tabs-container ${isOpen ? 'open' : ''}`}>
        <a className="et-hero-tab" href="#about">About Me</a>
        <a className="et-hero-tab" href="#education">Education</a>
        <a className="et-hero-tab" href="#experience">Experience</a>
        <a className="et-hero-tab" href="#project">Projects</a>
        <a className="et-hero-tab" href="#contact">Contact</a>
        <span className="et-hero-tab-slider"></span>
      </div>
    </div>
  );
};

export default Navbar;
