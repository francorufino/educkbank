"use client";
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
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

  const login = async () => {
    await signInWithEmailAndPassword(
      authFirebase,
      "teste2@gmail.com",
      "123456"
    );
  };

  const logout = async () => {
    await signOut(authFirebase);
  };

  useEffect(() => {
    onAuthStateChanged(authFirebase, user => {
      // console.log(user);
      setAuth({
        isLogg: !!user,
        name: !!user ? user.email : "",
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, createUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
