import data from "../../data/products.json";
import ProductCard from "@/components/products/ProductCard";
export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `educk Bank - ${params.categoria}` };
}

const EduckStore = () => {
  return (
    <main className="container m-auto ">
      <div>
        <div className="flex flex-wrap justify-center gap-8">
          {data.mockData.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default EduckStore;
