import React, { useState , useEffect } from 'react'
import "./LoginScreen.css"
import { Link } from 'react-router-dom';
import Loading from '../../components/Loader/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {


  const navigate = useNavigate();

const[email,setEmail] = useState("");
const[password,setPassword] = useState("");

const dispatch = useDispatch();

const userLogin = useSelector((state) => state.userLogin);
const {loading , error , userInfo} = userLogin;


useEffect(() => {

  if(userInfo){
    navigate("/Complaint")
    window.location.reload();
  }
},[navigate,userInfo])
//calling api
const submitHandler = async(e) => {
    e.preventDefault();
    dispatch(login(email,password))
};

  return (
    <>
    <div className='loginbody'>
    {loading && <Loading />}
       
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
