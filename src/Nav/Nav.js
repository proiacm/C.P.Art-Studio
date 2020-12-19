import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';

const Nav = () => {

  return (
      <div className='nav'>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}>About</Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="studio" spy={true} smooth={true}>The Studio</Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="gallery" spy={true} smooth={true}>Gallery</Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="testimonials" spy={true} smooth={true}>Testimonials</Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true}>Contact</Link></p>
      </div>
  )
}

export default Nav;