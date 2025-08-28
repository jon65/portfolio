import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ninemansmorris from '../assets/ninemansmorris.png';
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub icon

function ProjectCard({ title, description, image, repoUrl }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "35vh",
        height: "300px",
        overflow: "hidden",
              borderRadius: "8px",
        boxShadow: 3,
        backgroundSize: "cover",
        backgroundImage: `url(${image})`, // Use the image passed as a prop
        backgroundPosition: "center",
        "&:hover .hoverText": {
          opacity: 0.7,
        },
      }}
    >
      {/* Text that appears on hover */}
      <Box 
        
        className="hoverText"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
            height: "100%",
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <div 
          
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          margin: "15px"
        }}>
        <Typography variant="h5" color="white" textAlign={"center"}>{ title}</Typography>
        <Typography variant="p" color="white">{description}</Typography>

          {/* Icon button linking to the GitHub repository */}
          <Box
            
          sx={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
          }}
        >
          <IconButton
            component="a"
            href={repoUrl}
            target="_blank"
            sx={{ color: "white" }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
        </div>
      </Box>
    </Box>
  );
}

export default ProjectCard;
