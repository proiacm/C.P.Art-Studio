import React, {Component} from 'react';
import './Sidenav.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll';

class Sidenav extends Component {

    state = {
      menuOpen: false
    }
  

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // closes on link click
  closeMenu () {
    this.setState({menuOpen: false})
  }


  render () {

    return (
      <div className='sidenav'>
        <Menu width={ '20%' } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="home" spy={true} smooth={true} onClick={() => this.closeMenu()}>Home</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="about" spy={true} smooth={true} onClick={() => this.closeMenu()}>About</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="studio" spy={true} smooth={true} onClick={() => this.closeMenu()}>The Studio</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="gallery" spy={true} smooth={true} onClick={() => this.closeMenu()}>Gallery</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="testimonials" spy={true} smooth={true} onClick={() => this.closeMenu()}>Testimonials</Link>
          <Link className='nav-li' style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true} onClick={() => this.closeMenu()}>Contact</Link>
        </Menu>    
      </div>
    );
  }
}

export default Sidenav;