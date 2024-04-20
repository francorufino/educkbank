import data from "../../data/products.json";
import ProductCard from "@/components/products/ProductCard";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading";

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `educk Bank - ${params.categoria}` };
}

const EduckStore = () => {
  console.log("chegou aqui no page da educkstore");
  return (
    <main className="container m-auto ">
      <div>
        <div className="flex flex-wrap justify-center gap-8">
          <Suspense fallback={<Loading />}>
            {data.mockData.map((item) => (
              <ProductCard key={item.slug} item={item} />
            ))}{" "}
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default EduckStore;
