// import { initializeApp } from 'firebase/app';


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCtZFdETj6G2Ceytp1ya_93uNGc4uFymPk",
//     authDomain: "foodapp-a5efd.firebaseapp.com",
//     projectId: "foodapp-a5efd",
//     storageBucket: "foodapp-a5efd.appspot.com",
//     messagingSenderId: "296824431765",
//     appId: "1:296824431765:web:2d0cb21e5acabbe1e6279c",
//     measurementId: "G-QKREKSJP5S"
//   };

//   export const app = initializeApp(firebaseConfig);


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from 'firebase/storage';


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { auth, db , app , storage};

import { initializeApp } from 'firebase/app';
import { getFirestore, } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCtZFdETj6G2Ceytp1ya_93uNGc4uFymPk",
  authDomain: "foodapp-a5efd.firebaseapp.com",
  projectId: "foodapp-a5efd",
  storageBucket: "foodapp-a5efd.appspot.com",
  messagingSenderId: "296824431765",
  appId: "1:296824431765:web:2d0cb21e5acabbe1e6279c",
  measurementId: "G-QKREKSJP5S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };

  


