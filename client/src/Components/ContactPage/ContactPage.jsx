import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css'
import Navbar from './/../NavBar/Navbar.jsx'; 

// Should be completed by Nick

// This page should have the following:
// Customer care: Help with cancellations, refunds, and bookings
// Feedback of the app
// Contact information of the bus reservation system (dummy values)
// Contact form for the user to fill out
// Contact information we need from the user: Email, Phone number, Address

// Styling for this page should be on the ContactPage.css file

const ContactPage = (props) => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mess =  {fName, lName, email, phone, message}
    console.log(mess)
    setErrorMessage('Error not fully implemented yet');
    /*
    try {
      await axios.post('http://localhost:4000/contactRoutes/createRoute', {fName, lName, email, phone, message});
      navigate('/home');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'Error contacting support');
    }
    */
    
  };

  return (
    <div>
      <Navbar />
      <div className="contact-page-container">
        <div className="contact-page-container1">
          <div className="contact-page-message-container">
          <h1 className="contact-page-text">Contact Us</h1>
            <span className="contact-page-text01">
              <span>Looking to reach out to us?</span>
              <br></br>
              <span>
                Feel free to give us a call, send an email, or simply fill out the
                contact form.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <span className="contact-page-text12">
              <span className="contact-page-text13">
                Phone:               +234 123 456 7890
              </span>
              <br className="contact-page-text14"></br>
              <span className="contact-page-text15">
                Email:      contactUs@ticketride.com
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="contact-page-contact-form-container">
            {errorMessage && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="contact-page-name">
                <span className="contact-page-text10">
                  First Name___________________________
                </span>
                <span className="contact-page-text11">Last Name</span>
              </div>
              <div className="contact-page-name-container">
                <input
                  type="text"
                  placeholder="First Name"
                  required={true}
                  id="fNameIn"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                  className="contact-page-textinput input"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required={true}
                  id="lNameIn"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                  className="contact-page-textinput1 input"
                />
              </div>
              <div className="contact-page-email-container">
              <span className="contact-page-text27">Email Address</span>
                <input
                  type="text"
                  placeholder="Email Address"
                  required={true}
                  id="eMailIn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="contact-page-textinput2 input"
                />
              </div>
              <div className="contact-page-phone-container">
                <span className="contact-page-text13">Phone Number</span>
                <input
                  type="text"
                  placeholder="XXX-XXX-XXXX"
                  required= {true}
                  id="eMailIn"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="contact-page-textinput3 input"
                />
              </div>
              <span className="contact-page-text14">
                How can we assist you today?
              </span>
              <textarea
                placeholder="Questions, Comments, Concerns"
                required = {true}
                id="questionIn"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact-page-textarea textarea"
              ></textarea>
              <button type="submit" className="contact-page-submit-button button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage