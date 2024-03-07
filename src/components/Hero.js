import bg from '../assets/video-bg-test.mp4';
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
        <video src={bg} autoPlay loop muted />
        <h1>TROY</h1>
    </div>
  )
}