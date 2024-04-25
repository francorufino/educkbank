import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";

// eslint-disable-next-line react/prop-types

const page = () => {
  return (
    <div>
      <h3 className="text-[#ec552a] font-black text-2xl mt-12">
        Quack Clubhouse
      </h3>
      <div className=" mt-4 mb-4 rounded-md">
        <p>
          <span className="text-[#ec552a] font-bold">When:</span> Every Saturday
        </p>
        <p>
          <span className="text-[#ec552a] font-bold">Time:</span> 7:00 pm to
          10:00 pm
        </p>
        <p>
          <span className="text-[#ec552a] font-bold ">Where:</span>{" "}
          <span className="underline">The Quack House</span>
        </p>
      </div>
      {/* <Image
        src={"/firepit.jpg"}
        width={300}
        height={500}
        className=" rounded-lg float-left mr-4 mb-4"
        alt="two women firepit"
      /> */}
      <p>
        Our Quack Clubhouse offers a range of dynamic classes and events
        designed to nurture personal growth and sense of community along with
        other social activities. From fitnes classes like Yoga, and Zumba to
        Salsa and Ballroom Dance, to lecture and workshop nights.
      </p>
      <p>
        Fondue, firepit, movie, and party nights are also hosted at Quack
        Clubhouse and even though alcoholic drinks are not permitted in our
        site, we garantee the parties at Quackclubhouse are quack-tastic and
        unforgetable.
      </p>
      <p>
        Additionally, members of the Quack Clubhouse can enjoy bonding
        experiences like BBQ cooking classes, sports leagues, or even friendly
        competitions such as trivia or board games tournaments. These offerings
        provide a perfect opportunity for building friendships, and meaningful
        connections.
      </p>
      <p>
        Moreover, members have the opportunity to join arts and craft classes
        tailored for adults, where they can craft handmade items destined for
        charitable causes. These activities encompass crafting cozy blankets for
        homeless shelters, crafting heartfelt greeting cards for nursing home
        residents, and assembling care packages for deployed military personnel,
        or food packages for people and animals in areas affected by natural
        disasters.
      </p>
      <div className="text-xl font-blod">
        {" "}
        <br />
        <p className="font-bold text-lg">Some photos of the Quack Clubhouse</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        <Image
          src={"/bbq10.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/book1.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/charity11.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/cooking5.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/firepit.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/games5.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/paint5.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/photo2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/social1.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/yoga5.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/zumba2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
      </div>

      <div className="flex justify-center mt-8 mb-4">
        <Button>Join Quack Clubhouse</Button>
      </div>
      <div className="flex justify-center underline"> </div>
    </div>
  );
};

export default page;
