import React from "react";
import { Button, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GradientButton from "./GradientButton";
function Footer() {
  return (
   <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: '#000', height: '100vh' }}
    >

    <GradientButton>
           <EmailIcon style={{ marginRight: '8px' }} />

    Send an email
    </GradientButton>
      <GradientButton>
       <LinkedInIcon style={{ marginRight: '8px' }} />
        LinkedIn
      </GradientButton>
      <GradientButton>
        <GitHubIcon style={{ marginRight: '8px' }} />

        Github
      </GradientButton>
   
    </Stack>
  );
}

export default Footer;
