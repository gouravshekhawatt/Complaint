import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
     
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">ICTD Services</label>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/Complaint">Services</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/">User</Link></li>
      </ul>
    </nav>
   


    </div>
  )
}

export default Header
