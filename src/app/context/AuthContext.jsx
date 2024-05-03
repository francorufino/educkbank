"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { authFirebase, db } from "@/lib/firebase/config";
import toast from "react-hot-toast";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
    metadata: null,
  });

  const createUser = async userData => {
    try {
      const newUserResponse = await createUserWithEmailAndPassword(
        authFirebase,
        userData.email,
        userData.password
      );

      if (newUserResponse.user) {
        const userRef = doc(db, "users", newUserResponse.user.uid);
        await setDoc(userRef, userData);
        return;
      }

      toast.error("Something went wrong saving the user");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const loginResponse = await signInWithEmailAndPassword(
        authFirebase,
        email,
        password
      );

      if (loginResponse.user) {
        getUserFromDb(loginResponse.user);

        return;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(authFirebase);
      setAuth({
        isLoggedIn: false,
        user: null,
        metadata: null,
      });
    } catch (error) {
      toast.error("Something went wrong trying to sign out");
      console.error("Error signing out:", error);
    }
  };

  async function getUserFromDb(user) {
    const userRef = doc(db, "users", user?.uid);
    const userFromDb = await getDoc(userRef);

    if (userFromDb.exists()) {
      setAuth({ user, isLoggedIn: !!user, metadata: userFromDb.data() });
      return;
    }

    toast.error("Something went wrong getting user information from db");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, user => {
      if (user) {
        getUserFromDb(user);
      } else {
        setAuth({
          isLoggedIn: false,
          user: null,
          metadata: null,
        });
      }
    });

    return () => unsubscribe();
  }, [authFirebase]);

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
