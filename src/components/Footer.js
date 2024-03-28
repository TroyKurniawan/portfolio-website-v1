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
                        <img alt='' src={linkedin} />
                    </a>
                    <a href='https://github.com/TroyKurniawan' target="_blank" rel="noopener noreferrer">
                        <img alt='' src={github} />
                    </a>
                    <a href='mailto:troykurniawan97@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img alt='' src={email} />
                    </a>
                </div>

                <div className='footer-message'>Coded in <b>Visual Studio Code</b>. <br/>
                Built with <b>React, Bootstrap, and love</b>. <br/>
                Deployed with <b>[ADD SERVICE HERE]</b>. <br/><br/>
                © 2024 Troy Kurniawan</div>
                
            </div>
        </footer>
    );
}