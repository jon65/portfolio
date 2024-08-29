import './App.css';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
      {/* <div className="container-app"> */}
      <About />
      {/* <Education/>
      <Skills/>
      <Experience />
      <Project />
      <Contact />
      </div> */}
    {/* <footer className="footer-container">
        <p className="footer">Fueled by coffee and big dreams ;D</p>
        <p className="footer">
          &copy; Jonathan Yip 2024
        </p>
    </footer> */}
    </div>
  );
}

export default App;
