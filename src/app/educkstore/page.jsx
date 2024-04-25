"use client";

import ProductCard from "@/components/products/ProductCard";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const EduckStore = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const productsFromDb = await getAllProducts();
      setProducts(productsFromDb);
    })();
  }, []);

  async function getAllProducts() {
    try {
      const response = await fetch("/api/products");
      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="container m-auto flex justify-center items-center gap-12 flex-wrap mb-4">
      {products.length === 0 ? (
        <div className="w-full h-screen flex justify-center items-flex-start">
          <span className="text-2xl">We did not find any products</span>
        </div>
      ) : (
        products.map(item => (
          <Suspense key={item.slug} fallback={<Loading />}>
            <ProductCard item={item} />
          </Suspense>
        ))
      )}
    </main>
  );
};

export default EduckStore;
