
import React from 'react';
import { Link } from 'react-router-dom';
import './Complaint.css';


function Complaint() {
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
      </div>
    </div>
  );
}

export default Complaint;
