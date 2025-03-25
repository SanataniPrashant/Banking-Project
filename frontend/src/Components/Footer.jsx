import React from 'react';
import '../CSS/Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="top-section">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <ul>
            <li>Phone: 1-800-BANK-123</li>
            <li>Email: [info@bank.com](mailto:info@bank.com)</li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="middle-section">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
        <div className="useful-resources">
          <h4>Useful Resources</h4>
          <ul>
            <li><a href="#">Online Banking Guide</a></li>
            <li><a href="#">Mobile Banking App</a></li>
            <li><a href="#">Security Tips</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-section">
        <div className="copyright-info">
          <p>&copy; 2023 Bank Name. All rights reserved.</p>
        </div>
        <div className="regulatory-compliance">
          <p>License number: 123456. Regulated by the [Regulatory Body].</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;