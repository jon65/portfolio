import React, { useState} from 'react';

import Skills from '../components/Skills';
import TopNavbar from '../components/TopNavbar';
import './Skills.css';

const SkillsPage = () => { 


    return (
        <div>
                  <TopNavbar />

           <section className="skills-section">
        <div className="skills-cards">
        <Skills />
            </div>
          
      </section>
        </div>
    );
}

export default SkillsPage;