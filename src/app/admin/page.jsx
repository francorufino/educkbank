"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Admin() {
  const { auth, logout } = useContext(AuthContext);
  return (
    <>
      <h1>page view ADMIN - Welcome, {auth.name} </h1>
      <button className="bg-yellow-500" onClick={logout}>
        logout
      </button>
    </>
  );
}
