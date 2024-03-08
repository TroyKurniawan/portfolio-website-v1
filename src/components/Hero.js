import bg from '../assets/video-bg-test.mp4';
import './Hero.css'

export default function Hero() {
  return (
    <div className='bg'>
      <div className='hero-container'>

        <video src={bg} autoPlay loop muted playsInline/>

        <div className='text-container'>
            <p className='name'>TROY KURNIAWAN</p>
            <p className='desc'>Front-End Web Developer • Songwriter • DJ • Pokémon Master</p>
        </div>

      </div>
    </div>
  )
}