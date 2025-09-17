import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({ title, description, image, repoUrl }) {
  return (
    <Box
      sx={{
        position: "relative",
        // Make width responsive
        width: {
          xs: "100%",      // Full width on mobile
          sm: "350px",     // Fixed width on tablets
          md: "35vh",      // Your original width on desktop
        },
        // Make height responsive
        height: {
          xs: "250px",     // Smaller height on mobile
          sm: "280px",     // Medium height on tablets
          md: "300px",     // Original height on desktop
        },
        // Add max-width for very large screens
        maxWidth: {
          xs: "100%",
          sm: "400px",
          md: "400px",
        },
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: 3,
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        // Add cursor pointer to indicate interactivity
        cursor: "pointer",
        // Handle hover on desktop and touch on mobile
        "&:hover .hoverText, &:active .hoverText": {
          opacity: 0.9,  // Increased opacity for better readability
        },
        // Optional: Add transition for smooth appearance
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: {
            xs: "none",           // No transform on mobile
            md: "scale(1.02)",    // Slight scale on desktop hover
          },
        },
      }}
    >
      {/* Text overlay that appears on hover/touch */}
      <Box 
        className="hoverText"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.85)", // Semi-transparent black
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Content container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "relative",
            textAlign: "center",
            padding: {
              xs: "10px",    // Less padding on mobile
              sm: "15px",    // More padding on larger screens
            },
          }}
        >
          <Typography 
            variant="h5" 
            color="white" 
            sx={{
              fontSize: {
                xs: "1.2rem",     // Smaller font on mobile
                sm: "1.5rem",     // Medium font on tablets
                md: "1.5rem",     // Original size on desktop
              },
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body1" 
            color="white"
            sx={{
              fontSize: {
                xs: "0.9rem",     // Smaller font on mobile
                sm: "1rem",       // Normal font on tablets
              },
              lineHeight: 1.4,
              marginBottom: "40px", // Space for the GitHub icon
              // Limit text overflow
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: {
                xs: 4,            // Show fewer lines on mobile
                sm: 5,            // Show more lines on larger screens
              },
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>

          {/* GitHub icon button */}
          <Box
            sx={{
              position: "absolute",
              bottom: {
                xs: "10px",       // Closer to edge on mobile
                sm: "15px",       // Original spacing on larger screens
              },
              right: {
                xs: "10px",       // Closer to edge on mobile
                sm: "15px",       // Original spacing on larger screens
              },
            }}
          >
            <IconButton
              component="a"
              href={repoUrl}
              target="_blank"
              sx={{ 
                color: "white",
                padding: {
                  xs: "8px",      // Smaller touch target on mobile
                  sm: "12px",     // Normal size on larger screens
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              aria-label="View GitHub repository"
            >
              <GitHubIcon 
                sx={{
                  fontSize: {
                    xs: "1.8rem",  // Slightly smaller on mobile
                    sm: "2.2rem",  // Normal size on larger screens
                  }
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;