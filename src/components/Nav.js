import Menu from './Menu.js';
import './Nav.css';

export default function Nav() {
    return (
        <header>
            
            <a href='#' className="logo">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</a>

            {/* Navbar (Desktop) */}
            <nav className="nav-links">
                <a href='#about' className='btn btn-light'>About</a> 
                <a href='#experience' className='btn btn-light'>Experience</a> 
                <a href='#projects' className='btn btn-light'>Projects</a> 
                <a href='#education' className='btn btn-light'>Education</a>
                <a href='#contact' className='btn btn-light'>Contact</a>
            </nav>

            {/* Navbar (Mobile) */}
            <div className='menu'>
                <Menu />
            </div>

        </header>
    );
}