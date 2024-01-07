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
    <motion.nav
    initial="hidden"
    animate={isVisible ? 'visible' : 'hidden'}
    variants={navbarVariants}
    style={{
      padding: '10px',
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
    }}
    >
    <nav className="navbar">
      <div className="container">
        {/* Your navigation links or logo go here */}
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
      </div>
    </nav>
    </motion.nav>
  );
};

export default Navbar;


