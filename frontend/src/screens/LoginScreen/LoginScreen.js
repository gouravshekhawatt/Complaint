import React, { useState  } from 'react'
import "./LoginScreen.css"
import { Link } from 'react-router-dom';
import axios from "axios";
import Loading from '../../components/Loader/Loading';
import ErrorMessage from '../../components/ErrorMessage';

const LoginScreen = () => {

const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[error,setError] = useState(false);
const[loading,setLoading] = useState(false);




//calling api
const submitHandler = async(e) => {
    e.preventDefault()


    try {

        const config = {
            headers: {'Content-Type': "application/json"},
        }


        setLoading(true);

        const  { data } = await axios.post("http://localhost:5000/api/users/login",{
            email,password
        },config);



        console.log(data)



// saving data in local storage
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);

        
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
};

  return (
    <>
    <div>
    {loading && <Loading/>}
       
    <div className="center">
    
      <h1>Login</h1>
      <form  onSubmit={submitHandler}>
      {error && <ErrorMessage message={error}/> }
    
        <div className="txt_field">
          <input type="text" 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)}} />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required
           value={password}
           onChange={(e) => {
               setPassword(e.target.value)}}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login"/>
        <div className="signup_link">
          Not a member? <Link to="/register">Signup</Link>
        </div>
      </form>
    </div>
    
  </div>
 
  </>
  )
}

export default LoginScreen
