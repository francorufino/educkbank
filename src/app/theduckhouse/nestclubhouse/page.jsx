import React from "react";
import Button from "@/components/button/Button";

const page = () => {
  return (
    <div>
      <h3 className="text-[#ec552a] font-black text-2xl mt-12">
        Nest Clubhouse
      </h3>
      <div className=" mt-4 mb-4 rounded-md">
        <p>
          <span className="text-[#ec552a] font-bold">Where:</span> The Quack
          House
        </p>
        <p>
          <span className="text-[#ec552a] font-bold">When:</span> Every Saturday
        </p>
        <p>
          <span className="text-[#ec552a] font-bold">Time:</span> 9:00 am to
          12:00 pm <span className="text-[#ec552a] font-black"> OR </span>{" "}
          2:00pm to 5:00 pm
        </p>
      </div>
      <p>
        While kids are fully engaged in their learning adventures, parents can
        explore a variety of engaging activities tailored just for them. Dive
        into our lineup of dynamic classes and events designed to nurture
        personal growth and sense of community. From fitness classes like{" "}
        <span className="text-[#ec552a] ">Yoga </span>
        and <span className="text-[#ec552a] ">Zumba </span> to hands-on DIY
        workshops such as <span className="text-[#ec552a] ">woodworking </span>{" "}
        to <span className="text-[#ec552a] ">home improvement hacks </span>,
        there's something to cater to every interest and need.
      </p>
      <p>
        Additionally, parents can enjoy bonding experiences like{" "}
        <span className="text-[#ec552a] ">cooking and BBQ classes </span>,
        <span className="text-[#ec552a] "> sports leagues</span>, or even
        friendly competitions such as{" "}
        <span className="text-[#ec552a] ">trivia </span> and{" "}
        <span className="text-[#ec552a] ">board games </span>
        games tournaments. Parents can also indulge in moments of relaxation and
        <span className="text-[#ec552a] ">socialization </span>with activities
        as <span className="text-[#ec552a] ">book clubs, </span> or even
        hobby-based workshops such as{" "}
        <span className="text-[#ec552a] ">painting </span> or{" "}
        <span className="text-[#ec552a] ">photography</span>. These offerings
        provide a perfect opportunity for parents to recharge, build
        friendships, and enjoy some well-deserved "me time" while their children
        thrive in their own learning journeys.
      </p>
      <p>
        Moreover, parents have the opportunity to join{" "}
        <span className="text-[#ec552a] ">arts and craft classes </span>
        tailored for adults, where they can craft handmade items destined for
        <span className="text-[#ec552a] "> charity causes </span>. These
        activities encompass{" "}
        <span className="text-[#ec552a] ">
          {" "}
          crafting cozy blankets for homeless shelters
        </span>
        ,{" "}
        <span className="text-[#ec552a] ">
          crafting heartfelt greeting cards for nursing home residents{" "}
        </span>
        , and{" "}
        <span className="text-[#ec552a] ">
          assembling care packages for deployed military personnel
        </span>
        , or{" "}
        <span className="text-[#ec552a] ">
          ood packages for people and animals in areas affected by natural
          disasters
        </span>
        . By participating in any of our charity projects, parents not only
        unleash their creativity, serving as positive role models for their
        children, imparting the importance of altruism and community engagement
        but also earn{" "}
        <span className="text-[#ec552a] font-extrabold">tokens</span> to redeem
        in our online store.
      </p>
      <h2 className="text-[#ec552a] font-bold mt-4">
        But what about the children?
      </h2>
      <p>
        Children will spend their time learning tons of valuable things in the
        Duckling Clubhouse! Click here to learn more about the Ducking Clubhouse
      </p>
      <h3 className="text-[#ec552a] underline mb-8 mt-12 flex justify-center">
        Check our photo gallery
      </h3>
      {/* <PhotoGallery /> */}
      <div className="flex justify-center mb-12">
        <Button>Join Nest Clubhouse</Button>
      </div>
    </div>
  );
};

export default page;
