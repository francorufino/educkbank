"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { authFirebase } from "@/lib/firebase/config";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });

  const createUser = async (email, password, userData) => {
    try {
      await createUserWithEmailAndPassword(authFirebase, email, password);
      // Additional logic to store user data
      console.log("User created successfully:", userData);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(authFirebase, email, password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(authFirebase);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, user => {
      setAuth({
        isLoggedIn: !!user,
        name: user ? user.email : "",
        user: user || null,
      });

      // alert(user?.name);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        createUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// codigo do professor:
// "use client";
// import React from "react";
// import { createContext, useContext, useState, useEffect } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { authFirebase } from "@/lib/firebase/config";

// export const AuthContext = createContext();
// export const useAuthContext = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     isLogg: false,
//     name: "",
//     // email: "",
//     password: "",
//   });

//   const createUser = async () => {
//     await createUserWithEmailAndPassword(
//       authFirebase,
//       "teste2@gmail.com",
//       "123456"
//     );
//   };

//   const login = async () => {
//     await signInWithEmailAndPassword(
//       authFirebase,
//       "teste2@gmail.com",
//       "123456"
//     );
//   };

//   const logout = async () => {
//     await signOut(authFirebase);
//   };

//   useEffect(() => {
//     onAuthStateChanged(authFirebase, user => {
//       console.log(user);
//       setAuth({
//         isLogg: !!user,
//         name: !!user ? user.email : "",
//       });
//     });
//   }, []);

//   return (
//     <AuthContext.Provider value={{ auth, createUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
