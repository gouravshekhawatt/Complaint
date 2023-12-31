
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import LandingPage from './screens/LandingPage/LandingPage';
import Footer from './components/Footer/footer.js';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Complaint from './screens/LandingPage/Complaint/Complaint';
import ViewComplaints from "./components/ViewComplaints/ViewComplaints";
import ComplaintForm from './screens/ComplaintForm/ComplaintForm';



function App() {
  return (
   <BrowserRouter>


<main>
  <Routes>
  <Route exact path='/' element={<LandingPage/>}/>
  <Route exact path='/Complaint' element={<Complaint/>}/>
  <Route exact path='/AddComplaint' element={<ComplaintForm/>}/>
  <Route exact path='/ViewComplaints' element={<ViewComplaints/>}/>
  <Route exact path='/login' element={<LoginScreen/>}/>
  <Route exact path='/register' element={<RegisterScreen/>}/>
  <Route exact path='/profile' element={<ProfileScreen/>}/>
  <Route exact path='/ComplaintForm' element={<ComplaintForm/>}/>
  </Routes>
</main>

<Footer/>
</BrowserRouter>
  
  );
}

export default App;
