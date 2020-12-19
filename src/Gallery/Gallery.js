import React from 'react';
import './Gallery.css';
import gallery1 from '../Images/gallery1.png';
import gallery2 from '../Images/gallery2.png';
import gallery3 from '../Images/gallery3.png';
import gallery4 from '../Images/gallery4.png';
import gallery5 from '../Images/gallery5.png';
import gallery6 from '../Images/gallery6.png';
import gallery7 from '../Images/gallery7.png';
import gallery8 from '../Images/gallery8.png';
import gallery9 from '../Images/gallery9.png';
import gallery10 from '../Images/gallery10.png';
import gallery11 from '../Images/gallery11.png';
import gallery12 from '../Images/gallery12.png';

const Gallery = () => {

  return(
    <div className="row" id='gallery'> 
      <div className="column">
        <img className='gallery-img' src={gallery1} />
        <img className='gallery-img' src={gallery2} />
        <img className='gallery-img' src={gallery3} />
       
      </div>
      <div className="column">
        <img className='gallery-img' src={gallery5} />
        <img className='gallery-img' src={gallery6} />
        <img className='gallery-img' src={gallery1} />
        <img className='gallery-img' src={gallery8} />
        <img className='gallery-img' src={gallery4} />
      </div>  
      <div className="column">
        <img className='gallery-img' src={gallery9} />
        <img className='gallery-img' src={gallery10} />
        <img className='gallery-img' src={gallery11} />
        <img className='gallery-img' src={gallery12} />
        <img className='gallery-img' src={gallery9} />
      </div>
      <div className="column">
        <img className='gallery-img' src={gallery2} />
        <img className='gallery-img' src={gallery5} />
        <img className='gallery-img' src={gallery7} />
      </div>
  </div>
  )    
}

export default Gallery;