import React from "react";
import { Container, Typography, Box, Grid2,Paper,styled } from "@mui/material";
import "./Landing.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Landing = () => {
  return (
    <div className="full-page-container">
        <Box sx={{ px: 4 }}> {/* px = 4 means 32px padding on left and right */}

  <Grid2 container sx={{ flexGrow: 1 }}>
    <Grid2 size={12}>
            <Typography h6 style={{ textAlign: "left" }}>Hey, I'm</Typography>
            <Typography style={{ textAlign: "left" }}>
              Jonathan Yip
            </Typography>
            <Typography style={{ textAlign: "left" }}>
    I'm a software engineer based in Melbourne, Australia. I enjoy creating web
     applications, mobile apps, and automating processes. Let's build something amazing
     together! 
            </Typography>
    </Grid2>
        </Grid2>
        </Box>
</div>

  );
};

export default Landing;


//   <Container
//   style={{
//     textAlign: "center",
//     color: "white",
//     display: "flex", // Use Flexbox
//     flexDirection: "column", // Align items in a column
//                   justifyContent: "center", // Center vertically
//         maxWidth: "70%", // Limit the width to 70% of the screen
//     maxHeight: "50%", // Limit the height to 70% of the screen
//     alignItems: "left", // Center horizontally
//     height: "100vh", // Full height of the viewport
//   }}
// >
//   <Typography variant="h6">Hey, I'm</Typography>
//   <div className="name-title">Jonathan Yip</div>
//   <Typography
//     variant="body1"
//                   style={{
//       marginTop: "20px",
//       maxWidth: "600px",
//       lineHeight: "1.8",
//     }}
//   >
//     I'm a software engineer based in Melbourne, Australia. I enjoy creating web
//     applications, mobile apps, and automating processes. Let's build something amazing
//     together!
//   </Typography>
// </Container>