import React, { useEffect, useState } from 'react';
import './project.css'
import TopNavbar from '../components/TopNavbar';
import ProjectCard from '../components/ProjectCard';
import ninemansmorris from '../assets/ninemansmorris.png';
import qkshare from '../assets/qkshare.png';
import balance from '../assets/balance-logo.png';
import campside from '../assets/campsideReview.png';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Project = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const projects = [
    {
      repoUrl: "https://github.com/jon65/Nine-Mans-Morris",
      title: "Nine Mans Morris",
      description: "Implementation of Nine Mans Morris using JavaFX framework",
      image: ninemansmorris
    },
    {
      repoUrl: "https://github.com/Monash-FIT3170/BaLance-Team-Forming-Dashboard",
      title: "Balance Team Formation",
      description: "Team formation tool built for teaching staff that groups students based on various metrics",
      image: balance
    },
    {
      repoUrl: "https://github.com/jon65?tab=repositories",
      title: "Campside Review",
      description: "Full stack Javascript application that allows users to review and comment campsites.",
      image: campside
    },
    {
      repoUrl: "https://github.com/jon65/quickShare",
      title: "QuickShare",
      description: "Uploads and download files without authentication using a one-time generated code",
      image: qkshare
    }
  ];

  return (
    <Box className="project-page">
      <TopNavbar />
      
      <Container 
        maxWidth="xl" 
        className="project-container"
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          py: { xs: 3, sm: 4, md: 5 },
          minHeight: '100vh'
        }}
      >
        {/* Header Section */}
        <Box className="project-header-section">
          <Typography
            variant={isMobile ? "h3" : isTablet ? "h2" : "h1"}
            component="h1"
            className="project-title"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: { xs: 3, sm: 4, md: 6 },
              fontSize: { 
                xs: '2rem', 
                sm: '2.5rem', 
                md: '3rem', 
                lg: '3.5rem' 
              },
              color: '#333',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '60px', sm: '80px', md: '100px' },
                height: '4px',
                background: 'linear-gradient(90deg, #007bff, #0056b3)',
                borderRadius: '2px'
              }
            }}
          >
            Projects
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <Grid 
              key={index}
              size={{ xs: 12, sm: 6, lg: 4 }}
              sx={{
                display: 'flex',
                animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(30px)'
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              <Box sx={{ width: '100%', height: '100%' }}>
                <ProjectCard 
                  repoUrl={project.repoUrl}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </Box>
            </Grid>
          ))}
          
          {/* Empty grid items for alignment - only show on larger screens */}
          {projects.length % 3 !== 0 && !isMobile && (
            Array.from({ length: 3 - (projects.length % 3) }).map((_, index) => (
              <Grid 
                key={`empty-${index}`} 
                size={{ lg: 4 }} 
                sx={{ display: { xs: 'none', lg: 'block' } }}
              />
            ))
          )}
        </Grid>

        {/* Optional: Add a "More Projects" section */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mt: { xs: 4, sm: 6, md: 8 },
            pb: { xs: 2, sm: 3, md: 4 }
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666', 
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontStyle: 'italic'
            }}
          >
            More projects coming soon...
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Project;