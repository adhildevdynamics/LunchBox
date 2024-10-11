// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'
// import App from './App';


// import { FirebaseContext } from './store/FirebaseContext';
// import { auth, app, db, storage, } from './firebase/config';

// import 'bootstrap/dist/css/bootstrap.min.css';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <React.StrictMode>
   
//     <FirebaseContext.Provider value={{ auth,app,db,storage}}>
//     <App />
//     </FirebaseContext.Provider>
   
    
    
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import { auth, app, db, storage } from './firebase/config';
import { ThemeProvider } from './store/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ auth, app, db, storage }}>
      <ThemeProvider>
        <App />
        
      </ThemeProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

