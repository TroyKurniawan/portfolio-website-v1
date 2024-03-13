import menuBtn from '../assets/menu-button.svg'
import './Menu.css';

export default function Nav() {
    return (
        <>
            {/* Button */}
            <div className='menu-button' onClick={openMenu}>
                <img src={menuBtn}></img>
            </div>

            {/* Menu */}
            <div className='dd-menu'>
                <li><a href='#about' className='btn' onClick={buttonCloseMenu}>About</a></li>
                <li><a href='#experience' className='btn' onClick={buttonCloseMenu}>Experience</a></li>
                <li><a href='#projects' className='btn' onClick={buttonCloseMenu}>Projects</a></li>
                <li><a href='#education' className='btn' onClick={buttonCloseMenu}>Education</a></li>
                <li><a href='#contact' className='btn' onClick={buttonCloseMenu}>Contact</a></li>
            </div>
        </>
    );
}

// Function to open/close menu
function openMenu() {
    console.log("openMenu");
    const ddMenu = document.querySelector('.dd-menu');
    ddMenu.classList.toggle('open');
}

// Function to close menu when any button is pressed
function buttonCloseMenu() {
    console.log("buttonCloseMenu");
    const ddMenu = document.querySelector('.dd-menu');
    ddMenu.classList.toggle('open');
}