// DetailsPage.js
import React , {useEffect }from 'react';
import "./ViewComplaints.css"
import Header from '../Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from '../../actions/notesActions';
import Loading from "../../components/Loader/Loading"
import ErrorMessage from "../../components/ErrorMessage"
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {

const dispatch = useDispatch();

const noteList = useSelector(state=> state.noteList)
const { loading , notes , error } = noteList;




const userLogin = useSelector((state) => state.userLogin);

const {userInfo} = userLogin;
const navigate = useNavigate();

useEffect(() => {
  dispatch(listNotes())
  if(!userInfo){
    navigate("/")
  }
  
}, [dispatch , navigate , userInfo] );







  return (

    <div className="details-container9">
    <div>
      <Header />

     
      <h2>Details Page</h2>
{error && <ErrorMessage message = {error} /> }
      {loading && <Loading />}
      {notes?.map((item) => (
        <div key={item.id}>
          {/* Assuming each item in the notes array has a unique "id" property */}
          <div>
            <strong>Name:</strong> {item.name}
          </div>
          <div>
            <strong>Division:</strong> {item.division}
          </div>
         
          <div>
            <strong>Email:</strong> {item.email}
          </div>
          <div>
            <strong>Address:</strong> {item.location}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default DetailsPage;
