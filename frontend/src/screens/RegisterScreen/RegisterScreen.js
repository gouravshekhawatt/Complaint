import React from 'react';
import './RegisterScreen.css';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import axios from "axios";
import Loading from '../../components/Loader/Loading';


function RegisterScreen() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [division, setdivision] = useState("");
  const [myid, setmyid] = useState("");
 
  const [number, setNumber] = useState("");
  
  const [gender, setGender] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
 

const [error,setError] = useState(false)
const [loading,setLoading] = useState(false)


const submitHandler = async (e) => {
  e.preventDefault();
  console.log(gender);

  // Checking if the password and confirm password match
  if (password !== confirmpassword) {
    setMessage("Password do not match");
  } else {
    setMessage(null);
  }

  try {
    // Calling API
    const config = {
      headers: { 'Content-Type': "application/json" },
    };

    setLoading(true);

    const { data } = await axios.post("http://localhost:5000/api/users/register", {
      name,email, password,gender, division,location,number
    }, config);

    console.log(data);

    // Saving data in local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
    setLoading(false);
  } catch (error) {
    // setError(error.response.data.message);
    setLoading(false);
  }
};

  return (
    <>
     {loading && <Loading/>}
    <div className="registration-block">
     
    <div className="registration-container">
      <div className="registration-title">Registration</div>
      {message && <ErrorMessage message={message}/> }
      <div className="registration-content">
        <form onSubmit={submitHandler}>
          <div className="registration-user-details">
            <div className="registration-input-box">
              <span className="registration-details">Full Name</span>
              <input type="text" value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">UserId</span>
              <input type="text" 
              value={myid}
              onChange={(e) => setmyid(e.target.value)}
              
              placeholder="Enter your UserId" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Email</span>
              <input type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Phone Number</span>
              
              <input type="text" 
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter your number" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Name Of Division</span>
              <input type="text" 
              value={division}
              onChange={(e) => setdivision(e.target.value)}
              
              placeholder="Enter your Division" required />
            </div><div className="registration-input-box">
              <span className="registration-details">Location</span>
              <input type="text" 
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              
              placeholder="Enter your Location" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Password</span>
              <input type="text" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" required />
            </div>
            <div className="registration-input-box">
              <span className="registration-details">Confirm Password</span>
              <input type="text" 
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password" required />
            </div>
          
          </div>
          <div className="registration-gender-details">
            <input type="radio" name="gender" value= "Male" id="dot-1" onChange={(e) => setGender(e.target.value)}/>
            <input type="radio" name="gender" value= "Female" id="dot-2" onChange={(e) => setGender(e.target.value)}/>
            <input type="radio" name="gender" value= "Prefer not to Say" id="dot-3" onChange={(e) => setGender(e.target.value)}/>
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
    </>
  );
}

export default RegisterScreen;
