"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";
import { AuthContext } from "@/app/context/AuthContext";

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard", isHidden: false },
    { label: "Educkstore", href: "/educkstore", isHidden: false },
    { label: "About", href: "/about", isHidden: false },
    { label: "Login", href: "/auth", isHidden: auth.isLoggedIn },
    // { label: "Register", href: "/auth", isHidden: auth.isLoggedIn },
  ];

  return (
    <header className={`w-full bg-dgray `}>
      <section className="container max-w-screen-xl m-auto py-600 flex justify-between items-center">
        {/* <p className="text-4xl text-bold text-orange-200 mt-12 mb-12">
          eDuck Bank
        </p> */}
        <Link href={"/"}>
          <Image
            src={"/educklogo2.png"}
            width={150}
            height={150}
            alt="eDuck Logo"
            className="ml-[18px]"
            priority
          />
        </Link>

        <section className="flex space-x-4 justify-center items-center">
          <nav className="px-8 flex justify-between align-baseline gap-2">
            {links.map(link => {
              return (
                !link.isHidden && (
                  <React.Fragment key={link.label}>
                    <Link
                      href={link.href}
                      className={`${
                        pathname === link.href ? "text-orange-600" : ""
                      }text-base  text-orange-200 hover:underline hover:text-indigo-50`}
                    >
                      {link.label}
                    </Link>
                  </React.Fragment>
                )
              );
            })}{" "}
            {auth.isLoggedIn && (
              <button
                onClick={logout}
                className="text-base  text-orange-200 hover:underline hover:text-mlilas"
              >
                Log out
              </button>
            )}
          </nav>
          <CartIcon />
        </section>
      </section>
    </header>
  );
};

export default Header;
