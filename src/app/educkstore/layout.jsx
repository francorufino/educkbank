// import CategoriesMenu from "@/components/products/CategoriesMenu";
import React from "react";

const EduckStoreLayout = ({ children }) => {
  return (
    <div>
      <h2 className="text-3xl mt-8 pb-4 ">Educk Store</h2>
      {/* <CategoriesMenu /> */}
      {children}
    </div>
  );
};

export default EduckStoreLayout;
