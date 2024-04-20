import React, { Suspense } from "react";
import data from "@/data/products.json";
import ProductCard from "@/components/products/ProductCard";
import Loading from "../../../../components/ui/Loading";

const productCategoria = ({ params }) => {
  const { categoria } = params;

  const productFilter =
    categoria === "all"
      ? data.mockData
      : data.mockData.filter((item) => item.type === categoria);
  console.log(categoria);
  console.log("consumindo desde o arquivo productcategoria");
  return (
    <>
      <div className="container m-auto flex justify-center items-center gap-12 flex-wrap">
        <Suspense fallback={<Loading />}>
          {productFilter.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default productCategoria;
