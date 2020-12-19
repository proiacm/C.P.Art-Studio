import React from 'react';
import './Studio.css';
import studio from '../Images/studiodemo.png'

const Studio = () => {

  return (
        <div className='studio' id='studio'>
          <img className='studio-img' src={studio} alt='studio' />
        </div>
  )
}

export default Studio;