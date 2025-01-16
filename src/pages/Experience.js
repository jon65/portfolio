import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import './Experience.css';

const experiences = [
  {
    title: "Frontend Engineer (Remote)",
    company: "Selfbook / US - New York",
    dates: "Jul 2021 - Present",
    details: [
      "Developing screens and UI components for the web application using React and Tailwind.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
    ],
  },
  {
    title: "Software Developer (Remote)",
    company: "Wezov / Italy",
    dates: "Jun 2021 - Present",
    details: [
      "Developing mobile and web applications using React and React Native.",
      "Developing web scraping bots using Python and Selenium.",
      "Helping with PHP backend tasks and occasionally working with different programming languages.",
      "Consulting on frontend tech stack and integrating multiple external APIs across all platforms.",
    ],
  },
  {
    title: "Frontend Engineer (Contractor)",
    company: "FreeBeings",
    dates: "Mar 2021 - Aug 2021",
    details: [
      "Working on web applications and occasionally leading the development team.",
      "Using React and integrating external APIs with the HIVE blockchain.",
    ],
  },
  {
    title: "Frontend Developer (In Office)",
    company: "TDF / Algeria",
    dates: "Feb 2021 - Mar 2021",
    details: [
      "Made landing pages and web applications collaborating with the back-end engineers of the team.",
      "Convert designs into real-world applications and pages using multiple front-end technologies.",
    ],
  },
  {
    title: "Frontend Engineer (Freelance)",
    company: "Upwork",
    dates: "May 2021 - Aug 2021",
    details: [
      "Successfully completed numerous frontend jobs and high availability projects for clients.",
      "Received 5-star ratings and great feedback, leading to a top-rated badge.",
    ],
  },
  {
    title: "Software Developer (Remote)",
    company: "Shoppy",
    dates: "Nov 2018 - Mar 2020",
    details: [
      "Worked on various client-side dashboard and payment components from designs and site features using Vue and Nuxt.",
      "Integrated backend APIs.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <Container style={{ color: "white", paddingTop: "40px", maxWidth: "800px" }}>
      <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "20px" }}>
        EXPERIENCE
      </Typography>
      {experiences.map((experience, index) => (
        <Box key={index} style={{ marginBottom: "40px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {experience.title}
              </Typography>
              <Typography variant="body2" style={{ fontStyle: "italic" }}>
                {experience.company}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ textAlign: "right" }}>
                {experience.dates}
              </Typography>
            </Grid>
          </Grid>
          <Box style={{ marginTop: "10px", marginLeft: "20px" }}>
            {experience.details.map((detail, detailIndex) => (
              <Typography key={detailIndex} variant="body2" style={{ marginBottom: "5px" }}>
                - {detail}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default ExperiencePage;
