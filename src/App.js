import Hero from './components/Hero.js';
import Nav from './components/Nav.js'
import menu from './assets/menu-button.svg'
// import About from './components/About.js';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Button } from 'react-bootstrap';

// Main -----------------------------

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
      </head>

      <Nav />
      <div className='bg' />

      <div className="App">
        <Hero />
        {/* <About /> */}
      </div>
    </>
  );
}

// Functions -------------------------

