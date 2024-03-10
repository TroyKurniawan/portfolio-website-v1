import troy from '../assets/troy-avatar.jpg';
import './Hero.css'

export default function Hero() {
  return (
    <div>

      {/* <img src={bg} alt=''/> */}
      
      <div className='hero-container'>

        <div>
          <img src={troy} className='avatar' alt='troy avatar'/>
          <p className='greeting'>Hello there!<br/> My name is</p>
          <p className='name'>TROY</p>
        </div>

      </div>

    </div>
  )
}