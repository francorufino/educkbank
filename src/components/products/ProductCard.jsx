"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import QtySelector from "./QtySelector";

const ProductCard = ({ item }) => {
  return (
    <article className="basis-72 shadow-lg rounded-lg flex flex-col">
      <div>
        <Link
          href={`/educkstore/productosSlug/${item.slug}`}
          className="flex flex-col"
        >
          {" "}
          <div>
            <Image
              alt={"ImageProduct"}
              src={""}
              width={300}
              height={300}
              className="rounded-t-lg "
            />
          </div>
          <div className=" px-4 border-t border-gray-200">
            <h4 className="text-sm my-4">{item.title}</h4>
            <p className="text-2xl font -semibold mb-6">${item.price}</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-end mb-8 mr-4">
        <QtySelector item={item} />
      </div>
    </article>
  );
};

export default ProductCard;
