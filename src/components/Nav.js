import Menu from './Menu.js'
import './Nav.css';

export default function Nav() {
    return (
        <header>
            
            <a href='#' className="logo">Logo</a>

            {/* Navbar (Desktop) */}
            <nav className="nav-links">
                <a href='#' className='btn btn-light'>About</a> 
                <a href='#' className='btn btn-light'>Experience</a> 
                <a href='#' className='btn btn-light'>Projects</a> 
                <a href='#' className='btn btn-light'>Education</a>
                <a href='#' className='btn btn-light'>Contact</a>
            </nav>

            {/* Navbar (Mobile) */}
            <div className='menu'>
                <Menu />
            </div>

        </header>
    );
}