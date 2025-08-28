import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <p style={styles.footerText}>☀︎ Designed & Developed ☀︎</p>
      <p style={styles.footerText}>Fueled by coffee and big dreams :D</p>
    </footer>
  );
};

const styles = {
  footerContainer: {
    height: "10vh",
    backgroundColor: "#333", // Dark background
    color: "#fff", // Light text
    padding: "5px 0", // Top and bottom padding
    textAlign: "center", // Center the text
    fontFamily: "'Poppins', sans-serif", // Use a clean font
    position: "relative", // Stick footer to bottom
    bottom: 0,
    width: "100%",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow at top
  },
  footerText: {
    margin: "0px 0", // Spacing between lines
    fontSize: "15px", // Adjust font size for readability
  },
};

export default Footer;
