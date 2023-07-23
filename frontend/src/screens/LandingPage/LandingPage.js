import React from 'react';
import  { useEffect } from 'react'
import "./LandingPage.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';


const LandingPage = () => {
//this is to redirect to home if already logged In


  const navigate = useNavigate();
useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    navigate("/Complaint");
  }
}, [navigate]);




  return (
    <div>
    
      <section>
      <Header/>
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
