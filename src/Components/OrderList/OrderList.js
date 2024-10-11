// import React, { useEffect, useState, useContext  } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { collection, getDocs } from 'firebase/firestore';

// import './OrderList.css';
// import NavBar from '../NavBar/NavBar';


// const OrderList = () => {
//   const { db } = useContext(FirebaseContext);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
   

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'orders'));
//         const fetchedOrders = [];

//         querySnapshot.forEach((doc) => {
//           fetchedOrders.push({ id: doc.id, ...doc.data() });
//         });

//         setOrders(fetchedOrders);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [db]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
  

//   return (
  
//     <div className="order-list">
//       <NavBar/>
//       <h1 className='order-title'>Order List</h1>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className='tb-head'>
//           <thead>
//             <tr style={{ backgroundColor: 'yellow' }}>
//               <th style={{ fontWeight: 500 }}>Username</th>
//               <th style={{ fontWeight: 500 }}>Order Details</th>
//               <th style={{ fontWeight: 500 }}>Timestamp</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.user.name}</td>
//                 <td>
//                   {order.orders ? (
//                     order.orders.map((item, index) => (
//                       <div key={index}>{item.name}</div>
//                     ))
//                   ) : (
//                     <div>No items</div>
//                   )}
//                 </td>
//                 <td>{new Date(order.timestamp.toDate()).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
      
//       )}
//     </div>
 
//   );
// };

// export default OrderList;

// import React, { useEffect, useState, useContext } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { collection, getDocs } from 'firebase/firestore';
// import NavBar from '../NavBar/NavBar'; // Import the NavBar component
// import { IoIosArrowBack } from "react-icons/io";
// import './OrderList.css';

// const OrderList = () => {
//   const { db } = useContext(FirebaseContext);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'orders'));
//         const fetchedOrders = [];

//         querySnapshot.forEach((doc) => {
//           fetchedOrders.push({ id: doc.id, ...doc.data() });
//         });

//         setOrders(fetchedOrders);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [db]);

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
//         <div className="order-list">
//           <h1 className='order-title'> <a className="back-to-home" href='/adminpage'><IoIosArrowBack /></a> Order List</h1>
//           {orders.length === 0 ? (
//             <p>No orders found.</p>
//           ) : (
//             <table className='tb-head'>
//               <thead>
//                 <tr>
//                   <th>Username</th>
//                   <th>Order Details</th>
//                   <th>Timestamp</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order.id}>
//                     <td>{order.user.name}</td>
//                     <td>
//                       {order.orders ? (
//                         order.orders.map((item, index) => (
//                           <div key={index}>{item.name}</div>
//                         ))
//                       ) : (
//                         <div>No items</div>
//                       )}
//                     </td>
//                     <td>{new Date(order.timestamp.toDate()).toLocaleString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;
import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { collection, getDocs } from 'firebase/firestore';
import NavBar from '../NavBar/NavBar';
import { IoIosArrowBack } from "react-icons/io";
import './OrderList.css';

const OrderList = () => {
  const { db, auth } = useContext(FirebaseContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      console.log('Fetching orders...');
      if (!auth.currentUser) {
        setError('User not authenticated');
        console.error('User not authenticated');
        return;
      }

      try {
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const fetchedOrders = [];

        querySnapshot.forEach((doc) => {
          console.log('Fetched order:', doc.data());
          fetchedOrders.push({ id: doc.id, ...doc.data() });
        });

        setOrders(fetchedOrders);
        console.log('Orders set:', fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders: ' + error.message);
      } finally {
        setLoading(false);
        console.log('Loading state set to false');
      }
    };

    fetchOrders();
  }, [db, auth]);

  if (loading) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error state:', error);
    return <div>Error: {error}</div>;
  }

  console.log('Rendering orders:', orders);
  return (
    <div className="page-container">
      <div className="navbar-container">
        <NavBar /> 
      </div>
      <div className="content-container">
        <div className="order-list">
          <h1 className='order-title'> 
            <a className="back-to-home" href='/adminpage'>
              <IoIosArrowBack />
            </a> 
            Order List
          </h1>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <table className='tb-head'>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Order Details</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.user.name}</td>
                    <td>
                      {order.orders ? (
                        order.orders.map((item, index) => (
                          <div key={index}>{item.name}</div>
                        ))
                      ) : (
                        <div>No items</div>
                      )}
                    </td>
                    <td>{new Date(order.timestamp.toDate()).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
