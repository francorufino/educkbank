"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Admin() {
  const { auth } = useContext(AuthContext);
  return <h1>page view ADMIN - Welcome, {auth.name}</h1>;
}
