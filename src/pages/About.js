import React, { useState} from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import TopNavbar from '../components/TopNavbar';
import space from '../assets/space.png';

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
      title: 'Frontend Web Developer',
      company: 'Company Name here',
      location: 'Bengaluru',
      type: 'Full Time',
      duration: 'Sep 2021 - Dec 2021',
    },
    {
      title: 'Internship',
      company: 'Company Name here',
      location: 'Bengaluru',
      type: 'Internship',
      duration: 'Sep 2021 - Dec 2021',
    },
  ];

  return (
    
    <div className="about-container">
      <div className={`backdrop ${isSidecardOpen ? "active" : ""}`} onClick={handleCloseSidecard}></div>
      <TopNavbar />
      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h3>About Me</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quisquam temporibus voluptatibus repellat et obcaecati adipisci.
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
  );
};

export default About;
