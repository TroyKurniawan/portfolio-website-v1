import '../styles/ImageGallery.css';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';

export default function ImageGallery() {
  return (
    <>
        <div className='gallery'>
            <div className='img-container'>
                <img className='blue-shadow-box' alt='img1' src={about1}/>
            </div>
            <div className='img-container'>
                <img className='blue-shadow-box' alt='img1' src={about2}/>
            </div>
            <div className='img-container'>
                <img className='blue-shadow-box' alt='img1' src={about3}/>
            </div>
        </div>
    </>
  )
}