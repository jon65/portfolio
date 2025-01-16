import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => { 
  const [formStatus, setFormStatus] = useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    // Pass the form element directly
    emailjs.sendForm(
      'service_4sjybl7',
      'template_ze9s9uk',
      e.target, // Pass the form element here
      '8HRy2yhXS3ijDqrUm'
    )
    .then(
      (result) => {
        alert('Message sent successfully...');
        console.log(result.text);
        setFormStatus('Send');
      },
      (error) => {
        console.log(error.text);
        setFormStatus('Send');
      }
    );
  }

  return (
    <div className="container" id="contact">
      <h2 className="section-header">Contact Me</h2>
      <div className="contact-container">
        <div className="container mt-5 contact">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" type="text" id="name" name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-control" type="email" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-control" id="message" name="message" required />
            </div>
            <button className="btn btn-success submit-button" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
