/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "@/components/button/Button";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <h3 className="text-morange font-black text-2xl mt-12">Nest Clubhouse</h3>
      <div className=" mt-4 mb-4 rounded-md">
        <p>
          <span className="text-morange font-bold">When:</span> Every Saturday
        </p>
        <p>
          <span className="text-morange font-bold">Time:</span> 9:00 am to 12:00
          pm <span className="text-morange font-black"> OR </span> 2:00pm to
          5:00 pm
        </p>
        <p>
          <span className="text-morange font-bold ">Where:</span>{" "}
          <span className="underline">The Quack House</span>
        </p>
      </section>
      <br />
      <Image
        src={"/friends.jpg"}
        width={300}
        height={500}
        className=" rounded-lg float-right ml-4 mb-4"
        alt="friends talking"
      />
      <p>
        While kids are fully engaged in their learning adventures, at the
        Duckling Clubhouse, parents can explore a variety of engaging activities
        tailored just for them. Dive into our lineup of dynamic classes and
        events designed to nurture personal growth and sense of community. From
        fitness classes like <span>Yoga </span>
        and <span>Zumba </span> to hands-on DIY workshops such as{" "}
        <span>woodworking </span> to <span>home improvement hacks, </span>
        there's something to cater to every interest and need.
      </p>
      <br />
      <p>
        Additionally, parents can enjoy bonding experiences like{" "}
        <span>cooking and BBQ classes </span>,<span> sports leagues</span>, or
        even friendly competitions such as <span>trivia </span> and{" "}
        <span>board games </span>
        games tournaments. Parents can also indulge in moments of relaxation and
        <span> socialization </span>with activities as <span>book clubs, </span>{" "}
        or even hobby-based workshops such as <span>painting </span> or{" "}
        <span>photography</span>. These offerings provide a perfect opportunity
        for parents to recharge, build friendships, and enjoy some well-deserved
        "me time" while their children thrive in their own learning journeys.
      </p>
      <br />
      <p>
        Moreover, parents have the opportunity to join{" "}
        <span>arts and craft classes </span>
        tailored for adults, where they can craft handmade items destined for
        <span> charity causes </span>. These activities encompass{" "}
        <span> crafting cozy blankets for homeless shelters</span>,{" "}
        <span>
          crafting heartfelt greeting cards for nursing home residents{" "}
        </span>
        , and{" "}
        <span>assembling care packages for deployed military personnel</span>,
        or{" "}
        <span>
          ood packages for people and animals in areas affected by natural
          disasters
        </span>
        . By participating in any of our charity projects, parents not only
        unleash their creativity, serving as positive role models for their
        children, imparting the importance of altruism and community engagement
        but also earn <span>tokens</span> to redeem in our online store.
      </p>
      <div className="text-xl font-blod">
        {" "}
        <br />
        <p className="font-bold text-lg">Some photos of the Nest Clubhouse</p>
      </section>
      <br />
      <div className="flex flex-wrap justify-center">
        <Image
          src={"/social9.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/social3.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/cooking8.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/bbq11.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/charity3.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/book2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/games4.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/paint2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/sport2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/winter5.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/wood4.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/yoga2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/zumba1.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
      </section>

      {/* <PhotoGallery /> */}
      <div className="flex justify-center mt-8 mb-4">
        <Button>Join Nest Clubhouse</Button>
      </section>
      <div className="flex justify-center underline">
        {" "}
        <p>Photo Gallery</p>
      </section>
    </section>
  );
};

export default page;
