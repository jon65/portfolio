// Centralized data file for portfolio website
// Edit this file to update website content

// Import project images
import ninemansmorris from '../assets/ninemansmorris.png';
import qkshare from '../assets/qkshare.png';
import balance from '../assets/balance-logo.png';
import campside from '../assets/campsideReview.png';

// Import skill icons
import aws from '../assets/skills/aws.svg';
import docker from '../assets/skills/docker.svg';
import typescript from '../assets/skills/typescript.svg';
import javascript from '../assets/skills/javascript.svg';
import java from '../assets/skills/java.svg';
import python from '../assets/skills/python.svg';
import git from '../assets/skills/git.svg';
import mysql from '../assets/skills/mysql.svg';
import mongodb from '../assets/skills/mongoDB.svg';
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

// Personal Information
export const personalInfo = {
  name: "Jonathan Yip",
  email: "xinquanyip@gmail.com",
  socialLinks: {
    github: "https://github.com/jon65",
    linkedin: "https://www.linkedin.com/in/jon65",
    email: "xinquanyip@gmail.com"
  }
};

// Landing Page Data
export const landingData = {
  greeting: "Hi!",
  name: "Jonathan",
  typewriterTexts: [
    "Aspiring Software Engineer",
    "Rock Climbing Enthusiast",
    "Cooks sometimes",
    "always hungry"
  ],
  typewriterConfig: {
    typingDelay: 70,
    delDelay: 20,
    wordDelay: 1500
  }
};

// About Page Data
export const aboutData = {
  aboutText: {
    greeting: "Hello there 👋🏻",
    introduction: "I'm Jonathan Yip, welcome to my website.",
    description: "Enjoy learning new technologies and exploring opportunities in web & mobile development, DevOps and security."
  },
  experiences: [
    {
      title: 'Software Engineer',
      company: 'TSH Group',
      location: 'Singapore · Remote',
      type: 'Full-time',
      duration: 'Jan 2025 - Jun 2025',
      details: [
        "Designed and implemented internal automation tools with GUIs using Node, HTML/CSS, and RPA",
        "Streamlined data entry and administrative tasks, achieving over 30 hours of monthly time savings",
        "Led stakeholder meetings for requirement gathering, testing, and feedback to ensure project success"
      ]
    },
    {
      title: 'Automation Software Engineer',
      company: 'Monash Automation',
      location: 'Clayton, VIC',
      type: 'Student Team',
      duration: 'Jul 2023 - Jul 2024',
      details: [
        "Identified inefficiencies in research workflows and designed software solutions to streamline lab operations and automate repetitive processes",
        "Built software systems to schedule and control experiments on robotic platforms, reducing manual workload and improving research throughput",
        "Integrated reliable data pipelines between hardware and cloud databases, ensuring accurate real-time tracking of experiments",
        "Improved system performance and scalability, enabling multiple concurrent experiments and supporting growing research demands",
        "Developed modular, maintainable code to simplify future feature additions and ongoing system improvements"
      ]
    },
    {
      title: 'Mobile Application Intern',
      company: 'Silkron',
      location: 'Penang, Malaysia',
      type: 'Internship',
      duration: 'Sep 2022 - Jan 2023',
      details: [
        "Led the full migration of Silkron's mobile apps to Flutter 3.0, boosting performance, reliability, and scalability",
        "Reduced code bloat, improved modularity, and delivered a noticeably smoother user experience",
        "Developed major API integrations, including an employee points-based payment system for workplace vending machines",
        "Streamlined transactions and improved client operational efficiency through custom payment solutions",
        "Resolved high-impact bugs and improved stability across multiple client apps",
        "Delivered client-driven enhancements, including UI improvements, multilingual support, and custom features that improved usability and accessibility"
      ]
    },
    {
      title: 'Mahkota Medical Centre',
      company: 'Company Name here',
      location: 'Bengaluru',
      type: 'Internship',
      duration: 'Jan 2021 - Mar 2021',
      details: [
        "Delivered SQL-based operational reports that gave management clearer insights into hospital performance and helped guide decision-making",
        "Built an automated Excel plugin that eliminated repetitive manual queries for the IT team",
        "Significantly improved efficiency and freed up time for higher-value tasks"
      ]
    }
  ],
  education: [
    {
      institution: 'Monash University',
      degree: 'Bachalor of Engineering (Honours) Software',
      duration: '2020-2024'
    }
  ]
};

// Projects Data
export const projectsData = [
  {
    repoUrl: "https://github.com/jon65/Nine-Mans-Morris",
    title: "Nine Mans Morris",
    description: "Implementation of Nine Mans Morris using JavaFX framework",
    image: ninemansmorris
  },
  {
    repoUrl: "https://github.com/Monash-FIT3170/BaLance-Team-Forming-Dashboard",
    title: "Balance Team Formation",
    description: "Team formation tool built for teaching staff that groups students based on various metrics",
    image: balance
  },
  {
    repoUrl: "https://github.com/jon65?tab=repositories",
    title: "Campside Review",
    description: "Full stack Javascript application that allows users to review and comment campsites.",
    image: campside
  },
  {
    repoUrl: "https://github.com/jon65/quickShare",
    title: "QuickShare",
    description: "Uploads and download files without authentication using a one-time generated code",
    image: qkshare
  }
];

// Skills Data
export const skillsData = [
  { name: 'AWS', icon: aws },
  { name: 'Docker', icon: docker },
  { name: 'Kubernetes', icon: kubernetes },
  { name: 'Typescript', icon: typescript },
  { name: 'Git', icon: git },
  { name: 'Flutter', icon: flutter },
  { name: 'ReactJS', icon: react },
  { name: 'CSS', icon: css },
  { name: 'MaterialUI', icon: materialui },
  { name: 'Tailwind', icon: tailwind },
  { name: 'Nginx', icon: nginx },
  { name: 'mySQL', icon: mysql },
  { name: 'MongoDB', icon: mongodb },
  { name: 'C/C++', icon: c },
  { name: 'Javascript', icon: javascript },
  { name: 'Java', icon: java },
  { name: 'Python', icon: python },
  { name: 'Tenserflow', icon: tensorflow },
  { name: 'Spark', icon: spark },
  { name: 'OpenCV', icon: opencv },
  { name: 'Dart', icon: dart }
];

// Contact Page Data
export const contactData = {
  emailjs: {
    serviceId: 'service_4sjybl7',
    templateId: 'template_ze9s9uk',
    publicKey: '8HRy2yhXS3ijDqrUm'
  },
  formLabels: {
    name: 'Name',
    email: 'Email',
    message: 'Message'
  }
};

