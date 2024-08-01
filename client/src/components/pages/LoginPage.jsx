import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../LoginPage.css';
import { useState } from 'react';
import supabase from '../../lib/helpers/supabase';
import BeatLoader from "react-spinners/BeatLoader";
import { toast} from 'react-toastify';

const LoginPage = () => {
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate()

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
    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
  });}

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
    setLoading(true)
    try {
      const {data,error} = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })
      console.log(data)
      if(error) throw error
      navigate('/home')
      sucessNotify()
    } catch (error) {
      console.log(error.message)
      errorNotify(error)
    }finally{
      setLoading(false)
    }
  }



  return (
    <>
    {loading?(
    <BeatLoader color={"#16a34a"} loading={loading} className='text-center pt-[400px]' />
    ):(
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
          className="w-full"
            whileHover={{ scale: 1.1 ,}}
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
      )}
      </>
  );
};

export default LoginPage; 