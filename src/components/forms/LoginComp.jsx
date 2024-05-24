"use client";

// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// export default function Login() {
//   const { createUser, login } = useContext(AuthContext);
//   return (
//     <>
//       <h1>LOGIN page...</h1>
//       <section>
//         <h2>Crear usuario:</h2>
//         <button className="bg-red-500" onClick={createUser}>
//           Crear usuario
//         </button>
//         <h2>Login:</h2>
//         <button className="bg-green-500" onClick={login}>
//           Iniciar sesion
//         </button>
//       </section>
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import Button from "../button/Button";
import { InputText } from "./Input";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/app/context/AuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(values) {
    try {
      await login(values.email, values.password);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-myellow rounded-2xl mt-4 p-8">
      <section className="flex justify-center mt-8">
        <form className="w-full max-w-md " onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <section className="mb-6">
            <InputText
              label={"Email"}
              placeholder={"john@example.com"}
              register={register}
              errors={errors}
              errorMessage={"Email is required"}
              inputKey="email"
              className="focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors duration-300 bg-white border border- focus:bg-yellow-200 focus:border-transparent focus:border-orange-500"
            />
          </section>
          {/* Password */}
          <section className="mb-6">
            <InputText
              label={"Password"}
              placeholder={"Type your password"}
              register={register}
              errors={errors}
              errorMessage={"Password is required"}
              inputKey="password"
              type="password"
            />
          </section>

          <section className="flex justify-center">
            <Button
              className="!bg-dgray text-white hover:!bg-morange"
              disabled={loading || Object.keys(errors).length > 0}
            >
              Login
            </Button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default Login;
