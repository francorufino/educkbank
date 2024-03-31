import React from "react";
import Button from "@/components/button/Button";
import GoBack from "@/components/ui/GoBack";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mt-8">Welcome to Educk Bank</h1>
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
        to meet the diverse needs of our customers. From our Duckling Checking
        Account for young savers to our Parent Nest Club and Quack Family
        Membership for parents, we have something for everyone.
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
        offer the Duckling Clubhouse, a place where children can learn valuable
        financial skills through interactive workshops and activities. We also
        encourage families to participate in charitable events and support local
        causes together.
      </p>

      <p>
        Thank you for choosing eDuck Bank as your trusted financial partner. We
        look forward to serving you and your family!
      </p>
      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <Button className="mt-10 mb-10 ml-9">
          <GoBack />
        </Button>
      </div>
    </div>
  );
};

export default About;
