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
        <div className="relative w-full h-[300px]">
          <Image
            alt={"ImageProduct"}
            src={item.image}
            layout="fill"
            className="rounded-t-lg object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col p-4 h-full">
        <div className="border-t border-gray-200">
          <h4 className="mb-4 font-semibold">{item.title}</h4>
          <p className="text-2xl font-semibold mb-6">${item.price}</p>
        </div>
        <div className="flex flex-1 justify-end border-t border-[#fec53b] ">
          <QtySelector item={item} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
