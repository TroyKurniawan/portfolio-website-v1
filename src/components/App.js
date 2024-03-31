import {masterData} from './masterData.js';
import Hero from './Hero.js';
import Nav from './Nav.js';
import Section from './Section.js';
import Footer from './Footer.js';
import ImageGallery from './ImageGallery.js';
import '../styles/App.css';
import download from '../assets/download.svg';

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

        <link rel="apple-touch-icon" sizes="180x180" href="./../../public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./../../public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./../../public/favicon-16x16.png" />
        <link rel="manifest" href="./../../public/site.webmanifest" />
        <link rel="mask-icon" href="./../../public/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="./../../public/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="./../../public/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      
      <div className="app">

        {/* Navbar */}
        <Nav />

        {/* Hero Section (Avatar and Greeting) */}
        <Hero />

        {/* About */}
        <span className='anchor' id='about'></span>
        <div className='section'>
          <h1>About</h1>
          <Section
            data = {masterData.about.me}
          />
          {/* <a className='btn btn-dark download' href='https://drive.google.com/drive/folders/1rbsAB6Sxl3Pkkktw_H8MdjHZo2LEXFZt?usp=sharing' target="_blank" rel="noopener noreferrer">
              <b>Résumé</b>
              <img className='dl-icon' alt='' src={download} />
          </a> */}
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
          <Section
            data = {masterData.projects.firefighter_finder}
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
          <Section
            data = {masterData.education.google_certificate}
          />
        </div>

        <Footer />
        
      </div>
    </>
  );
}

