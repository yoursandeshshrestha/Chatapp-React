// import React, { createContext, useContext, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../Firebase/Firebase";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   onAuthStateChanged(auth)
//     .then(() => {
//       setUser(null);
//     })
//     .catch((error) => {
//       console.error("Sign out error:", error);
//     });

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
