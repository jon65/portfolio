// About.js
import React from 'react';
import './About.css';
import {
    FaGithub, FaLinkedin, FaEnvelope
} from 'react-icons/fa';


const About = () => {
  return (
    <div className="container about">
      <div className="section">
    <h2 className="header">
      Hello there
        </h2>
        <div className="bio">
          <div className="row">
            My name is Jonathan Yip and I am a final year Software Engineering Student. I 
          </div>
          <div className="links">
            <div className="d-flex align-items-start">
                            <a className="p-3"
                                href={'./'}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                
                                    className='landing--social className="p-2 flex-fill"'
                                    aria-label='GitHub'
              />
              </a>
              <div className="p-3">Github</div>
            </div>
            <div className="d-flex align-items-start">
              <a
                className="p-3"
                                href={'./'}
                                target='_blank'
                                rel='noreferrer'
                            >
                <FaLinkedin
                  
                                    className='landing--social'
                                    aria-label='GitHub'
              />
              </a>
              <div className="p-3">
              Linkedin
              </div>
            </div>
            <div className="d-flex align-items-start">
              <a
                className="p-3"
                                href={'./'}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaEnvelope
                                    className='landing--social'
                                    aria-label='GitHub'
              />
              </a>
              <div className="p-3">
                xinquanyip@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
