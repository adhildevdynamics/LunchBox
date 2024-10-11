


// import React, { useEffect, useState, useContext } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import './UserTotalOrders.css';
// import NavBar from '../NavBar/NavBar';
// import { IoIosArrowBack } from "react-icons/io";

// const UserTotalOrders = () => {
//   const { db, auth } = useContext(FirebaseContext);
//   const [orderCounts, setOrderCounts] = useState({});
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         if (!auth.currentUser) {
//           // Redirect to login if not authenticated
//           navigate('/login');
//           return;
//         }

//         const q = query(collection(db, 'orders'), where('user.uid', '==', auth.currentUser.uid));
//         const querySnapshot = await getDocs(q);

//         const counts = {};
//         let total = 0;

//         querySnapshot.forEach((doc) => {
//           console.log(doc.id, " => ", doc.data()); // Log each document
//           const order = doc.data();
//           if (order.orders) {
//             order.orders.forEach((item) => {
//               counts[item.name] = (counts[item.name] || 0) + 1;
//               total++;
//             });
//           }
//         });

//         console.log('Order Counts:', counts); // Log the counts
//         console.log('Total Orders:', total); // Log the total orders

//         setOrderCounts(counts);
//         setTotalOrders(total);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [db, auth, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="page-container">
//       <div className="navbar-container">
//         <NavBar /> 
//       </div>
//       <div className="content-container">
//         <div className="user-total-orders">
//           <h1> <a className='back-icon' href='/adminpage'> <IoIosArrowBack /></a> Your Total Orders</h1>
//           {totalOrders === 0 ? (
//             <p>No orders found.</p>
//           ) : (
//             <>
//               <table className='table-orders'>
//                 <thead>
//                   <tr>
//                     <th style={{ fontWeight: 500 }}>Food Item</th>
//                     <th style={{ fontWeight: 500 }}>Number of Orders</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {Object.entries(orderCounts).map(([item, count]) => (
//                     <tr key={item}>
//                       <td>{item}</td>
//                       <td>{count}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <h4 style={{ textAlign: 'center' }}>Total Number of Orders: {totalOrders}</h4>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserTotalOrders;


import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { collection, getDocs } from 'firebase/firestore';
// import NavBar from '../NavBar/NavBar'
import { IoIosArrowBack } from "react-icons/io";
import './UserTotalOrders.css';

const UserTotalOrders = () => {
  const { db } = useContext(FirebaseContext);
  const [orderCounts, setOrderCounts] = useState({});
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const counts = {};
        let total = 0;

        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data()); // Log each document
          const order = doc.data();
          if (order.orders) {
            order.orders.forEach((item) => {
              counts[item.name] = (counts[item.name] || 0) + 1;
              total++;
            });
          } else {
            console.log(`No orders array in document ${doc.id}`);
          }
        });

        console.log('Order Counts:', counts); // Log the counts
        console.log('Total Orders:', total); // Log the total orders

        setOrderCounts(counts);
        setTotalOrders(total);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [db]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="page-container">
      <div className="navbar-container">
       
      </div>
      <div className="content-container">
        <div className="user-total-orders">
          <h1> <a className='back-icon' href='/adminpage'> <IoIosArrowBack /></a> Total Orders</h1>
          {totalOrders === 0 ? (
            <p>No orders found.</p>
          ) : (
            <>
              <table className='table-orders'>
                <thead>
                  <tr>
                    <th style={{ fontWeight: 500 }}>Food Item</th>
                    <th style={{ fontWeight: 500 }}>Number of Orders</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(orderCounts).map(([item, count]) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4 style={{ textAlign: 'center' }}>Total Number of Orders: {totalOrders}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTotalOrders;
