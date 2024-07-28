import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Navebar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    
    <Router>
      <div className='App'>
        <Navebar />
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;


