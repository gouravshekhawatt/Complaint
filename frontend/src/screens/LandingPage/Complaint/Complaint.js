
import React from 'react';
import { Link } from 'react-router-dom';
import './Complaint.css';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/Header/Header"

function Complaint() {

  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
    window.location.reload();
  }
  return (
  <div className="bggg">
    
    <Header/>
    <div className="sidebar">
  
     
      <div className='btnLink'>
        <Link to="/ViewComplaints">
          <button className='btn2'>Profile</button>
        </Link>
      </div>
      <div className='btnLink'>
        <Link to="/AddComplaint">
          <button className='btn2'>Add Complaint</button>
        </Link>
      </div>
      <div className='btnLink'>
        <Link to="/ViewComplaints">
          <button className='btn2'>View Complaints</button>
        </Link>
      </div>
     
      <div className='btnLink'>
        <Link to="/">
          <button onClick= {Logout}className='btn2'>Logout</button>
        </Link>
      </div>
      </div>
    </div>
   
  );
}

export default Complaint;
