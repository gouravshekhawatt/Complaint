// DetailsPage.js
import React , {useEffect , useState }from 'react';
import "./ViewComplaints.css"
import Header from '../Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from '../../actions/notesActions';
import Loading from "../../components/Loader/Loading"
import ErrorMessage from "../../components/ErrorMessage"
import { useNavigate } from 'react-router-dom';




// ... (import statements)



const DetailsPage = () => {
  const dispatch = useDispatch();

  const noteList = useSelector(state => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
      
    }
  }, [dispatch, navigate, userInfo]);

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const moreinfo = () => {
    setShowMoreInfo(!showMoreInfo);
  }

  return (
<>

<div className="details-container9">
<Header />
<h2>View Complaint Details</h2>
        {error && <ErrorMessage message={error} />}
        {loading && <Loading />}
        {notes && notes.length === 0 ? (
          // If "notes" array is empty
          <div className='complainterror'>
            No Complaints found.
          </div>
        ) : (

<div className="containdata">
{notes?.map((item) => (
<div onClick={moreinfo} className="containdata1">
  <div className="containdata2">
<div className='containerFont'>
 <strong>Id : </strong> {item.id}       
 </div>
<div className='containerFont'>
 <strong>Division : </strong> {item.division}       
 </div>
 </div>
 {showMoreInfo && <div className="containdata2">


<div className='containerFont'>
     <strong>Name:</strong> {item.name}
                </div>
                 <div className='containerFont'>
               <strong>Division:</strong> {item.division}
               </div>
               <div className='containerFont'>
                 <strong>Email:</strong> {item.email}
              </div>
              <div className='containerFont'>
                  <strong>Address:</strong> {item.location}
               </div>

</div>
}




</div>

))}
</div>




        )}

</div>


</>









  
  );
};

export default DetailsPage;





