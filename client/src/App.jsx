import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Navebar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home';
import { AuthProvider } from './lib/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import axios from "axios";
import ContactPage from './components/pages/ContactPage';
import LandingPage from './components/pages/LandingPage';
import PageNotFound from './components/pages/PageNotFound';
import { ToastContainer } from 'react-toastify';

axios.defaults.baseURL ="http://localhost:6969"
const App = () => {
  return (
    
    <Router>
      <AuthProvider>
        <div className='App'>
          <ToastContainer />
          <Navebar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={
              <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />

            <Route path='/contact' element={<ContactPage/>}/>
            <Route path="*" element={<PageNotFound />} />
            

          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;


