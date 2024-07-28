import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../LoginPage.css';
import { useState } from 'react';
import supabase from '../../lib/helpers/supabase';

const LoginPage = () => {
  const navigate = useNavigate()

  const [credentials,setCredentials] = useState({
    email:"",
    password:"",
  })

  const handleChange=(e)=>{
    setCredentials((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const {data,error} = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })
      console.log(data)
      navigate('/home')
      if(error) throw error
    } catch (error) {
      alert(error.message)
    }
  }



  return (
  <div className="container">
    <div className="login-container">
      <div className="h-full w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-3xl text-center'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name='password' value={credentials.password} onChange={handleChange} required />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Login
          </motion.button>
        </form>
        <p>Dont have an account? <Link to="/signup">Sign up</Link>
        </p>
      </motion.div>
      </div>
      </div>
  );
};

export default LoginPage; 