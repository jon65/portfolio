
// ====================================
// Navbar.js - Updated with theme toggle
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
// import { useTheme } from './ThemeContext'; // Uncomment when using the context

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  // const { isDarkMode, toggleTheme } = useTheme(); // Uncomment when using the context
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/about', label: 'About', icon: '👤' },
    { path: '/projects', label: 'Projects', icon: '💼' },
    { path: '/skills', label: 'Skills', icon: '⚡' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  // if (isMobile) {
  //   return (
  //     <>

  //       Bottom Navigation Bar
  //       <motion.div
  //         initial={{ y: 80, opacity: 0 }}
  //         animate={{ y: 0, opacity: 1 }}
  //         exit={{ opacity: 0 }}
  //         transition={{ duration: 1.5 }}
  //         className="mobile-bottom-nav"
  //       >
  //         {navItems.map((item) => (
  //           <Link 
  //             key={item.path}
  //             className={`bottom-nav-item ${location.pathname === item.path ? 'active' : ''}`}
  //             to={item.path}
  //           >
  //             <span className="nav-icon">{item.icon}</span>
  //             <span className="nav-label">{item.label}</span>
  //           </Link>
  //         ))}
  //       </motion.div>

  //       {/* Overlay for sidebar */}
  //       {isOpen && <div className="mobile-overlay" onClick={toggleMenu}></div>}
  //     </>
  //   );
  // }

  // Desktop navbar
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="navbar"
    >
      <div className="et-hero-tabs-container">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            className={`et-hero-tab ${location.pathname === item.path ? 'active' : ''}`}
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;