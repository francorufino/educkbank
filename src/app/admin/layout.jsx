"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AdminLayout({ children, login }) {
  const { auth } = useContext(AuthContext);
  return <>{auth.isLogg ? children : login};</>;
}
