import React, {Component} from 'react'
import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';
import Studio from './Studio/Studio';
import Testimonials from './Testimonials/Testimonials';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <About />
        <Studio />
        <Gallery />
        <Testimonials />
        <Contact />
      </div>
    );
  }
}

export default App;
