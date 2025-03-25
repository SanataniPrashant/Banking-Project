import React from 'react';
import "../CSS/Profile.css"
function Profile() {
  let username = localStorage.getItem("username")
    let email = localStorage.getItem("email")
  
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile Details</h1>
      <div className="profile-info">
        <p className="profile-label">Name:</p>
        <p className="profile-value">{username}</p>
      </div>
      <div className="profile-info">
        <p className="profile-label">Email:</p>
        <p className="profile-value">{email}</p>
      </div>
      <div className="profile-info">
        <p className="profile-label">Phone:</p>
        <p className="profile-value">123-456-7890</p>
      </div>
      <div className="profile-info">
        <p className="profile-label">Account-Type:</p>
        <p className="profile-value">Savings</p>
      </div>
      <div className="profile-info">
        <p className="profile-label">Account-Open-From:</p>
        <p className="profile-value">Online</p>
      </div>
    </div>
  );
}

export default Profile;