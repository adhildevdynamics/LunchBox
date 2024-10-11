// import React from 'react';
// import PropTypes from 'prop-types';
// import './OrderSummary.css';

// const OrderSummary = ({ orders = [] }) => {
//   // Aggregate food counts
//   const foodCounts = orders.reduce((acc, order) => {
//     order.orders.forEach(item => {
//       acc[item.name] = (acc[item.name] || 0) + 1;
//     });
//     return acc;
//   }, {});

//   // Calculate total orders
//   const totalOrders = orders.length;

//   return (
//     <div className="order-summary">
//       <h2>Order Summary</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Food Item</th>
//             <th>Number of Orders</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(foodCounts).map(([food, count]) => (
//             <tr key={food}>
//               <td>{food}</td>
//               <td>{count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>Total Orders: {totalOrders}</p>
//     </div>
//   );
// };

// OrderSummary.propTypes = {
//   orders: PropTypes.arrayOf(
//     PropTypes.shape({
//       orders: PropTypes.arrayOf(
//         PropTypes.shape({
//           name: PropTypes.string.isRequired,
//         })
//       ).isRequired,
//     })
//   ).isRequired,
// };

// export default OrderSummary;
