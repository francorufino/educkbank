/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "@/components/button/Button";

const eDuckFamilyMembership = () => {
  return (
    <div>
      <h1 className="text-4xl mt-8">Educk Family Membership</h1>
      <p className="text-lg mt-4">
        Introducing the "eDuck Family Membership"! This exclusive membership
        offers a wealth of benefits for both kids and parents alike, providing
        access to the Duckling Clubhouse for children and the Nest Clubhouse for
        the parents.
      </p>

      <p className="text-lg mt-4">
        With the eDuck Family Membership, families can enjoy all the perks of
        membership at an incredibly low price. Not only do members gain access
        to our enriching savings and parent programs, but they also receive
        special discounts at select stores across the city. From groceries to
        clothing, dining, and more, our members can save big while supporting
        local businesses.
      </p>

      <p className="text-lg mt-4">
        But that's not all! As part of the eDuck Family Membership, parents also
        receive valuable perks towards their children's college education. Enjoy
        discounts on college textbooks, tuition fees, and even savings on
        college essentials like dorm supplies and electronics. We're committed
        to helping families save money and invest in their children's future,
        starting from their earliest years all the way through college.
      </p>

      <p className="text-lg mt-4">
        And here's the best part: With the eDuck Family Membership, classes at
        the Duckling Clubhouse and the Nest Clubhouse are completely free of
        charge! Non-members can still participate in these programs for a fee of
        $25 per month per person, but why pay more when you can enjoy all these
        benefits at a fraction of the cost?
      </p>

      <p className="text-lg mt-4">
        Join the eDuck Family Membership today for just $300 per year for
        parents and their children in the same household, covering up to 6
        family members. It's an unbeatable value for financial education,
        personal growth, community connection, and support towards your
        children's college aspirations!
      </p>

      <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <Button className="mt-10 mb-10 ml-9">Join now</Button>
      </div>
    </div>
  );
};

export default eDuckFamilyMembership;
