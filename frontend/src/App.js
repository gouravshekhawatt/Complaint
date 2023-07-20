
import './App.css';
import Header from "./components/Header/Header.js";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import LandingPage from './screens/LandingPage/LandingPage';
import Footer from './components/Footer/footer.js';
import Complaint from './screens/LandingPage/Complaint/Complaint';
import ViewComplaints from "./components/ViewComplaints/ViewComplaints"


function App() {
  return (
   <BrowserRouter>

<Header/>
<main>
  <Routes>
  <Route exact path='/' element={<LandingPage/>}/>
  <Route exact path='/Complaint' element={<Complaint/>}/>
  <Route exact path='/ViewComplaints' element={<ViewComplaints/>}/>
  </Routes>
</main>

<Footer/>
</BrowserRouter>
  
  );
}

export default App;
