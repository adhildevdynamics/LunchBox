// import React, { useState, useContext } from 'react';
// import './Signup.css';
// import { FirebaseContext } from "../../store/FirebaseContext";
// import { fetchSignInMethodsForEmail, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { doc , setDoc } from 'firebase/firestore'; // Import setDoc and doc

// import { FaUser } from "react-icons/fa";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";
// import { MdFastfood } from "react-icons/md";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { db, auth } = useContext(FirebaseContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//       if (signInMethods.length > 0) {
//         console.error("Email already in use. Please use a different email.");
//         return;
//       }
  
//       const result = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(result.user, { displayName: username });
  
      
//       await setDoc(doc(db, 'users', result.user.uid), {
//         id: result.user.uid,
//         username: username,
//         phone: phone,
//       });
  
//       navigate('/login');
//     } catch (error) {
//       console.error("Error creating user or updating profile:", error);
//       if (error.code === 'auth/email-already-in-use') {
//         console.error("Email already in use. Please use a different email.");
//       } else if (error.code === 'permission-denied') {
//         console.error("Permission denied. Check your Firestore rules.");
//       } else {
//         console.error("Firestore error:", error.message);
//       }
//     }
//   };
  

//   // const handleLoginRedirect = () => {
//   //   navigate('/login'); // Redirect to login page
//   // };

//   return (
//     <div className="wrapper-1">
//       <form onSubmit={handleSubmit}>
//         <h1>Signup <a href='/' className='signup-icon'><MdFastfood /></a>  </h1>
//         <div className="input-box">
//           <input
//             placeholder='Full Name'
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             type="text"
//             required
//           />
//           <FaUser className='icon' />
//         </div>
//         <div className="input-box">
//           <input
//             placeholder='Phone Number'
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             type="number"
//             required
//           />
//           <FaPhoneVolume className='icon' />
//         </div>
//         <div className="input-box">
//           <input
//             placeholder='Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             required
//           />
//           <MdEmail className='icon' />
//         </div>
//         <div className="input-box">
//           <input
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             required
//           />
//           <FaLock className='icon' />
//         </div>
//         <button className='signup-button' type="submit">Sign Up</button>
//         {/* <button className="log-in-button" type="button" onClick={handleLoginRedirect}>Login</button> */}
//         <div className='register-link'>
//           <a href='/login'>Login</a>
//           </div>
//       </form>
//     </div>
//   );
// }

import React, { useState, useContext } from 'react';
import './Signup.css';
import { FirebaseContext } from "../../store/FirebaseContext";
import { fetchSignInMethodsForEmail, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore'; // Import setDoc and doc

import { FaUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const { db, auth } = useContext(FirebaseContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the process starts
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        console.error("Email already in use. Please use a different email.");
        setLoading(false); // Set loading to false if there's an error
        return;
      }

      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: username });

      // Use setDoc to add user data to Firestore
      await setDoc(doc(db, 'users', result.user.uid), {
        id: result.user.uid,
        username: username,
        phone: phone,
      });

      navigate('/login');
    } catch (error) {
      console.error("Error creating user or updating profile:", error);
      if (error.code === 'auth/email-already-in-use') {
        console.error("Email already in use. Please use a different email.");
      } else if (error.code === 'permission-denied') {
        console.error("Permission denied. Check your Firestore rules.");
      } else {
        console.error("Firestore error:", error.message);
      }
    } finally {
      setLoading(false); // Set loading to false when the process ends
    }
  };

  return (
    <div className="wrapper-1">
      {loading ? (
        <div className="loader">Loading...</div> // Simple loader
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Signup <a href='/' title='Home' className='signup-icon'><MdFastfood /></a>  </h1>
          <div className="input-box">
            <input
              placeholder='Full Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
            />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input
              placeholder='Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              required
            />
            <FaPhoneVolume className='icon' />
          </div>
          <div className="input-box">
            <input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <FaLock className='icon' />
          </div>
          <button className='signup-button'  type="submit">Sign Up</button>
          <div className='register-link'>
            <a href='/login'>Login</a>
          </div>
        </form>
      )}
    </div>
  );
}
