import React from 'react';
import './Landing.scss';
// import logo from '../Images/cplogo.png';
import logo from '../Videos/animatedlogo.mp4';

const Landing = () => {

  return (
        <div className='landing' id='home'>
          {/* <img className='logo' src={logo} alt='logo' /> */}
          <video className='logo' autoPlay muted >
          <source src={logo} type="video/mp4"/>
          </video>
        </div>
  )
}

export default Landing;
