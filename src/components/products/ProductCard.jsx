import Image from "next/image";
import Link from "next/link";
import QtySelector from "./QtySelector";

const ProductCard = ({ item }) => {
  return (
    <article className="shadow-md basis-72 rounded-lg flex flex-col h-[570px] transition-all hover:shadow-lg">
      <Link
        href={`/educkstore/productosSlug/${item.slug}`}
        className="flex flex-col"
      >
        <section className="relative w-full h-[300px]">
          <Image
            alt={"ImageProduct"}
            src={item.image}
            layout="fill"
            className="rounded-t-lg object-cover"
          />
          <div class="absolute inset-2 flex items-end justify-end">
            {item.inStock > 0 ? (
              <span class="text-white text-xs ">in stock: {item.inStock}</span>
            ) : (
              ""
            )}
          </div>
        </section>
      </Link>
      <section className="flex flex-col p-4 h-full">
        <section className="border-t border-gray-200">
          <h4 className="mb-4 font-semibold">{item.title}</h4>
          <p className="text-2xl font-semibold mb-6">${item.price}</p>
        </section>
        <section className="flex flex-1 justify-center border-t border-dgray ">
          <section>
            <QtySelector item={item} />
          </section>
        </section>
      </section>
    </article>
  );
};

export default ProductCard;
