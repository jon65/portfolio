import React, { useEffect, useState } from 'react';
import './Education.css';
import monashLogo from '../assets/monashLogo.jpeg';
const Education = () => { 

    return (
        <div className="container" id="education">
            <h2 className="section-header">
                EDUCATION
            </h2>
            <div class="education-card">
                <img src={monashLogo} alt="" width="300px"  className="col1" />
                <div className="c2">
                    <h3>Monash University</h3>
                    <p>Bachalors of Engineering (Honours) Software | Grad 2024</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Education;