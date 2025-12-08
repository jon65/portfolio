import React, { useEffect, useState } from 'react';
import './skills.css';
import { skillsData } from '../data/portfolioData';

const Skills = () => { 

    return (
        <div className="container" id="skills">
              <h2>Technologies I have used....</h2>

            <div className="skillsContainer">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill--box">
                  <img className="" src={skill.icon} alt={skill.name} />
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
        </div>
    );
}

export default Skills;