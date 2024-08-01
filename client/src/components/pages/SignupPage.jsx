import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import supabase from '../../lib/helpers/supabase';
import { toast} from 'react-toastify';
import { motion } from 'framer-motion';
import '../SignupPage.css';
import BeatLoader from "react-spinners/BeatLoader";

const SignupPage = () => {

  const [loading,setLoading] = useState(false);
  const navigate=useNavigate();
  
  const errorNotify=(error)=>{
    if (!error || !error.message) {
      console.error('Invalid error object:', error);
      return;
    }

    const message=error.message
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
    });}

  const sucessNotify=()=>{
    toast.info("Login to continue", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
  });}
  const [credentials,setCredentials] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
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
      if(error) throw error
      sucessNotify()
      navigate("/login")
    } catch (error) {
      console.log(error.message)
      errorNotify(error)
    }finally{
      setLoading(false)
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
    <>
    {loading?(
    <BeatLoader color={"#16a34a"} loading={loading} className='text-center pt-[400px]' />
    ):(
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
          className='w-full'
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
    )}
    </>
  );
};

export default SignupPage;