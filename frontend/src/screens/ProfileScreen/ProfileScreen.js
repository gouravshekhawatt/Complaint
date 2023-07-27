import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import './ProfileScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../actions/userActions';
import Loading from '../../components/Loader/Loading';
import ErrorMessage from '../../components/ErrorMessage';

function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setlocation] = useState("");
  const [division, setdivision] = useState("");
  const [group, setGroup] = useState("");
  const [myid, setmyid] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const userUpdate = 
    useSelector((state) => state.userUpdate);
    const {loading , error , success} = userUpdate;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo  } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {

    if(!userInfo){
        navigate("/");
    }

    else{
        setName(userInfo.name);
        setEmail(userInfo.email);
        setdivision(userInfo.division);
        setlocation(userInfo.location);
        setNumber(userInfo.number);
        setmyid(userInfo.myid);
        setGroup(userInfo.group);
        
    }
  },[navigate,userInfo])

const SubmitHandler = (e) => {

    e.preventDefault();

    const user = {
      name: name,
      email: email,
      division: division,
      location: location,
      number: number,
      myid: myid,
      password: password,
    };

    dispatch(updateProfile(user));
};
  ////////////////////////////////////////////////
  
  const [activeForm, setActiveForm] = useState('personal');

  const showForm = (formId) => {
    setActiveForm(formId);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'personal':
        return (
          <div className="profile-form-section show">
            <h2>Personal Information</h2>
            {loading && <Loading/>}
            {success && <ErrorMessage message={"Updated  Successfully"}/> }
            {error && <ErrorMessage message={error}/> }
            <form onSubmit={SubmitHandler}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="name">ID Number</label>
                <input type="text" id="myid" value={myid} onChange={(e) => setmyid(e.target.value)}  />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <button type="submit" >Submit</button>
            </form>
          </div>
        );
      case 'contact':
        return (
          <div className="profile-form-section show">
            <h2>Contact Information</h2>
            {loading && <Loading/>}
            {success && <ErrorMessage message={"Updated  Successfully"}/> }
            {error && <ErrorMessage message={error}/> }
            <form onSubmit={SubmitHandler}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={number} onChange={(e) => setNumber(e.target.value)} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'address':
        return (
          <div className="profile-form-section show">
            <h2>Address Information</h2>
            {loading && <Loading/>}
            {success && <ErrorMessage message={"Updated  Successfully"}/> }
            {error && <ErrorMessage message={error}/> }
            <form onSubmit={SubmitHandler}>
              <div className="form-group">
                <label htmlFor="street">Division</label>
                <input type="text" id="street" name="street" value={division} onChange={(e) => setdivision(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="city">Group</label>
                <input type="text" id="city" name="city" value={group} onChange={(e) => setGroup(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Location</label>
                <input type="text" id="zip" name="zip" value={location} onChange={(e) => setlocation(e.target.value)}  />
              </div>
              <button className='button-radius' type="submit">Submit</button>
            </form>
          </div>
        );
      case 'security':
        return (
          <div className="profile-form-section show">
            <h2>Security & Authentication</h2>
            <form>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="text" id="password" name="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
              </div>
              
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bgggg">
      <Header />
      <div className="profile-container">
      <div className="profile-container1">
        <div className="profile-nav">
            <div className="profile_nav-pic">
        <div class="profile-pic">
    
  </div>
  <h2>{userInfo.name}</h2>
  </div>


  <div className="profile-nav-cont">

          <div
            className={`profile-nav-item ${
              activeForm === 'personal' ? 'active' : ''
            }`}
            onClick={() => showForm('personal')}
          >
          Personal
          </div>
          <div
            className={`profile-nav-item ${
              activeForm === 'contact' ? 'active' : ''
            }`}
            onClick={() => showForm('contact')}
          >
            Contact
          </div>
          <div
            className={`profile-nav-item ${
              activeForm === 'address' ? 'active' : ''
            }`}
            onClick={() => showForm('address')}
          >
            Address
          </div>
          <div
            className={`profile-nav-item ${
              activeForm === 'security' ? 'active' : ''
            }`}
            onClick={() => showForm('security')}
          >
            Security
          </div>
          </div>
        </div>
        <div className="profile-form">{renderForm()}</div>
      </div>
      </div>
    </div>
  );
}

export default ProfileScreen;