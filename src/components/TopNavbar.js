import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const TopNavbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black"); // Set initial text color to black

  // Hook to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change 50 to your desired scroll threshold
        setBgColor("rgba(0, 0, 0, 0.8)"); // Dark background when scrolled
        setTextColor("white"); // Keep text color white when scrolled down
      } else {
        setBgColor("transparent"); // Reset to transparent when at the top
        setTextColor("black"); // Change text color back to black when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="sticky" style={{ backgroundColor: bgColor, transition: "background-color 0.3s ease" }} elevation={0}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ fontWeight: "bold", color: textColor }}>
          JONNO.
        </Typography>
        <div>
          <Button color="inherit" style={{ color: textColor }}>Home</Button>
          <Button color="inherit" style={{ color: textColor }}>About</Button>
          <Button color="inherit" style={{ color: textColor }}>Projects</Button>
          <Button color="inherit" style={{ color: textColor }}>Contact</Button>

          <IconButton color="inherit" style={{ color: textColor }}>
            <Brightness4Icon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
