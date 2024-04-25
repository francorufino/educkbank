"use client";
import React from "react";
import { createContext, useContext, useState } from "react";
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
    isLogg: false,
    name: "",
    // email: "",
    password: "",
  });

  const createUser = async () => {
    await createUserWithEmailAndPassword(
      authFirebase,
      "teste2@gmail.com",
      "123456"
    );
  };

  return (
    <AuthContext.Provider value={{ auth, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
