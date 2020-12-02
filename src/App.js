import React, {Component} from 'react'
import './App.css';
import Landing from './Landing/Landing';
import Nav from './Nav/Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
      </div>
    );
  }
}

export default App;
