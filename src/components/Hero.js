import troy from '../assets/troy-avatar.jpg';
import './Hero.css';

export default function Hero() {
  return (
    // <div>
      
      <div className='hero-container fade-in-bck'>

        <div>
          <img src={troy} className='avatar blue-shadow-box' alt='troy avatar'/>
          <h3 className='greeting'>Hello there!<br/> My name is</h3>
          <h1 className='name blue-shadow-text'>Troy</h1>
        </div>

          {/* <img src={arrow} className='arrow' alt='arrow'/> */}
          
      </div>


    // </div>
  )
}