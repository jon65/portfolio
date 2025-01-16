import React from "react";
import { Container, Typography } from "@mui/material";
import "./Landing.css";

const Landing = () => {
  return (
      <div className="full-page-container">
          <div id="net"></div>


  <Container
  style={{
    textAlign: "center",
    color: "white",
    display: "flex", // Use Flexbox
    flexDirection: "column", // Align items in a column
                  justifyContent: "center", // Center vertically
        maxWidth: "70%", // Limit the width to 70% of the screen
    maxHeight: "50%", // Limit the height to 70% of the screen
    alignItems: "left", // Center horizontally
    height: "100vh", // Full height of the viewport
  }}
>
  <Typography variant="h6">Hey, I'm</Typography>
  <div className="name-title">Jonathan Yip</div>
  <Typography
    variant="body1"
                  style={{
      marginTop: "20px",
      maxWidth: "600px",
      lineHeight: "1.8",
    }}
  >
    I'm a software engineer based in Melbourne, Australia. I enjoy creating web
    applications, mobile apps, and automating processes. Let's build something amazing
    together!
  </Typography>
</Container>
    </div>
  );
};

export default Landing;
