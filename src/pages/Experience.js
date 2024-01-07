
import React from 'react';
import './Experience.css';
import silkron from '../assets/silkron.png';
const Experience = () => { 

    return (
        <div>
        <h2 class="section-header">
                    Experience
                </h2>
            <div className="experience">
                <div class="experience-content">
                <div class="experience-row">
                    <div className="col">
                        <h3>
                            Silkron Technologies
                        </h3>
                        <img src={silkron} alt="" />
                    </div>
                    <p>
                        Mobile Application Engineer Intern | 2022 Sept - 2022 Dec
                    </p>
                </div>
               <div class="experience-row">
                    <div className="col">
                        <h3>
                            Mahkota Medical Centre
                        </h3>
                        <img src={silkron} alt="" />
                    </div>
                    <p>
                        Mobile Application Engineer Intern | 2022 Sept - 2022 Dec
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;