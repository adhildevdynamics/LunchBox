// import React, { useEffect, useState, useContext } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// ; // Ensure this CSS file is imported

// const TotalOrders = () => {
//   const { db, auth } = useContext(FirebaseContext);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const q = query(collection(db, 'orders'), where('user.uid', '==', auth.currentUser.uid));
//         const querySnapshot = await getDocs(q);
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

//     if (auth.currentUser) {
//       fetchOrders();
//     }
//   }, [db, auth]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="totalorders">
//       <h1>Your Total Orders</h1>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr className='tr-title'>
//               <th>Order Details</th>
//               <th>Timestamp</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
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

// export default TotalOrders;
