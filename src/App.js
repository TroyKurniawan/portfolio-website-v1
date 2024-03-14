import {masterData} from './components/masterData.js';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
// import About from './components/About.js';
import './App.css';

export default function App() {
  return (
    <>
      <head>
        {/* Montserrat Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Troy Kurniawan</title>

        <script type="text/javascript" src="./components/masterData.js"></script>
      </head>

      <div className="app">

        {/* Navbar */}
        <Nav />

        {/* Hero Section (Avatar and Greeting) */}
        <Hero />

        {/* Experience */}
        <div className='section' id='experience'>
          <h1 >EXPERIENCE</h1>
          <Section
            data = {masterData.experience.western_digital}
          />
        </div>

        <hr />

        {/* Projects */}
        <div className='section' id='projects'>
          <h1 >PROJECTS</h1>
          <Section
            data = {masterData.projects.portfolio}
          />
        </div>

        <hr />

        {/* Education */}
        <div className='section' id='education'>
          <h1 >EDUCATION</h1>
          <Section
            data = {masterData.education.sjsu}
          />
        </div>

        <Footer />
        
      </div>
    </>
  );
}

