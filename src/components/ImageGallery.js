import './ImageGallery.css';

export default function ImageGallery() {
  return (
    <>
        <div className='gallery'>
            <a className='img-container'>
                <img className='blue-shadow-box' alt='img1' src='https://images.unsplash.com/photo-1624633078306-014a4c938ef7'/>
            </a>
            <a className='img-container'>
                <img className='blue-shadow-box' alt='img1' src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745'/>
            </a>
            <a className='img-container'>
                <img className='blue-shadow-box' alt='img1' src='https://images.unsplash.com/photo-1526979118433-63c7344f06f1'/>
            </a>
        </div>
    </>
  )
}