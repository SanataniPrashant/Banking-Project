import React from 'react';
import "../CSS/Contact.css"
function Contact() {
  return (
    <div className="contact-page">
      <h1 className="title">Get in Touch</h1>
      <form className="contact-form">
        <div className="form-group">
          <label className="label" htmlFor="name">Name:</label>
          <input type="text" id="name" className="input" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">Email:</label>
          <input type="email" id="email" className="input" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="message">Message:</label>
          <textarea id="message" className="textarea" />
        </div>
        <button className="submit-btn">Send Message</button>
      </form>
      <div className="contact-info">
        <h2 className="title">Contact Information</h2>
        <p className="info">Phone: 123-456-7890</p>
        <p className="info">Email: [info@example.com](mailto:info@example.com)</p>
        <p className="info">Address: 123 Main St, Anytown, USA</p>
      </div>
    </div>
  );
}

export default Contact;