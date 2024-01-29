
import React from 'react';
import './Experience.css';
import silkron from '../assets/silkron.png';
import mmc from '../assets/mmc.jpeg';
const Experience = () => { 

    return (
        <div id="experience">
            <div className="container">
            <h2 class="section-header">
                    EXPERIENCE
                </h2>
                <div class="experience-card">
                    <div class="col1"> 
                        <img src={silkron} alt="" width="100px"/>
                    </div>
                    <div class="col2">
                        <p class="date">Sept 2022 - Dec 2022</p>
                                            <div class="title">Software Engineer Intern | Silkron</div>

                        <div class="description">
                            <ul>
                            <li>
Was responsible for transitioning a mobile app for interacting with automated retail machines to Flutter
3.0, focusing on enhancing performance and reliability. This involved integrating new libraries, reducing
software bloat, and improving code modularity. My efforts led to a notably improved user experience,
while ensuring scalability and simplifying future maintenance.
                            </li>
                            <li>
Implemented API integration including an employee points-based payment system on a mobile app for
client vending machines, designed specifically for employee use.
                            </li>
                            <li>
                             Resolved software bugs in various mobile applications for the company's clients.

                            </li>
                            <li>
                            Implemented other client requested features such as UI changes, adding new language translation and
                            data analytics.
                            </li>
                            <li>
                                Perform unit tests on new features
                            </li>
                            </ul>
                    </div>
                    </div>
                </div>
                <div class="experience-card">
                    <div class="col1"> 
                        <img src={mmc} alt="" width="200px"/>
                    </div>
                    <div class="col2">
                        <p class="date">Jan 2022 - Feb 2022</p>
                                            <div class="title">IT Support Intern | Mahkota Medical Centre</div>

                        <div class="description">
                            <ul>
                                <li>

                                 Conducted SQL-driven data reporting on hospital operations, delivering key business insights.
                                </li>
                            <li>
                                Developed an Excel plugin script to automate recurring queries for the IT department, enhancing
                                efficiency and productivity.
                            </li>
                            <li>
                                Identified data irregularities in organisations' data warehouse.
                            </li>
                            <li>
                                Performed usability testing for new software integration
                            </li>
                            </ul>

                    </div>
                    </div>
                </div>
            </div>                
        </div>
    );
}

export default Experience;