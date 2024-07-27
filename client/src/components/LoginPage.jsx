
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="h-full w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required />
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
  );
};

export default LoginPage; 