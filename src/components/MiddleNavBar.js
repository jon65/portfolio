// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Container,
//   useMediaQuery,
//   useTheme
// } from "@mui/material";
// import {
//   Home as HomeIcon,
//   Person as PersonIcon,
//   Work as WorkIcon,
//   Code as CodeIcon,
//   Email as EmailIcon,
//   ArrowDownward as ArrowDownwardIcon
// } from "@mui/icons-material";
// import { useLocation } from "react-router-dom";
// import MobileNavLinks from "./MobileNavLinks"; // Your portal nav links
// import PortalWrapper from "./PortalWrapper";   // Portal wrapper

// const TopNavbar = () => {
//   const [bgColor, setBgColor] = useState("transparent");
//   const [textColor, setTextColor] = useState("black");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const location = useLocation();

//   const navItems = [
//     { path: "/", label: "Home", icon: <HomeIcon /> },
//     { path: "/about", label: "About", icon: <PersonIcon /> },
//     { path: "/projects", label: "Projects", icon: <WorkIcon /> },
//     { path: "/skills", label: "Skills", icon: <CodeIcon /> },
//     { path: "/contact", label: "Contact", icon: <EmailIcon /> }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setBgColor("rgba(0, 0, 0, 0.95)");
//         setTextColor("white");
//       } else {
//         setBgColor("transparent");
//         setTextColor("black");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isActivePage = (path) => location.pathname === path;

//   // Mobile pulsing arrow button
//   const MobileDrawerButton = () => {
//     if (!isMobile) return null;

//     return (
//       <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
//         <IconButton
//           onClick={() => setMobileMenuOpen(true)}
//           sx={{
//             color: "white",
//             backgroundColor: "rgba(0,0,0,0.6)",
//             borderRadius: "50%",
//             width: 60,
//             height: 60,
//             animation: "pulse 2.5s infinite",
//             transition: "all 0.3s ease",
//             "&:hover": {
//               backgroundColor: "rgba(0,0,0,0.8)",
//               transform: "translateY(3px)"
//             }
//           }}
//         >
//           <ArrowDownwardIcon fontSize="large" />
//         </IconButton>
//       </div>
//     );
//   };

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           backgroundColor: bgColor,
//           transition: "all 0.3s ease",
//           backdropFilter: bgColor !== "transparent" ? "blur(10px)" : "none"
//         }}
//       >
//         <Container maxWidth="lg">
//           <Toolbar
//             sx={{
//               justifyContent: "center",
//               minHeight: { xs: 64, sm: 70 },
//               px: { xs: 1, sm: 2 }
//             }}
//           >
//             {/* Desktop navigation could go here */}

//             {/* Mobile arrow button */}
//             <MobileDrawerButton />
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Mobile portal nav links */}
//       {isMobile && mobileMenuOpen && (
//         <PortalWrapper>
//           <MobileNavLinks onClose={() => setMobileMenuOpen(false)} />
//         </PortalWrapper>
//       )}

//       {/* Pulse animation keyframes */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: scale(1); opacity: 1; }
//             50% { transform: scale(1.2); opacity: 0.7; }
//             100% { transform: scale(1); opacity: 1; }
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default TopNavbar;
