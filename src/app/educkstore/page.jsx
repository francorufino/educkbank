import ProductCard from "@/components/products/ProductCard";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";
import { db } from "../../lib/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function getAllProducts() {
  const productsRef = collection(db, "productsFirebase");
  const querySnapshot = await getDocs(productsRef);
  const docs = querySnapshot.docs.map((e) => e.data());
  return docs;
}

const EduckStore = async () => {
  const products = await getAllProducts();
  console.log(products);
  
  return (
    <main className="container m-auto flex justify-center items-center gap-12 flex-wrap">
    {products.length === 0 ? (
      <div className="w-full h-screen flex justify-center items-flex-start">
        <span className="italic text-2xl">We did Not Find Any Products</span>
      </div>
    ) : (
      products.map((item) => (
        <Suspense key={item.slug} fallback={<Loading />}>
          <ProductCard item={item} />
        </Suspense>
      ))
    )}
  </main>
  );
};

export default EduckStore;
