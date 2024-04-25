"use client";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { createUser } = useContext(AuthContext);
  return (
    <>
      <h1>LOGIN page...</h1>
      <div>
        <h2>Crear usuario:</h2>
        <button className="bg-red-500" onClick={createUser}>
          Crear usuario
        </button>
      </div>
    </>
  );
}
