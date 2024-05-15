/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "@/components/button/Button";
import GoBack from "@/components/ui/GoBack";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mt-8 mb-8">Welcome to Educk Bank</h1>
      <Image
        src={"/piggybank.jpeg"}
        width={600}
        height={600}
        className=" rounded-lg float-right ml-2"
        alt="yellow eco-friendly toy ducks racing in a river"
      />
      <p className="text-lg mt-4">
        Where we are committed to making banking delightful, educational, and
        rewarding for the whole family. At eDuck Bank, we believe in financial
        empowerment and providing innovative solutions to help you achieve your
        financial goals.
      </p>
      <h2 className="text-3xl mt-8">Our Mission</h2>
      <p className="text-lg mt-4">
        Our mission is to provide a safe and secure environment for families to
        learn, save, and grow together. We strive to offer innovative banking
        products and services that cater to the unique needs of both children
        and adults, fostering a culture of financial responsibility and
        empowerment.
      </p>
      <h2 className="text-3xl mt-8">What We Offer</h2>
      <p className="text-lg mt-4">
        At eDuck Bank, we offer a wide range of products and services designed
        to meet the diverse needs of our customers. From our Duckling and adults
        and parents Accounts to our special memberships to our exciting
        clubhouses, we have something for everyone.
      </p>
      <h2 className="text-3xl mt-8">Annual Duck Dash</h2>
      <p className="text-lg mt-4">
        Join us for the Annual Duck Dash, a fun-filled event where families can
        enjoy eco-friendly duck racing, interactive games, and educational
        activities that promote financial literacy and family bonding. It's a
        quack-tastic adventure you won't want to miss!
      </p>
      <h2 className="text-3xl mt-8">Educk Bank Community</h2>

      <p className="text-lg mt-4">
        At eDuck Bank, we believe in giving back to the community. That's why we
        also encourage families to participate in charitable events and support
        local causes together.
      </p>

      <p>
        Thank you for choosing eDuck Bank as your trusted financial partner. We
        look forward to serving you and your family!
      </p>
      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <Button className="mt-10 ml-9">
          <GoBack />
        </Button>
      </div>
    </div>
  );
};

export default About;
