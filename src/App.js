import React, {Component} from 'react'
import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Landing from './Landing/Landing';
import Studio from './Studio/Studio';
import Testimonials from './Testimonials/Testimonials';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidenav from './Sidenav/Sidenav';

class App extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
    message:''
  }
    
  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  phoneChangeHandler = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    event.currentTarget.reset();
    toast.success("Thank you! I'll be in touch soon.");
  }


  render() {
    return (
      <div className="App">
        <Sidenav />
        <Landing />
        <About />
        <Studio />
        <Gallery />
        <Testimonials />
        <Contact
         name={this.state.name}
         phone={this.state.phone}
         email={this.state.email}
         message={this.state.message}
         nameChanged={this.nameChangeHandler}
         phoneChanged={this.phoneChangeHandler}
         emailChanged={this.emailChangeHandler}
         messageChanged={this.messageChangeHandler}
         submit={this.submitHandler}
        />
         <ToastContainer 
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
    );
  }
}

export default App;
