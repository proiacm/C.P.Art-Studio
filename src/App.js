import React, {Component} from 'react'
import About from './About/About';
import './App.css';
import Gallery from './Gallery/Gallery';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';
import Studio from './Studio/Studio';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <About />
        <Studio />
        <Gallery />
      </div>
    );
  }
}

export default App;
