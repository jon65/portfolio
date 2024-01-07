import './App.css';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing />
      <About />
      <Experience />
      <Education/>
    </div>
  );
}

export default App;
