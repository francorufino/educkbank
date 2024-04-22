import React, { Suspense } from "react";
import data from "@/data/products.json";
import ProductCard from "@/components/products/ProductCard";
import Loading from "../../../../components/ui/Loading";
import { db } from "@/lib/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getCategoryProducts = async (category) => {
  const productsRef = collection(db, "productsFirebase");
  const q =
    category === "all"
      ? productsRef
      : query(productsRef, where("type", "==", category));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((e) => e.data());
  return docs;
};

const productCategoria = async ({ params }) => {
  const productsFilterCategory = await getCategoryProducts(params.categoria);

  return (
    <main className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {productsFilterCategory.length === 0 ? (
        <div className="w-full h-screen flex justify-center items-flex-start">
          <span className="italic text-2xl">We did Not Find Any Products</span>
        </div>
      ) : (
        productsFilterCategory.map((item) => (
          <Suspense key={item.slug} fallback={<Loading />}>
            <ProductCard item={item} />
          </Suspense>
        ))
      )}
    </main>
  );
};

export default productCategoria;
