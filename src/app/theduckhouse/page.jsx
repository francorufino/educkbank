/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "@/components/button/Button";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <h3 className="text-morange font-black text-2xl mt-12">The Duck House</h3>
      <div className=" mt-4 mb-4 rounded-md">
        <p>
          <span className="text-morange font-bold">When:</span> Every Saturday
        </p>
        <p>
          <span className="text-morange font-bold">Time:</span> Open from 9:00
          am to 10:00 pm
        </p>
        <p>
          <span className="text-morange font-bold ">Where:</span> Check the
          location available with your account manager
        </p>

        <p>Why?</p>
        <p>
          1. So you are updated with the latest ones, since we have new
          locations opening all the time.
        </p>
        <p>
          2. If you are out of the city, you and your family can attend the
          location in the city you are staying at the moment
        </p>
      </section>
      <br />
      <section>
        <h1 className="text-lg font-bold">Welcome to The Duck House!</h1>
        <br />
        <p>
          The Duck House is a vibrant community space where families and
          individuals come together to learn, grow, and connect. Our facility
          houses three unique clubhouses designed to cater to different age
          groups and interests.
        </p>
        <br />
      </section>

      <section>
        <h2 className="font-bold">The Quack Clubhouse</h2>
        <p>
          The Quack Clubhouse is specially designed for adults without children.
          Here, individuals can enjoy unique activities focused on personal
          growth, socialization, and community engagement. From cooking classes
          to book clubs, there's something for every single adult.
        </p>{" "}
        <br />
        <h2 className="font-bold">Nest Clubhouse</h2>
        <p>
          The Nest Clubhouse is where kids can engage in enriching learning
          experiences while parents explore a variety of engaging activities
          tailored just for them. From fitness classes like Yoga and Zumba to
          hands-on DIY workshops such as woodworking, there's something for
          everyone.
        </p>
        <br />
        <h2 className="font-bold">Duckling Clubhouse</h2>
        <p>
          At the Duckling Clubhouse, children participate in fun and educational
          classes covering a range of topics from art and coding to financial
          literacy. Meanwhile, parents can relax and socialize with other adults
          or join arts and craft classes designed for grown-ups.
        </p>
        <p>
          Come join us at The Duck House and be part of a vibrant community
          dedicated to learning, growth, and fun!
        </p>
      </section>

      <p className="text-xl font-blod">
        {" "}
        <br />
        Here are some of our clubhouses all over the country
      </p>
      <br />
      <div className="flex flex-wrap justify-center">
        <Image
          src={"/clubhouse2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse1.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/clubhouse8.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse9.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse10.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse11.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse12.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/clubhouse16.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse17.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/clubhouse19.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse20.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/clubhouse21.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
      </section>
      <div className="flex justify-center mt-8 mb-4">
        <Button>Join a Clubhouse</Button>
      </section>
    </section>
  );
};

export default page;
