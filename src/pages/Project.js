import React, { useEffect, useState } from 'react';
import './project.css'
import TopNavbar from '../components/TopNavbar';
import ProjectCard from '../components/ProjectCard';
import ninemansmorris from '../assets/ninemansmorris.png';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';

const Project = () => {
  return (
    <div id="">
          <TopNavbar />
          <div className="section-grid">
       
          <Grid
              container
              spacing={2}
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
              
              >   <Grid size={12}>
                      <div className="section">
                          
    <h1 style={{ textAlign: "center", margin: "0" }}>Projects</h1>
                      </div>
  </Grid>
                  
  <Grid item xs={12} sm={6} md={4}>
                      <ProjectCard description={"sdasda"}/>
                      
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <ProjectCard />
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <ProjectCard />
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <ProjectCard />
                  </Grid>
            <Grid item xs={12} sm={6} md={4}>
    <ProjectCard />
                  </Grid>
                    <Grid item xs={12} sm={6} md={4}>
    <ProjectCard />
                  </Grid>
</Grid>
          </div>
          </div>


  );
};

export default Project;