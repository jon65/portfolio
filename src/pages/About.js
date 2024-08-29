// About.js
import React from 'react';
import './About.css';
import {
    FaGithub, FaLinkedin, FaEnvelope
} from 'react-icons/fa';

import resume from '../assets/prof_resume.pdf';

const About = () => {
  return (
    <div id="about">
    <div className="container about" >
      <div className="section">
    <h2 className="header">
      Hello there 👋🏻
        </h2>
        <div className="bio">
          <div className="row">
              My name is Jonathan Yip and I am a final year Software Engineering Student.
              I am passionate about Web development, DevOps and AI. 
              <div className="row-doing">
                <span className="">Currently I am:</span>
                <ul className="row-pad">
                  <li>
                    Learning Deep Learning using tenserflow
                  </li>
                  <li>
                    Looking for internship or part-time opportunities in software development. (please reach out)
                  </li>
                  <li>
                    working on a project that can store and quickly share files without lengthy authentication.
                </li>
                </ul>
              </div>
             <div class="inline-container">
            <p>Feel free to download my resume.</p>
            <a href={resume} download='resume' target='_blank' rel='noreferrer'>
           <button type="button" class="btn btn-dark btn-1">Download CV</button>

            </a>
        </div>

          </div>
          <div className="links">
            <h2>Socials</h2>
            <div className="d-flex align-items-start">
                            <a className="p-3"
                                href="https://github.com/jon65"
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
                                href="https://www.linkedin.com/in/developerjy/"
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
    </div>
  );
};

export default About;
