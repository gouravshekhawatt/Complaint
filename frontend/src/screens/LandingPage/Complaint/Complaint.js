
import React from 'react';
import { Link } from 'react-router-dom';
import './Complaint.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";

function Complaint() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

const userLogin = useSelector((state) => state.userLogin);





  const Logout = () => {
   dispatch(logout());
    navigate("/");
  }
  return (
    <div className='Container'>
        <div className="container1">
      <div className="page">
        <div className="heading">Welcome</div>
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
