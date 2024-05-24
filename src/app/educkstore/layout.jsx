"use client";

import CategoriesMenu from "@/components/products/CategoriesMenu";
import React from "react";
import { usePathname } from "next/navigation";
import TitleH1 from "@/components/ui/TitleH1";

const EduckStoreLayout = ({ children }) => {
  const pathname = usePathname();
  const isADetailPage = pathname?.includes("/productosSlug");

  return (
    <section>
      <TitleH1 className="text-3xl mt-8 pb-4 ">Educkstore</TitleH1>
      {!isADetailPage && <CategoriesMenu />}
      {children}
    </section>
  );
};

export default EduckStoreLayout;
