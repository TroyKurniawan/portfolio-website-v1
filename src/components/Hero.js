import bg from '../assets/cloud-bg.jpg';
import troy from '../assets/troy-avatar.jpg';
import './Hero.css'

export default function Hero() {
  return (
    <div className='bg'>
      <div className='hero-container'>
        <img src={bg} className='clouds'/>


        {/* <video src={bg} autoPlay loop muted playsInline/> */}


          {/* <img src={troy} className='troy'/> */}
          <div className='text-container'>
              <p className='greeting'>Hello there! My name is</p>
              <p className='name'>TROY</p>
          </div>

        {/* <p className='scroll'>SCROLL FOR MORE</p> */}

      </div>

    </div>
  )
}