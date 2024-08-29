import React, { useEffect, useState } from 'react';
// import './skills.css';
import aws from '../assets/skills/aws.svg';
import docker from '../assets/skills/docker.svg';
import typescript from '../assets/skills/typescript.svg';
import javascript from '../assets/skills/javascript.svg';
import java from '../assets/skills/java.svg';
import python from '../assets/skills/python.svg';
// import kubernetes from '../assets/skills/kubernetes.svg';
import git from '../assets/skills/git.svg';
import mysql from '../assets/skills/mysql.svg';
import mongodb from '../assets/skills/mongoDB.svg';
// import kafka from '../assets/skills/spark.svg';
import css from '../assets/skills/css.svg';
import flutter from '../assets/skills/flutter.svg';
import nginx from '../assets/skills/nginx.svg';
import opencv from '../assets/skills/opencv.svg';
import react from '../assets/skills/react.svg';
import tensorflow from '../assets/skills/tensorflow.svg';
import materialui from '../assets/skills/materialui.svg';
import c from '../assets/skills/c.svg';
import tailwind from '../assets/skills/tailwind.svg';
import spark from '../assets/skills/spark.svg';
import dart from '../assets/skills/dart.svg';
import kubernetes from '../assets/skills/kubernetes.png';
import './skills.css';
const Skills = () => { 

    return (
        <div className="container" id="skills">
            <h2 className="section-header">
                SKILLS
            </h2>
            <div className="skillsContainer">
            <div className="skill--box">
                    <img className="" src={aws} alt="" />
                     <h3>
                                   AWS
                                </h3>
                </div>
                    <div className="skill--box">
                    <img className="" src={docker} alt="" />
                    <h3>
                        Docker
                    </h3>
                </div>
                     <div className="skill--box">
                    <img className="" src={kubernetes} alt="" />
                    <h3>
                        Kubernetes
                    </h3>
                </div>
                    <div className="skill--box">
                    <img className="" src={typescript} alt="" />
                    <h3>
                        Typescript
                    </h3>
                </div>
                <div className="skill--box">
                    <img className="" src={git} alt="" />
                    <h3>Git</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={flutter} alt="" />
                    <h3>Flutter</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={react} alt="" />
                    <h3>ReactJS</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={css} alt="" />
                    <h3>CSS</h3>
                </div>
                 <div className="skill--box">
                    <img className="" src={materialui} alt="" />
                    <h3>MaterialUI</h3>
                </div>
                   <div className="skill--box">
                    <img className="" src={tailwind} alt="" />
                    <h3>Tailwind</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={nginx} alt="" />
                    <h3>Nginx</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={mysql} alt="" />
                    <h3>mySQL</h3>
                </div>
                  <div className="skill--box">
                    <img className="" src={mongodb} alt="" />
                    <h3>MongoDB</h3>
                </div>
                 <div className="skill--box">
                    <img className="" src={c} alt="" />
                    <h3>
                        C/C++
                    </h3>
                </div>
                    <div className="skill--box">
                    <img className="" src={javascript} alt="" />
                    <h3>Javascript</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={java} alt="" />
                    <h3>Java</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={python} alt="" />
                    <h3>
                        Python
                    </h3>
                </div>
                <div className="skill--box">
                    <img className="" src={tensorflow} alt="" />
                    <h3>Tenserflow</h3>
                </div>
                  <div className="skill--box">
                    <img className="" src={spark} alt="" />
                    <h3>Spark</h3>
                </div>
                <div className="skill--box">
                    <img className="" src={opencv} alt="" />
                    <h3>OpenCV</h3>
                </div>
                 <div className="skill--box">
                    <img className="" src={dart} alt="" />
                    <h3>Dart</h3>
                </div>
            </div>
        </div>
    );
}

export default Skills;