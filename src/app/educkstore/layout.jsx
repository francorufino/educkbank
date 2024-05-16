"use client";

import CategoriesMenu from "@/components/products/CategoriesMenu";
import React from "react";
import { usePathname } from "next/navigation";

const EduckStoreLayout = ({ children }) => {
  const pathname = usePathname();
  const isADetailPage = pathname?.includes("/productosSlug");

  return (
    <section>
      <h2 className="text-3xl mt-8 pb-4 ">Educk Store</h2>
      {!isADetailPage && <CategoriesMenu />}
      {children}
    </section>
  );
};

export default EduckStoreLayout;
