

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './Components/Home/Home';
// import Signup from './Components/Signup/Signup';
// import { Login } from './Components/Login/Login';
// import FoodMenu from './Components/Menu/FoodMenu';
// import Order from './Components/Order/Order';
// import { FirebaseProvider } from './store/FirebaseContext';
// import OrderList from './Components/OrderList/OrderList';
// import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
// import UserTotalOrders from './Components/UserTotalOrders/UserTotalOrders';
// import AdminLogin from './Components/AdminLogin/AdminLogin';
// import AdminPage from './Components/AdminPage/AdminPage';
// import Settings from './Components/Settings/Settings';

// function App() {
//   const [orders, setOrders] = useState([]);

//   return (
//     <div className="App">
//       <FirebaseProvider>
//         <Router>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/foodmenu" element={<FoodMenu setOrders={setOrders} />} />
//             <Route path="/order" element={<Order orders={orders} setOrders={setOrders} />} />
//             <Route path="/order-confirmation" element={<OrderConfirmation />} />
//             <Route path="/orderlist" element={<OrderList />} />
//             <Route path="/user-total-orders" element={<UserTotalOrders />} />
//             <Route path='/adminlogin' element={<AdminLogin/>}/>
//             <Route path='/adminpage' element={<AdminPage/>}/>
//             <Route path='/settings' element={<Settings/>}/>
            
           
//           </Routes>
//         </Router>
//       </FirebaseProvider>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// import Home from './Components/Home/Home';

// import Signup from './Components/Signup/Signup';
// import { Login } from './Components/Login/Login';
// import FoodMenu from './Components/Menu/FoodMenu';
// import Order from './Components/Order/Order';
// import { FirebaseProvider } from './store/FirebaseContext';
// import OrderList from './Components/OrderList/OrderList';
// import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
// import UserTotalOrders from './Components/UserTotalOrders/UserTotalOrders';
// import AdminLogin from './Components/AdminLogin/AdminLogin';
// import AdminPage from './Components/AdminPage/AdminPage';
// import Settings from './Components/Settings/Settings';
// import UserList from './Components/UserList/UserList';



// function App() {
//   const initialSettings = {
//     "--background-color": "#fff",
//     "--background-light": "#fff",
//     "--primary-color": "rgb(255, 0, 86)",
//     "--shadow-color": "rgba(0,0,0,0.2)",
//     "--text-color": "#0A0A0A",
//     "--text-light": "#575757",
//     "--animation-speed": "1s",
//     "--font-size": "16px"
//   };

//   const [settings, setSettings] = useState(initialSettings);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const root = document.documentElement;
//     Object.entries(settings).forEach(([key, value]) => {
//       root.style.setProperty(key, value);
//     });
//   }, [settings]);

//   return (
//     <div className="App">
  
//       <FirebaseProvider>
//         <Router>
       
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/foodmenu" element={<FoodMenu setOrders={setOrders} />} />
//             <Route path="/order" element={<Order orders={orders} setOrders={setOrders} />} />
//             <Route path="/order-confirmation" element={<OrderConfirmation />} />
//             <Route path="/orderlist" element={<OrderList />} />
//             <Route path="/usertotalorders" element={<UserTotalOrders/>} />
           
//             <Route path='/userlist' element={<UserList />}/>
//             <Route path="/adminlogin" element={<AdminLogin />} />
//             <Route path="/adminpage" element={<AdminPage />} />
//             <Route 
//               path="/settings" 
//               element={<Settings settings={settings} setSettings={setSettings} />} 
//             />
//           </Routes>
//         </Router>
//       </FirebaseProvider>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import { Login } from './Components/Login/Login';
import FoodMenu from './Components/Menu/FoodMenu';
import Order from './Components/Order/Order';
import { FirebaseProvider } from './store/FirebaseContext';
import OrderList from './Components/OrderList/OrderList';
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
import UserTotalOrders from './Components/UserTotalOrders/UserTotalOrders';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminPage from './Components/AdminPage/AdminPage';
import Settings from './Components/Settings/Settings';
import UserList from './Components/UserList/UserList';
import { ThemeProvider } from './store/ThemeContext';


function App() {
 
  const initialSettings = {
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--animation-speed": "1s",
    "--font-size": "16px"
  };

  const [settings, setSettings] = useState(initialSettings);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(settings).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [settings]);

  
  

  return (
    <div className="App">
      <FirebaseProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/foodmenu" element={<FoodMenu setOrders={setOrders} />} />
              <Route path="/order" element={<Order orders={orders} setOrders={setOrders} />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/usertotalorders" element={<UserTotalOrders />} />
              <Route path='/userlist' element={<UserList />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/adminpage" element={<AdminPage />} />
              <Route 
                path="/settings" 
                element={<Settings settings={settings} setSettings={setSettings} />} 
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;

