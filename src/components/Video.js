import vid1 from '../assets/spongebob.mp4';
import './Video.css';

export default function Video(){
    return(
        <>
            <video className='video-bg' src={vid1} loop autoPlay muted />
        </>  
    );
}