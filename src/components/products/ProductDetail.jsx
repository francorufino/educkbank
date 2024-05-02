import Image from "next/image";
import QtySelector from "./QtySelector";
import GoBack from "../ui/GoBack";

const ProductDetail = ({ item }) => {
  return (
    <div className="max-w-4xl m-auto">
      <section className="flex items-center mb-4 gap-4">
        <div className="flex relative w-full h-[350px] basis-1/2">
          <Image
            alt={"Imagen Product"}
            src={item.image}
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-center text-black ">
          <div className="justify-center text-center border-2 border-[#6b7280] p-8">
            {" "}
            <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
              {item.title}
            </h2>
            <p className="text-4xl font-semibold">$ {item.price}</p>
            <div className="flex flex-col">
              <QtySelector item={item} />
            </div>
            <div className="flex justify-center mt-3">
              <GoBack className="text-lg text-[#ec552a] underline mb-6 " />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-2 flex flex-col mb-6 border-2 border-[#6b7280]">
        <div className="mx-20">
          <h3 className="text-xl front-semibold border-b border-gray-200  my-4">
            Description
          </h3>
          <p className="text-gray-600 pb-6">{item.description}</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
