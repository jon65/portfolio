import React, { useEffect, useState } from 'react';
import './project.css'
import TopNavbar from '../components/TopNavbar';
import ProjectCard from '../components/ProjectCard';
import ninemansmorris from '../assets/ninemansmorris.png';
import qkshare from '../assets/qkshare.png';
import balance from '../assets/balance-logo.png';
import campside from '../assets/campsideReview.png';
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
                          
    <h2 style={{   margin: "0",
  }}>Projects</h2>
                      </div>
  </Grid>
                  
                  <Grid size={{xs:12, sm:6, md:4}}>
                      <ProjectCard repoUrl={"https://github.com/jon65/Nine-Mans-Morris"} title={"Nine Mans Morris"} description={"Implementation of Nine Mans Morris using JavaFX framework"} image={ninemansmorris} />
                      
  </Grid>
  <Grid size={{xs:12, sm:6, md:4}}>
                      <ProjectCard repoUrl={"https://github.com/Monash-FIT3170/BaLance-Team-Forming-Dashboard"} title={"Balance Team Formation"} description={"Team formation tool built for teaching staff that groups students based on various metrics"} image={ balance} />
  </Grid>
  <Grid size={{xs:12, sm:6, md:4}}>
                      <ProjectCard  repoUrl={"https://github.com/jon65?tab=repositories"}  title={"Campside Review"} description={"full stack Javascript application that allows users to review and comment campsites."} image={campside} />
  </Grid>
  <Grid size={{xs:12, sm:6, md:4}}>
                      <ProjectCard repoUrl={"https://github.com/jon65/quickShare"} title={"QuickShare"} description={"Uploads and download files without authentication using a one-time generated code"} image={ qkshare} />
                  </Grid>
                    <Grid size={{xs:12, sm:6, md:4}}>
                  </Grid>
                    <Grid size={{xs:12, sm:6, md:4}}>
                  </Grid>
</Grid>
          </div>
          </div>


  );
};

export default Project;