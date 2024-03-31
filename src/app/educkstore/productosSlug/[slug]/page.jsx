import React from "react";
import data from "@/data/products.json";
import ProductDetail from "@/components/products/ProductDetail";

const page = ({ params }) => {
  const { slug } = params;
  const productSlug = data.mockData.filter((item) => item.slug === slug);
  return (
    <div>
      <ProductDetail item={productSlug[0]} />
    </div>
  );
};

export default page;
