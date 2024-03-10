import troy from '../assets/troy-avatar.jpg';
import './Hero.css'

export default function Hero() {
  return (
    <div>

      {/* <img src={bg} alt=''/> */}
      
      <div className='hero-container fade-in-bck'>

        <div>
          <img src={troy} className='avatar blue-shadow-box' alt='troy avatar'/>
          <p className='greeting'>Hello there!<br/> My name is</p>
          <p className='name blue-shadow-text'>TROY</p>
        </div>

      </div>

    </div>
  )
}