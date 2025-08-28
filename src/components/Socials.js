import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Icon.css';
const Socials = () => {
  return (
    <div style={styles.container}>
      <a
        className="icon"
        href="https://github.com/jon65"
        target="_blank"
        rel="noreferrer"
        style={styles.iconLink}
      >
        <FaGithub style={styles.icon} />
      </a>
      <a
        className="icon"
        href="https://www.linkedin.com/in/jon65"
        target="_blank"
        rel="noreferrer"
        style={styles.iconLink}
      >
        <FaLinkedin style={styles.icon} />
      </a>
      <a 
        className="icon"
        href="mailto:your-email@example.com"
        target="_blank"
        rel="noreferrer"
        style={styles.iconLink}
      >
        <FaEnvelope style={styles.icon} />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: '20px', // Adjust the distance from the top as needed
    right: '20px', // Adjust the distance from the right as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px', // Space between icons, can be adjusted
    transition: 'transform 0.3s ease', // Smooth transition for zooming effect
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '30px', // Adjust icon size
    color: '#333', // Icon color
    transition: 'transform 0.3s ease, color 0.3s ease', // Smooth transform and color transition
    '&:hover': {
      transform: 'scale(2)', // Increased zoom effect
      color: '#0077b5', // Change color on hover (e.g., LinkedIn blue)
    },
  },
};

export default Socials;
