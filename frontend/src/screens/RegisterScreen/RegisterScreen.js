import React from 'react';
import './RegisterScreen.css';

function RegisterScreen() {
  return (
    <div className="registration-block">
    <div className="registration-container">
      <div className="registration-title">Registration</div>
      <div className="registration-content">
        <form action="#">
          <div className="registration-user-details">
            <div className="registration-input-box">
              <span className="registration-details">Full Name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Username</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Password</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div>
          </div>
          <div className="registration-gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="registration-gender-title">Gender</span>
            <div className="registration-category">
              <label htmlFor="dot-1">
                <span className="registration-dot one"></span>
                <span className="registration-gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="registration-dot two"></span>
                <span className="registration-gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="registration-dot three"></span>
                <span className="registration-gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="registration-button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default RegisterScreen;
