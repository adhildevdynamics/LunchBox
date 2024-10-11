


import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from "../../store/FirebaseContext";
import { collection, getDocs } from 'firebase/firestore';
// import NavBar from '../NavBar/NavBar'; 
import { IoIosArrowBack } from "react-icons/io";
import './UserList.css';

const UserList = () => {
  const { db } = useContext(FirebaseContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [db]);

  return (
    <div className="page-container">
      <div className="navbar-container">
       
      </div>
      <div className="content-container">
        <div className="user-list">
          <h1><a className='back-admin' href='/adminpage'><IoIosArrowBack /></a>Registered Users</h1>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
