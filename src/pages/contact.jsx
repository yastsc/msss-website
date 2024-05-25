import Axios from 'axios';
import React, { useState, useRef } from 'react';
import "./contact.css";

const sendEmailURL = 'https://us-central1-mss-singapore.cloudfunctions.net/sendEmails';

function Contact() {
  const [formData, setFormData] = useState({
        email: '',
        message: '',
        name: '',
      });
      const [success, setSuccess] = useState(false);
      const [failure, setFailure] = useState(false);
      const [checkboxChecked, setCheckboxChecked] = useState(false);
    
      const { email, message, name } = formData;
    
      const timerRef = useRef(null);
    
      const handleState = ({ target: { id, value } }) => {
        setFormData({ ...formData, [id]: value });
        setSuccess(false); // Reset success state
        setFailure(false); // Reset failure state
        resetTimer();
      };
    
      const handleCheckboxChange = (e) => {
        setCheckboxChecked(e.target.checked);
        setSuccess(false);
        setFailure(false);
        resetTimer();
      };
    
      const sendEmail = async (e) => {
        e.preventDefault();      
        if (name === '' || email === '' || message === '' || !checkboxChecked) {
          setFailure(true);
          // setState({
          //   ...state,
          //   success: false,
          //   failure: true,
          // });
          startTimer();
          
        } else {
          Axios.get(sendEmailURL, {
            params: {
              email,
              message,
              name
            },
          });
          setSuccess(true);
          setFormData({
            email: '',
            message: '',
            name: '',
          });
          setCheckboxChecked(false);
          startTimer();
        }
    
        // setTimeout(() => {
        //   setState({
        //     success: false,
        //     failure: false,
        //   });
        // }, 20000);
      };
    
      const startTimer = () => {
        timerRef.current = setTimeout(() => {
          setSuccess(false);
          setFailure(false);
        }, 30000); // 20 seconds
      };
    
      const resetTimer = () => {
        clearTimeout(timerRef.current);
      };

  return (
    <div>
    <div className="title" style={{ marginTop: "2%", marginBottom: "2%"}}>Get in touch with us!</div>
    <div className="container" >
      <div className="contact-info" >
      <div className="contact-stuff" > Multiple Sclerosis Society (Singapore) </div>
        <div className="email1" >Email: hello@msss.sg</div>
        <div className="email1" >Phone: +65 8887 1040</div>
      </div>
      <div className="form-container" >
        <div className="form-title" > Send us a message! </div>
        <form onSubmit={sendEmail} className="contact-form"
        style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
          <label htmlFor="email" style={{
                  marginTop: "10px",
                  padding: "1rem",
                  fontWeight: "500",
                  fontSize: "20px"
        }}>Email</label>
          <input id="email" onChange={handleState} value={email} />

          <label htmlFor="name" style={{
                  marginTop: "10px",
                  padding: "1rem",
                  fontWeight: "500",
                  fontSize: "20px"
        }}>Name</label>
          <input id="name" onChange={handleState} value={name} />

          <label htmlFor="message" style={{
                  marginTop: "10px",
                  padding: "1rem",
                  fontWeight: "500",
                  fontSize: "20px"
        }}>Message</label>
          <textarea rows="5" id="message" onChange={handleState} value={message} />

          <div className="blanline2">
            <input type="checkbox" id="myCheck" onChange={handleCheckboxChange} checked={checkboxChecked} />
            <label htmlFor="myCheck" className="low_login">
              By submitting this form, you agree that MSSS may collect, use, and disclose your personal data, as provided in this form, in accordance with the PDPA.
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

          <div className="message">
            {success && (
              <div className="success" style={{
                                color: 'green',
                                fontSize: '20px',
                                fontWeight: 'bolder',
                              }}>
                Message Sent Successfully!
              </div>
            )}
            {failure && (
              <div className="failure" style={{
                                color: 'red',
                                fontSize: '20px',
                                fontWeight: 'bolder',
                              }}>
                Try Again! Fields Cannot be Empty! Checkbox must be filled.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
