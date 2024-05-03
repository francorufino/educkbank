/* eslint-disable react/no-unescaped-entities */
"use client";

import { useAuthContext } from "../../context/AuthContext";
import Register from "@/components/forms/Register";
import LoginComp from "@/components/forms/LoginComp";

export default function Login() {
  const { createUser, login } = useAuthContext;
  return (
    <>
      <h1>LOGIN page...</h1>
      <div>
        <h2>Crear usuario:</h2>
        <button className="bg-red-500" onClick={createUser}>
          Crear usuario
        </button>
        <h2>Login:</h2>
        <button className="bg-green-500" onClick={login}>
          Iniciar sesion
        </button>
      </div>
      <h1 className="text-2xl mt-8">
        Hello there, we are very happy to see you here!
      </h1>
      <h1 className="text-2xl mt-2">Let's get you started!</h1>

      <div className="flex flex-wrap justify-center mt-12 mb-8">
        <div className="justify-center">
          <p className="text-lg font-bold flex mt-8 justify-center">Log in</p>
          <LoginComp />
        </div>
        <div className="justify-center flex mt-[200px]">
          <p className="font-bold mx-12">OR</p>
        </div>
        <div className="justify-center">
          <p className="text-lg font-bold flex mt-8 justify-center">Sign up</p>
          <Register />
        </div>
      </div>
    </>
  );
}

//codigo do professor
// "use client";

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
