"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";
import { AuthContext } from "@/app/context/AuthContext";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard", isHidden: false },
    { label: "Educkstore", href: "/educkstore", isHidden: false },
    { label: "About", href: "/about", isHidden: false },
    { label: "Login", href: "/auth", isHidden: auth.isLoggedIn },
    // { label: "Register", href: "/auth", isHidden: auth.isLoggedIn },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-dgray">
      <section className="container max-w-screen-xl pl-8 m-auto py-6 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/educklogo2.png"}
            width={150}
            height={150}
            alt="eDuck Logo"
            priority
          />
        </Link>

        <section className="flex space-x-4 justify-center items-center">
          <nav className="px-8 hidden md:flex justify-between align-baseline gap-2">
            {links.map(link => {
              return (
                !link.isHidden && (
                  <React.Fragment key={link.label}>
                    <Link
                      href={link.href}
                      className={`${
                        pathname === link.href ? "text-morange" : ""
                      } text-base text-white font-semibold hover:text-myellow `}
                    >
                      {link.label}
                    </Link>
                  </React.Fragment>
                )
              );
            })}
            {auth.isLoggedIn && (
              <button
                onClick={logout}
                className="text-base text-white font-semibold hover:text-myellow"
              >
                Log out
              </button>
            )}
          </nav>

          <section
            id="MENU-MOBILE"
            className="flex md:hidden text-white h-full items-center"
          >
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </section>

          <CartIcon />
        </section>
      </section>

      <section
        className={`md:hidden bg-dgray text-white  transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 pb-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col text-center space-y-4">
          {links.map(link => {
            return (
              !link.isHidden && (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href ? "text-myellow" : ""
                    } text-base font-semibold hover:text-myellow`}
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              )
            );
          })}
          {auth.isLoggedIn && (
            <button
              onClick={() => {
                logout();
                toggleMenu(); // Close menu on logout
              }}
              className="text-base font-semibold hover:text-myellow"
            >
              Log out
            </button>
          )}
        </nav>
      </section>
    </header>
  );
};

export default Header;

// my code:
// import React, { useContext } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import CartIcon from "./CartIcon";
// import { AuthContext } from "@/app/context/AuthContext";
// import { Menu } from "lucide-react";

// const Header = () => {
//   const { auth, logout } = useContext(AuthContext);
//   const pathname = usePathname();

//   const links = [
//     { label: "Home", href: "/" },
//     { label: "Dashboard", href: "/dashboard", isHidden: false },
//     { label: "Educkstore", href: "/educkstore", isHidden: false },
//     { label: "About", href: "/about", isHidden: false },
//     { label: "Login", href: "/auth", isHidden: auth.isLoggedIn },
//     // { label: "Register", href: "/auth", isHidden: auth.isLoggedIn },
//   ];

//   return (
//     <header className={`w-full bg-dgray `}>
//       <section className="container max-w-screen-xl pl-8 m-auto py-600 flex justify-between items-center">
//         {/* <p className="text-4xl text-bold text-orange-200 mt-12 mb-12">
//           eDuck Bank
//         </p> */}
//         <Link href={"/"}>
//           <Image
//             src={"/educklogo2.png"}
//             width={150}
//             height={150}
//             alt="eDuck Logo"
//             priority
//           />
//         </Link>

//         <section className="flex space-x-4 justify-center items-center">
//           <nav className="px-8 flex justify-between align-baseline gap-2">
//             {links.map(link => {
//               return (
//                 !link.isHidden && (
//                   <React.Fragment key={link.label}>
//                     <Link
//                       href={link.href}
//                       className={`${
//                         pathname === link.href ? "text-morange" : ""
//                       }text-base  text-white font-semibold hover:text-myellow `}
//                     >
//                       {link.label}
//                     </Link>
//                   </React.Fragment>
//                 )
//               );
//             })}{" "}
//             {auth.isLoggedIn && (
//               <button
//                 onClick={logout}
//                 className="text-base  text-white font-semibold hover:text-myellow "
//               >
//                 Log out
//               </button>
//             )}
//           </nav>
//           <section
//             id="MENU-MOBILE"
//             className="flex lg:hidden text-white h-full items-center"
//           >
//             {" "}
//             <Menu />
//           </section>
//           <CartIcon />
//         </section>
//       </section>
//     </header>
//   );
// };

// export default Header;
