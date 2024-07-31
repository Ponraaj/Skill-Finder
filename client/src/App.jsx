import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Navebar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home';
import { AuthProvider } from './lib/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ContactPage from './components/pages/ContactPage';

const App = () => {
  return (
    
    <Router>
      <AuthProvider>
        <div className='App'>
          <Navebar />
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={
              <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />

            <Route path='/contact' element={<ContactPage/>}/>

          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;


