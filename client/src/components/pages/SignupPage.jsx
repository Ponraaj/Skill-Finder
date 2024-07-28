import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import supabase from '../../lib/helpers/supabase';
import { motion } from 'framer-motion';
import '../SignupPage.css';

const SignupPage = () => {
  const [credentials,setCredentials] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const {data,error} = await supabase.auth.signUp(
        {
          email:credentials.email,
          password:credentials.password,
          options:{
            data:{
              username:credentials.username
            }
          }
        }
      )
      console.log(data)
      alert("Check your email for verification Link!")
      if(error) throw error
    } catch (error) {
      alert(error.message)
    }
  }

  const handleChange=(e)=>{
    setCredentials((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

 

  return (
    <div className="container">
    <div className="signup-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-3xl text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name='username'
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name='email'
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name='password'
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name='confirmPassword'
              value={credentials.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Sign Up
          </motion.button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </motion.div>
    </div>
    </div>
  );
};

export default SignupPage;