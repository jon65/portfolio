import React from 'react';
import ReusableSlideInWithFade from '../animation/ReusableSlideInWithFade';
import Typewriter from '../animation/Typewriter';
import Padding from '../components/Padding';
import coding from '../assets/coding.png';
import Socials from "../components/Socials";
import Navbar from '../components/Navbar';
import { useDeviceType } from '../hooks/useDeviceType';
import './Landing.css';

const Landing = () => { 
  const isMobile = useDeviceType();

  return (
    <div className="Landing" id="Landing">
      <div className="Landing-centre">
        <div className="row1">
          <ReusableSlideInWithFade backgroundColor="lightblue" duration={0.8}>
            <h1>Hi!</h1>
            <Padding />
            <h1>I'm Jonathan,</h1>
          </ReusableSlideInWithFade>
        </div>
        <div className="row2">
          <div className="typewriter-wrapper">
            <h3>
              <Typewriter
                textList={["Aspiring Software Engineer", "Rock Climbing Enthusiast", "lifelong learner", "tech geek"]}
                typingDelay={70}
                delDelay={20}
                wordDelay={1500}
              />
            </h3>
          </div>
        </div>
      </div>
      <div className="banner-logo">
        <img src={coding} alt="" />
        <Socials />
      </div>

      {/* Pass isMobile prop */}
      <Navbar isMobile={isMobile} />
    </div>
  );
}

export default Landing;
