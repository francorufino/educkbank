import React from "react";
import data from "@/data/products.json";
import ProductCard from "@/components/products/ProductCard";

const productCategoria = ({ params }) => {
  const { categoria } = params;

  const productFilter =
    categoria === "all"
      ? data.mockData
      : data.mockData.filter((item) => item.type === categoria);
  console.log(categoria);
  return (
    <>
      <div className="container m-auto flex justify-center items-center gap-12 flex-wrap">
        {productFilter.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </>
  );
};

export default productCategoria;
