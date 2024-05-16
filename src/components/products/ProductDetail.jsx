import Image from "next/image";
import QtySelector from "./QtySelector";
import GoBack from "../ui/GoBack";

const ProductDetail = ({ item }) => {
  return (
    <section className="max-w-4xl m-auto">
      <section className="flex items-center mb-4 gap-4">
        <section className="flex relative w-full h-[350px] basis-1/2">
          <Image
            alt={"Imagen Product"}
            src={item.image}
            layout="fill"
            className="rounded-lg object-cover"
          />
        </section>
        <section className="basis-1/2 flex flex-col justify-center text-black ">
          <section className="justify-center text-center border-2 border-dgray p-8">
            {" "}
            <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
              {item.title}
            </h2>
            <p className="text-4xl font-semibold">$ {item.price}</p>
            <section className="flex flex-col">
              <QtySelector item={item} />
            </section>
            <section className="flex justify-center mt-3">
              <GoBack className="text-lg text-morange underline mb-6 " />
            </section>
          </section>
        </section>
      </section>
      <section className="mt-2 flex flex-col mb-6 border-2 border-dgray">
        <section className="mx-20">
          <h3 className="text-xl front-semibold border-b border-gray-200  my-4">
            Description
          </h3>
          <p className="text-gray-600 pb-6">{item.description}</p>
        </section>
      </section>
    </section>
  );
};

export default ProductDetail;
