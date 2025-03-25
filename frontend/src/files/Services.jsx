import React from 'react';
import "../CSS/Services.css"
function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-money-check-alt"></i>
          <h2>Account Management</h2>
          <p>Manage your accounts, track your transactions, and stay on top of your finances.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-credit-card"></i>
          <h2>Card Services</h2>
          <p>Apply for a credit or debit card, manage your card settings, and track your spending.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-exchange-alt"></i>
          <h2>Transfer Services</h2>
          <p>Transfer money between accounts, pay bills, and send money to friends and family.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-lock"></i>
          <h2>Security Services</h2>
          <p>Protect your accounts with our advanced security measures, including two-factor authentication and encryption.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-chart-line"></i>
          <h2>Investment Services</h2>
          <p>Invest in stocks, bonds, and other investment products, and track your portfolio's performance.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-life-ring"></i>
          <h2>Customer Support</h2>
          <p>Get help when you need it with our 24/7 customer support team.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;