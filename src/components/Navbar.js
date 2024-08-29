import './Navbar.css';
// Navbar.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate the animation after the component has mounted
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the duration as needed

    return () => clearTimeout(timeoutId);
  }, []);

  const navbarVariants = {
    hidden: { y: '-50px' },
    visible: { y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };
  
  return (
    // <motion.nav
    // initial="hidden"
    // animate={isVisible ? 'visible' : 'hidden'}
    // variants={navbarVariants}
    // style={{
    //   padding: '10px',
    //   position: 'fixed',
    //   width: '100%',
    //   zIndex: 1000,
    // }}
    // >
    /* </motion.nav> */
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#about">About Me</a>
      <a class="et-hero-tab" href="#education">Education</a>
      <a class="et-hero-tab" href="#experience">Experience</a>
      <a class="et-hero-tab" href="#project">Projects</a>
      <a class="et-hero-tab" href="#contact">Contact</a>
      <span class="et-hero-tab-slider"></span>
      </div>
  );
};

export default Navbar;


