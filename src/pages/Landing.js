import React, { useState } from 'react';
import ReusableSlideInWithFade from '../animation/ReusableSlideInWithFade';
import Typewriter from '../animation/Typewriter';
import Padding from '../components/Padding';
import coding from '../assets/coding.png';
import Socials from "../components/Socials";
import Navbar from '../components/Navbar';
import { useDeviceType } from '../hooks/useDeviceType';
import './Landing.css';
import MiddleNavBar from "../components/MiddleNavBar";
// MUI
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TopNavbar from '../components/TopNavbar';
import { useNavigate } from "react-router-dom";
import { landingData } from '../data/portfolioData';

const Landing = () => { 
  const isMobile = useDeviceType();
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Landing" id="Landing">
      <div className="Landing-centre">
        <div className="row1">
          <ReusableSlideInWithFade backgroundColor="lightblue" duration={0.8}>
            <h1>{landingData.greeting}</h1>
            <Padding />
            <h1>I'm {landingData.name},</h1>
          </ReusableSlideInWithFade>
        </div>
        <div className="row2">
          <div className="typewriter-wrapper">
            <h3>
              <Typewriter
                textList={landingData.typewriterTexts}
                typingDelay={landingData.typewriterConfig.typingDelay}
                delDelay={landingData.typewriterConfig.delDelay}
                wordDelay={landingData.typewriterConfig.wordDelay}
              />
            </h3>
          </div>
        </div>
      </div>

      <div className="banner-logo">
        <img src={coding} alt="" />
        <Socials />
      </div>

      {/* Mobile arrow button below banner */}
      {isMobile && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          { 

            <IconButton
              onClick={() => navigate("/about")}
              className="pulse-arrow"
              sx={{
                color: "white",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                width: 60,
                height: 60,
                animation: "pulse 2.5s infinite",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.8)",
                  transform: "translateY(3px)",
                },
              }}
            >
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
            }
        </div>
      )}

      {/* Navbar with control of drawer */}
      <Navbar isMobile={isMobile} forceOpen={navOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}

export default Landing;
