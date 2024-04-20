"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Shop", href: "/educkstore" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/auth/login" },
  { label: "Register", href: "/auth/register" },
  { label: "Logout", href: "/logout" },
  { label: "Posts", href: "/posts" },
  {
    label: <Image src={"/cart.png"} width={50} height={50} />,
    href: "/cart/cartpage"
  }
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={`w-full bg-gray-500 `}>
      <div className="container max-w-screen-xl m-auto py-600 flex justify-between items-center">
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
          />
        </Link>
        {/* fazer um ternario aqui para mudar as opcoes da navegacao se user logado 
if logado: home, dashboard, about, contact, Logout
else somente home, about, contact, login */}

        <nav className="px-8 flex justify-between align-baseline gap-2">
          {links.map((link) => {
            return (
              <>
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${
                    pathname === link.href ? "text-orange-600" : ""
                  }text-base  text-orange-200 hover:underline hover:text-indigo-50`}
                >
                  {link.label}
                </Link>
              </>
            );
          })}{" "}
        </nav>
      </div>
    </header>
  );
};

export default Header;
