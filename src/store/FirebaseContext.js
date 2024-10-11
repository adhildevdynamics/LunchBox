

// import React, { createContext } from "react";
// import { auth, db } from '../../src/firebase/config';
// export const FirebaseContext = createContext({ db, auth });

// export const FirebaseProvider = ({ children }) => {
//   return (
//     <FirebaseContext.Provider value={{ auth, db }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

import React, { createContext, useEffect, useState } from "react";
import { auth, db } from '../../src/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export const FirebaseContext = createContext({ db, auth, currentUser: null });

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ auth, db, currentUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};
