import React from 'react';
import { motion } from 'framer-motion';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
  
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
