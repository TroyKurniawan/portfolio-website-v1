import linkedin from '../assets/linkedin-logo.png';
import github from '../assets/github-mark-white.svg';
import email from '../assets/email.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='footer-contents'>

                <div className='links'>
                    <a href='https://www.linkedin.com/in/troy-kurniawan/' target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} />
                    </a>
                    <a href='https://github.com/TroyKurniawan' target="_blank" rel="noopener noreferrer">
                        <img src={github} />
                    </a>
                    <a href='mailto:troykurniawan97@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img src={email} />
                    </a>
                </div>

                <div className='footer-message'>Built with React, Bootstrap, and love 💞 <br/>
                Deployed with [ADD SERVICE HERE] 🌐<br/><br/>
                © 2024 Troy Kurniawan</div>
                
            </div>
        </footer>
    );
}