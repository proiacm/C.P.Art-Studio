import React from 'react';
import './Testimonials.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {

  return (
        <div className='testimonials' id='testimonials'>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            <div>
              <div className="myCarousel">
                <h3>First Last</h3>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div>
              <div className="myCarousel">
                <h3>First Last</h3>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div>
              <div className="myCarousel">
                <h3>First Last</h3>
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
  )
}

export default Testimonials;