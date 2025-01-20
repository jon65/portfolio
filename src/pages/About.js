import React, { useState} from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import TopNavbar from '../components/TopNavbar';
import space from '../assets/space.png';
import Skills from '../pages/Skills';

const About = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
  const [isSidecardOpen, setIsSidecardOpen] = useState(false);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
    setIsSidecardOpen(true);
  };

  const handleCloseSidecard = () => {
    setIsSidecardOpen(false);
  };
  const experiences = [
      {
      title: 'Automation Software Engineer',
      company: 'Monash Automation',
      location: 'Clayton, VIC',
      type: 'Student Team',
      duration: 'Jul 2023 - Jul 2024',
    },
    {
      title: 'Mobile Application Intern',
      company: 'Silkron',
      location: 'Penang, Malaysia',
      type: 'Internship',
      duration: 'Sep 2022 - Jan 2023',
    },
    {
      title: 'Mahkota Medical Centre',
      company: 'Company Name here',
      location: 'Bengaluru',
      type: 'Internship',
      duration: 'Jan 2021 - Mar 2021',
    },
  ];

  return (
    <div>
      <TopNavbar />
    <div className="about-container">
      <div className={`backdrop ${isSidecardOpen ? "active" : ""}`} onClick={handleCloseSidecard}></div>
      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>About Me</h2>
              Hello there 👋🏻
              I'm Jonathan Yip, welcome to my website. 
            <div>
              Enjoy learning new technologies and exploring opportunities in web & mobile development, DevOps and security.
            </div>
            </div>
          <div className="about-image">
            <img src={space} alt="Space scene" />
          </div>
        </div>

        {/* Experience Section */}
     <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-cards">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experience-card"
              onClick={() => handleCardClick(experience)}
            >
              <div className="experience-header">
                <h4>{experience.title}</h4>
                <span className="experience-type">{experience.type}</span>
              </div>
              <p className="experience-company">{experience.company}</p>
              <p className="experience-duration">{experience.duration}</p>
            </div>
          ))}
          </div>
          
      </section>
    
        {/* Education Section */}
        <section className="education-section">
        <h2>Education</h2>
        <div className="education-cards">
        
              <div className="education-header">
                <h6>Monash University</h6>
            </div>
            <div className="education-content">

                <span className="education-type">Bachalor of Engineering (Honours) Software </span>
              <p className="education-duration">2020-2024</p>
            </div>
            </div>
          
      </section>
      {/* Sidecard */}
      <div className={`sidecard ${isSidecardOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={handleCloseSidecard}>
          &times;
        </button>
        {selectedExperience && (
          <div className="sidecard-content">
            <h3>{selectedExperience.title}</h3>
            <h4>{selectedExperience.company}</h4>
            <p>{selectedExperience.duration}</p>
            <p>{selectedExperience.details}</p>
          </div>
        )}
          </div>
         
      </div>
  
      </div>
    </div>
  );
};

export default About;
