import React, { Suspense } from "react";
import ProductDetail from "@/components/products/ProductDetail";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export const getOnlyProduct = async (slug) => {
  const productsRef = collection(db, "productsFirebase");
  const q = query(productsRef, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((e) => e.data());
  return docs;
};

const page = async ({ params }) => {
  const productBySlug = await getOnlyProduct(params.slug);
  console.log(productBySlug);
  return (
    <main>
      <Suspense fallback={"Getting Data Only Product"}>
        <ProductDetail item={productBySlug[0]} />
      </Suspense>
    </main>
  );
};

export default page;
