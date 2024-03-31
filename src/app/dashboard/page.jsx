import Image from "next/image";
import React from "react";
import Statement from "./Statement";

const dashboard = () => {
  return (
    <>
      <div className="flex mt-[50px] container">
        <section className="flex-2/3 ">
          <div>
            <p className="text-[#6b7280]">March, 27th 2024 | Partly Cloudy</p>
          </div>
          <div className="mb-12 font-bold text-3xl">
            <p className="tracking-widest ">Hello, Rebecca</p>
          </div>
          <p className="font-bold mb-4 text-[#6b7280]">
            What do you want to do today?
          </p>
          <div className="flex border-2 border-[#6b7280] justify-center mr-24 gap-6 basis-72 shadow shadow-black-500/50 rounded-lg p-8">
            <div>
              <p>
                <Image
                  src="/transfer2.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                />
              </p>
              <p className="text-center mt-2">Transfer</p>
            </div>
            <div>
              <p>
                <Image
                  src="/bill3.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                />
              </p>
              <p className="text-center mt-2">Pay Bills</p>
            </div>
            <div>
              <Image
                src="/statement2.png"
                width={50}
                height={50}
                className="text-center ml-5 mr-5"
              />
              <p className="text-center mt-2">Statetment</p>
            </div>
            <div>
              <p>
                <Image
                  src="/card.png"
                  width={50}
                  height={50}
                  className="text-center ml-5 mr-5"
                />
              </p>
              <p className="text-center mt-2">Pay Card</p>
            </div>
          </div>
          <div className="mr-24">
            <Statement />
          </div>
        </section>
        <section className="flex-1/3 ml-6">
          <p className="mb-2 text-2xl text-center text-9 font-bold">
            Your Accounts{" "}
          </p>
          <div className="bg-[#fec53b] mb-4 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
            <p className="font-bold text-xl mb-3">Checking Account</p>
            <p className="text-2xl ">$ 2,859.84</p>
          </div>
          <div className="bg-[#ec552a] text-white mb-8 px-4 py-8 flex flex-col justify-center rounded-lg shadow-md text-center text-lg">
            <p className="font-bold text-xl mb-3">Savings Account</p>
            <p className="text-2xl ">$ 48,988.20</p>
          </div>
          <hr class="h-px -ml-2 mr-2 my-4 bg-white border-0 "></hr>
          <div>
            <section className="text-center font-bold text-2xl my-4">
              <p className="mb-2 font-bold">Your Tokens</p>
              <div className="flex justify-center items-center">
                <Image src="/educklogo2.png" width={50} height={50} />
                <p className="ml-2">235</p>
              </div>
            </section>

            <hr class="h-px -ml-2 mr-2 my-4 bg-white border-0 "></hr>
            <p className="mb-4 text-center font-bold text-2xl">Your Cards</p>

            {/* // usar grid aqui por causa do overlapping dos numeros ??*/}
            <div className="flex justify-center">
              <div className="mb-[20px] flex flex-col justify-center">
                <Image
                  src="/quackprodebitblank.png"
                  width={300}
                  height={200}
                  className="rounded-xl "
                />
                <div className="text-left -mt-[110px] ">
                  <p className=" text-2xl mt-16 ml-[160px]">$1,765.23</p>
                </div>
              </div>
            </div>
            <div className="mb-[40px] flex justify-center">
              <div>
                <Image
                  src="/quackprocreditblank.png"
                  width={300}
                  height={200}
                  className="rounded-xl"
                />
                <div className="text-left -mt-[110px] flex flex-col">
                  <p className=" text-2xl mt-16 ml-[180px]">$587.01</p>
                </div>
              </div>
            </div>
          </div>
          <hr class="h-px  bg-white border-0 "></hr>
          <p className="mb-4 text-center font-bold text-2xl mt-4">
            Your Linked Cards
          </p>
          <div className="mb-[20px] flex justify-center">
            <div>
              <Image
                src="/quackprocreditblank.png"
                width={300}
                height={200}
                className="rounded-xl"
              />
              <div className="text-left -mt-[110px] flex flex-col">
                <p className=" text-2xl mt-16 ml-[180px]">$587.01</p>
              </div>
            </div>
          </div>
          <div className="mb-[40px] flex justify-center">
            <div>
              <Image
                src="/quackprocreditblank.png"
                width={300}
                height={200}
                className="rounded-xl"
              />
              <div className="text-left -mt-[110px] flex flex-col">
                <p className=" text-2xl mt-16 ml-[180px]">$587.01</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default dashboard;
