import {masterData} from './components/masterData.js';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
import ImageGallery from './components/ImageGallery.js';
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

        <span className='anchor' id='about'></span>
        <div className='section'>
          <h1>About</h1>
          <Section
            data = {masterData.about.me}
          />
          <ImageGallery />
        </div>

        <hr />

        {/* Experience */}
        <span className='anchor' id='experience'></span>
        <div className='section'>
          <h1>Experience</h1>
          <Section
            data = {masterData.experience.western_digital}
          />
        </div>

        <hr />

        {/* Projects */}
        <span className='anchor' id='projects'></span>
        <div className='section'>
          <h1>Projects</h1>
          <Section
            data = {masterData.projects.portfolio}
          />
        </div>

        <hr />

        {/* Education */}
        <span className='anchor' id='education'></span>
        <div className='section'>
          <h1>Education</h1>
          <Section
            data = {masterData.education.sjsu}
          />
        </div>

        {/* <div className='arrow'>
          <img src={arrow} />
          <h3>Back to top</h3>
        </div> */}

        <Footer />
        
      </div>
    </>
  );
}

