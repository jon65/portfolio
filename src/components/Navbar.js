import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ y: +80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="navbar"
    >
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`et-hero-tabs-container ${isOpen ? "open" : ""}`}>
        {/* Cancel Button */}
        {/* <span className="cancel-button" onClick={toggleMenu}>
          &times;
        </span> */}
        <Link className="et-hero-tab" to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link className="et-hero-tab" to="/education" onClick={toggleMenu}>
          Education
        </Link>
        <Link className="et-hero-tab" to="/experience" onClick={toggleMenu}>
          Experience
        </Link>
        <Link className="et-hero-tab" to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link className="et-hero-tab" to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
