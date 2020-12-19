import React from 'react';
import './Contact.css';

const Contact = (props) => {

  return (
        <div className='contact' id='contact'>
          <div className='form'>
            <form onSubmit={props.submit}>
              <label className='form-label'>
                FULL NAME <br/>
                <input className='input' type="text" name="name" placeholder='Enter your full name' onChange={props.nameChanged}/>
              </label><br/><br/>
              <label className='form-label'>
                PHONE <br/>
                <input className='input' type="text" name="phone" placeholder='Enter your phone number' onChange={props.phoneChanged} />
              </label><br/><br/>
              <label className='form-label'>
                EMAIL <br/>
                <input className='input' type="text" name="email" placeholder='Enter your email' onChange={props.emailChanged} />
              </label><br/><br/>
              <label className='form-label'>
                MESSAGE <br/>
                <input className='input-text' type="text" name="message" placeholder='Leave me a note' onChange={props.messageChanged} />
              </label> <br/><br/>
              <input className='submit' type="submit" value="Send Message" />
            </form>
            <p className='footer'>
              Made with &hearts; by <a target='_blank' rel="noopener noreferrer" href='https://www.cmproia.com'>CiaraMaria</a>
            </p>
          </div>
    </div>
  )
}

export default Contact;