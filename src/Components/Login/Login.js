
// import React, { useContext, useState } from 'react';
// import './Login.css';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";

// export const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { auth } = useContext(FirebaseContext);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/foodmenu');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const handlePasswordReset = async () => {
//     if (!email) {
//       alert("Please enter your email address to reset your password.");
//       return;
//     }
//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert("Password reset email sent! Check your inbox.");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className='wrapper'>
//       <form onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <div className='input-box'>
//           <input
//             type="email"
//             placeholder='Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <MdEmail className='icon' />
//         </div>
//         <div className='input-box'>
//           <input
//             type='password'
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <FaLock className='icon' />
//         </div>
        
//         <div className='remember-forgot'>
//           <label><input type='checkbox' /> Remember me </label>
//           <a href='#!' onClick={handlePasswordReset}>Forgot Password</a>
//         </div>

//         <button className='login-button' type='submit'>Login</button>

//         <div className='register-link'>
//           <p>Don't have an account? <a href='/signup'>Register</a></p>
//         </div>
//       </form>
//     </div>
//   );
// };


import React, { useContext, useState } from 'react';
import './Login.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Check for admin credentials
    if (email === 'admin@gmail.com' && password === 'admin@dev') {
      navigate('/adminpage');
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/foodmenu');
      } catch (error) {
        alert('Invalid credentials');
      }
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      alert("Please enter your email address to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin}>
        <h1>Login 
        <a href='/' title='Home' className='log-icon'><IoFastFoodOutline /></a> </h1>
        <div className='input-box'>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MdEmail className='icon' />
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className='icon' />
        </div>
        
        <div className='remember-forgot'>
          <label><input type='checkbox' /> Remember me </label>
          <a href='#!' onClick={handlePasswordReset}>Forgot Password</a>
        </div>

        <button className='login-button' type='submit'>Login</button>

        <div className='register-link'>
          <p>Don't have an account? <a href='/signup'>Register</a></p>
        </div>
      </form>
    </div>
  );
};
