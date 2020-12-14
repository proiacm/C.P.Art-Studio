import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';

const Nav = () => {

  return (
      <div className='nav'>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}><u>About</u></Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="studio" spy={true} smooth={true}><u>The Studio</u></Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="gallery" spy={true} smooth={true}><u>Gallery</u></Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="testimonials" spy={true} smooth={true}><u>Testimonials</u></Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true}><u>Contact</u></Link></p>
      </div>
  )
}

export default Nav;