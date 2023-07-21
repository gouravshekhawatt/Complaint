import React from 'react';
import "./LandingPage.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <section>
        <div className="main">
          <h1>Network Complaint Management System</h1>
        </div>
        <div class="container">
        <Link to="/login">
    <button class="login-button">Login</button></Link>
    <Link to="/register">
    <button class="signup-button">Signup</button></Link>
  </div>
      </section>
    </div>
  )
}

export default LandingPage
