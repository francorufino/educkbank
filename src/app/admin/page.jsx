"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Admin() {
  const { auth, logout } = useContext(AuthContext);
  return (
    <>
      <h1>page view ADMIN - Welcome, {auth.name} </h1>
      <button className="bg-myellow" onClick={logout}>
        logout
      </button>
      <h1>here will be the dashboard</h1>
    </>
  );
}

//codigo o professor
// "use client";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function Admin() {
//   const { auth, logout } = useContext(AuthContext);
//   return (
//     <>
//       <h1>page view ADMIN - Welcome, {auth.name} </h1>
//       <button className="bg-myellow" onClick={logout}>
//         logout
//       </button>
//     </>
//   );
// }
