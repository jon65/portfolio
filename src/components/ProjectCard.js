import React from "react";
import { Box, Typography } from "@mui/material";

function ProjectCard({ title, description }) {
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
        backgroundPosition: "center",
        "&:hover .hoverText": {
          opacity: 0.5,
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
          color: "black",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Typography variant="h6">dsadjasdk akd ak dkas kdn sak dkans dknasda</Typography>
      </Box>
    </Box>
  );
}

export default ProjectCard;
