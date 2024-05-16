import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <>
      <h1>Our Cards</h1>
      <table className="mt-[50px] mb-[50px] mx-auto shadow-2xl font-[Poppins] border-2 border-white w-6/12 overflow-hidden">
        <thead className="text-white">
          <tr>
            <th className="py-3 bg-myellow">Looks</th>
            <th className="py-3 bg-myellow">Card Nanme</th>
            <th className="py-3 bg-myellow">Perks</th>
            <th className="py-3 bg-myellow"></th>
          </tr>
        </thead>
        <tbody className=" text-center">
          <tr className="  hover:bg-white hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">
              <Image
                src={"/waddlewingdebit.png"}
                alt="duckling card photo"
                width={200}
                height={100}
                className="rounded-xl"
              />
            </td>
            <td className="py-3 px-6">Waddle Wing Debit Card</td>
            <td className="text-left py-3 px-6">
              <ul>
                <li>Discount</li>
                <li>Free Shipping</li>
                <li>Example</li>
              </ul>
            </td>
            <td className="py-3 px-6">
              <Button>Choose</Button>
            </td>
          </tr>
          <tr className="  hover:bg-white hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">
              <Image
                src={"/waddlewingcreditcard.png"}
                alt="duckling card photo"
                width={200}
                height={100}
                className="rounded-xl"
              />
            </td>
            <td className="py-3 px-6">Waddle Wing Credit Card</td>
            <td className="text-left py-3 px-6">
              <ul>
                <li>Discount</li>
                <li>Free Shipping</li>
                <li>Example</li>
              </ul>
            </td>
            <td className="py-3 px-6">
              <Button>Choose</Button>
            </td>
          </tr>
          <tr className="  hover:bg-white hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">
              <Image
                src={"/quackprodebitcard.png"}
                alt="duckling card photo"
                width={200}
                height={100}
                className="rounded-xl"
              />
            </td>
            <td className="py-3 px-6">Quack Pro Debit Card</td>
            <td className="text-left py-3 px-6">
              <ul>
                <li>Discount</li>
                <li>Free Shipping</li>
                <li>Example</li>
              </ul>
            </td>
            <td className="py-3 px-6">
              <Button>Choose</Button>
            </td>
          </tr>
          <tr className="  hover:bg-white hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">
              <Image
                src={"/quackprocreditcard.png"}
                alt="duckling card photo"
                width={200}
                height={100}
                className="rounded-xl"
              />
            </td>
            <td className="py-3 px-6">Quack Pro Credit Card</td>
            <td className="text-left py-3 px-6">
              <ul>
                <li>Discount</li>
                <li>Free Shipping</li>
                <li>Example</li>
              </ul>
            </td>
            <td className="py-3 px-6">
              <Button>Choose</Button>
            </td>
          </tr>
          <tr className="  hover:bg-white hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">
              <Image
                src={"/ducklingdebitcard.png"}
                alt="duckling card photo"
                width={200}
                height={100}
                className="rounded-xl"
              />
            </td>
            <td className="py-3 px-6">Duckling Debit Card</td>
            <td className="text-left py-3 px-6">
              <ul>
                <li>Discount</li>
                <li>Free Shipping</li>
                <li>Example</li>
              </ul>
            </td>
            <td className="py-3 px-6">
              <Button>Choose</Button>
            </td>
          </tr>
          <tr className="  hover:bg-white hover:scale-105 cursor-pointer duration-300">
            <td className="py-3 px-6">
              <Image
                src={"/ducklingcreditcard.png"}
                alt="duckling card photo"
                width={200}
                height={100}
                className="rounded-xl"
              />
            </td>
            <td className="py-3 px-6">Duckling Credit Card</td>
            <td className="text-left py-3 px-6">
              <ul>
                <li>Discount</li>
                <li>Free Shipping</li>
                <li>Example</li>
              </ul>
            </td>
            <td className="py-3 px-6">
              <Button>Choose</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cards;
