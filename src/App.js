import React from 'react';
import Landing from './pages/Landing';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import SkillsPage from './pages/Skills';
import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div>

        {/* <ThemeProvider> */}
      <Router>
        <Routes>
      
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    {/* </ThemeProvider> */}
      <Footer />
    </div>
  );
}

export default App;
