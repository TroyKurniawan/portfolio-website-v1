import Hero from './components/Hero.js';
import About from './components/About.js';
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
      </head>

      <div className="App">
        <Hero />
        {/* <About /> */}
      </div>
    </>
  );
}

// Functions -------------------------

