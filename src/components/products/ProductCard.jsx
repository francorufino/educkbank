"use client";
import Image from "next/image";
import Link from "next/link";
import QtySelector from "./QtySelector";

const ProductCard = ({ item }) => {
  return (
    <article className="basis-72 shadow-lg rounded-lg flex flex-col">
      <div>
        <div>
          <Link
            href={`/educkstore/productosSlug/${item.slug}`}
            className="flex flex-col"
          >
            <Image
              alt={"ImageProduct"}
              src={item.image}
              width={300}
              height={300}
              className="rounded-t-lg "
            />
            <div className="px-4 border-t border-gray-200">
              <h4 className="my-4 font-semibold">{item.title}</h4>
            </div>
          </Link>
          <p className="pl-4 text-2xl font -semibold mb-6">${item.price}</p>
        </div>
      </div>
      <div className="flex justify-end mb-8 mr-4">
        <QtySelector item={item} />
      </div>
    </article>
  );
};

export default ProductCard;
