import troy from '../assets/troy-avatar.jpg';
import arrow from '../assets/circle-arrow-down-solid.svg';
import './Hero.css';

export default function Hero() {
  return (
    // <div>
      
      <div className='hero-container fade-in-bck'>

        <div>
          <img src={troy} className='avatar blue-shadow-box' alt='troy avatar'/>
          <h3 className='greeting'>Hello there!<br/> My name is</h3>
          <h1 className='name blue-shadow-text'>TROY</h1>
        </div>

          {/* <img src={arrow} className='arrow' alt='arrow'/> */}
          
      </div>


    // </div>
  )
}