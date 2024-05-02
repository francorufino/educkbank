"use client";

// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// export default function Login() {
//   const { createUser, login } = useContext(AuthContext);
//   return (
//     <>
//       <h1>LOGIN page...</h1>
//       <div>
//         <h2>Crear usuario:</h2>
//         <button className="bg-red-500" onClick={createUser}>
//           Crear usuario
//         </button>
//         <h2>Login:</h2>
//         <button className="bg-green-500" onClick={login}>
//           Iniciar sesion
//         </button>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import Button from "../button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Here you can handle form submission, validation, etc.
    console.log({ email, password });
    alert("Logging in...");
  };

  return (
    <div className="bg-[#fec53b] rounded-2xl mt-4 p-8">
      <div className="flex justify-center mt-8">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {/* Submit button */}
          <div className="flex justify-center">
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
