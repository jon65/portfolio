import React, { useState } from "react";
import "./Navbar.css";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
        initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
      className="navbar">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`et-hero-tabs-container ${isOpen ? "open" : ""}`}>
        {/* Cancel Button */}
        <span className="cancel-button" onClick={toggleMenu}>
          &times;
        </span>
        <a className="et-hero-tab" href="#about">
          About Me
        </a>
        <a className="et-hero-tab" href="#education">
          Education
        </a>
        <a className="et-hero-tab" href="#experience">
          Experience
        </a>
        <a className="et-hero-tab" href="#projects">
          Projects
        </a>
        <a className="et-hero-tab" href="#contact">
          Contact
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
