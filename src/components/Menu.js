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
                <li><a href='#' className='btn'>About</a></li>
                <li><a href='#' className='btn'>Experience</a></li>
                <li><a href='#' className='btn'>Projects</a></li>
                <li><a href='#' className='btn'>Education</a></li>
                <li><a href='#' className='btn'>Contact</a></li>
            </div>
        </>
    );
}

// Function to open menu
function openMenu() {
    console.log("Menu Click!");
    const ddMenu = document.querySelector('.dd-menu');
    ddMenu.classList.toggle('open');
}