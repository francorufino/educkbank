/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "../../components/button/Button";
import Image from "next/image";
import PhotoGalleryPastEvents from "@/components/ui/PhotoGalleryPastEvents";

const AnualDuckDash = () => {
  return (
    <section>
      <h1 className="text-4xl mt-8">Annual Duck Dash</h1>
      <section className="flex">
        <section className=" text-lg mt-8">
          <Image
            src={"/educkracedash.jpg"}
            width={600}
            height={500}
            className=" rounded-lg float-right ml-2"
            alt="yellow eco-friendly toy ducks racing in a river"
          />
          <p>
            Get ready for the most quack-tastic event of the year – the Annual
            Duck Dash! Join us for a fun-filled day of eco-friendly duck racing,
            family-friendly activities, and community camaraderie.
          </p>
          <p>
            From unleashing your creativity at the Piggy Bank Decorating event
            to mastering budgeting skills in the Grocery Shopping Challenge,
            each activity sets the stage for an adventure filled with learning
            and excitement. After a satisfying lunch break, dive into
            entrepreneurship at the Lemonade Stand, where you'll turn groceries
            into refreshing drinks while honing your budgeting and customer
            service skills.
          </p>{" "}
          <p>
            Cap off the day with the Excel Extravaganza workshop, where you'll
            learn essential Excel formulas to compute your profits and create
            basic graphs. Then, join us for the thrilling Duck Race on the
            River, where thousands of rubber ducks compete for glory and prizes.
            Get ready to make a splash and experience banking like never before
            at the Annual Duck Dash!
          </p>
        </section>
      </section>
      <h2 className="text-4xl mt-8">What to Expect</h2>
      <section className="text-lg">
        <Image
          src={"/livemusic.jpg"}
          width={600}
          height={500}
          className="rounded-lg float-left mr-4"
          alt="live music"
        />
        <p className="mt-8">
          Get ready for an unforgettable experience at the Galena Riverfront
          Park! Witness the exhilarating Duck Race, where thousands of
          eco-friendly ducks race down the river in a thrilling display of speed
          and agility. Cheer on your favorite duck as it dashes towards the
          finish line, vying for glory and exciting prizes! But that's not all –
          immerse yourself in a day of fun and festivities, with live
          entertainment, delicious food vendors serving up local flavors, and a
          variety of kids' activities to keep the whole family entertained.
        </p>
        <p>
          Kids can also embark on a financial journey through interactive
          workshops, such as the Grocery Shopping Challenge, where they'll learn
          essential budgeting skills while preparing for the Entrepreneurial
          Lemonade Stand. Plus, seize the opportunity to make a positive impact
          in the community by supporting local charities and causes while
          enjoying the quack-tastic atmosphere of the Annual Duck Dash!
        </p>
        <p>
          If you want to go even further and make a huge duck-fference in the
          world, for a very low fee (you decide how much!), you can adopt ducks,
          ducklings, cats, dogs and rabbits in the event and give these animals
          a place to finally call home! All animals available for adoption are
          rescued animlas and all proceeds from animals adoptions will benefit
          "Feathered Friends Foundation" - that is focused on supporting local
          wildlife conservation efforts, particularly for birds and their
          habitats and others local animal shelters.{" "}
        </p>
        <p>
          Last but not least, by adopting any of the animals, you'll be
          receiving tokens to reedem in our online store or any affiliate
          participants spread all over the country.
        </p>
      </section>
      <h2 className="text-4xl mt-8">How to Participate</h2>
      <p>
        Want to be part of the excitement? Joining the Annual Duck Dash is easy!
        Simply mark your calendars for July 4th, 2024, and head over to Galena
        Riverfront Park in Galena, Illinois, USA from 9:00 am to 7:00 pm. Once
        you're there, get ready to dive into a day filled with fun activities
        and quack-tastic adventures!
      </p>
      <p>
        Don't miss out on this quack-tastic event! Mark your calendars and join
        us for the Annual Duck Dash – where every duck counts!
      </p>
      <h2 className="text-4xl mt-8">Event Details</h2>
      <ul>
        <li>
          <strong>Date:</strong> Every 1st Sunday of July
        </li>
        <li>
          <strong>Time:</strong> 9 am to 7 pm (local time)
        </li>
        <li>
          <strong>Location:</strong> Galena Riverfront Park in Galena, Illinois,
          USA
        </li>
        <li>
          <strong>Ticket price:</strong>{" "}
          <ul className="ml-8">
            <li>$15 per person</li>
            <li>Free entrance for children from 0 to 9 years old</li>
            <li>Free entrance with Educk Membership</li>
            <li>Free entrance with Educk Family Membership</li>
          </ul>{" "}
        </li>
      </ul>
      <h1 className="text-4xl mt-8">Annual Duck Dash Agenda</h1>
      <section className="w-full flex justify-center">
        <table className="mt-[50px] mb-[50px] shadow-2xl font-[Poppins] border-2 border-morange w-10/12 overflow-hidden">
          <thead className="text-white">
            <tr>
              <th className="py-3 text-4xl bg-morange">Time</th>
              <th className="py-3 text-4xl bg-morange">Activity</th>
              <th className="py-3 text-4xl bg-morange">Description</th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            <tr className="bg-mlilas">
              <td className="py-3 px-6 text-nowrap">
                <p>9:00 am - 10:30 am</p>{" "}
              </td>
              <td className="py-3 px-6">
                <p> Piggy Bank Decorating and Planning</p>
              </td>
              <td className="text-left py-3 flex-grow px-6">
                <p>
                  {" "}
                  Unleash your creativity at the Duckling Savings Clubhouse tent
                  as you embark on a journey to decorate your very own piggy
                  bank. This isn't just about artistic expression – it's about
                  personalizing your savings experience and preparing for
                  success! Showcase your artistic skills and transform your
                  piggy bank into a reflection of your unique personality and
                  savings goals. This is also the moment for planning how much
                  of ingredients you are buying and calculate the price you will
                  sell your lemonade. Get ready to make a splash and set the
                  stage for a day filled with quack-tastic adventures! Plus, by
                  starting your day with this activity, you'll ensure that your
                  piggy bank is dry and ready to collect your profits from the
                  Entrepreneurial Lemonade Stand at the end of the day. Let's
                  make a splash and make saving fun!"
                </p>
              </td>
            </tr>
            <tr className="bg-mlilas">
              <td className="py-3 px-6 text-nowrap">
                <p>11:00am - 12:30pm</p>{" "}
              </td>
              <td className="py-3 px-6">
                {" "}
                <p>Grocery Shopping Challenge</p>{" "}
              </td>
              <td className="text-left py-3 px-6">
                <p>
                  Test your budgeting skills in the Grocery Shopping Challenge!
                  Participants will embark on a journey through the market
                  stalls, from the local vendors, armed with a list of grocery
                  items and a budget to stick to. Put your financial savvy to
                  the test as you navigate through the aisles, making smart
                  purchasing decisions and seeking out the best deals. The goal
                  here is to prepare for the Entrepreneurial Lemonade Stand
                  activity later in the day. Get ready to shop smart and save
                  big!
                </p>
              </td>
            </tr>
            <tr className="bg-mlilas ">
              <td className="py-3 px-6 flex-nowrap">
                <p>12:30pm - 1:30pm</p>
              </td>
              <td className="py-3 px-6">Lunch break</td>
              <td className="text-left py-3 px-6">
                <p>
                  Take a break and have lunch with your family or friends, we
                  have several food stands for you to recharge your batteries
                  for the next step of the chalenge.
                </p>
              </td>
            </tr>
            <tr className="bg-mlilas">
              <td className="py-3 px-6 flex-nowrap">
                <p>2:00pm - 3:30pm</p>
              </td>
              <td className="py-3 px-6">
                <p>Entrepreneurial Lemonade Stand</p>{" "}
              </td>
              <td className="text-left py-3 px-6">
                <p>
                  Set up your own lemonade stand and become an entrepreneur for
                  the day! The goal here is to use the groceries you purchased
                  earlier in the Grocery Shopping Challenge to create delicious
                  lemonade and set up your very own stand. Learn about
                  budgeting, pricing, and customer service while selling
                  refreshing lemonade to event attendees.
                </p>
              </td>
            </tr>
            <tr className="bg-mlilas">
              <td className="py-3 px-6 flex-nowrap">
                <p>4:00pm - 5:00pm</p>
              </td>
              <td className="py-3 px-6">
                <p>Excel Extravaganza: Profits & Graphs</p>
              </td>
              <td className="text-left py-3 px-6">
                <p>
                  Join us for the Excel Extravaganza workshop, where you'll
                  learn essential Excel formulas and functions to compute your
                  profits from the day's activities. From revenue calculations
                  to expense analysis, participants will gain practical
                  experience in organizing financial data and creating basic
                  graphs to visualize their earnings.
                </p>
              </td>
            </tr>
            <tr className="bg-mlilas">
              <td className="py-3 px-6 flex-nowrap">
                <p>5:30 pm - 7:00 pm</p>
              </td>
              <td className="py-3 px-6">
                <p>Duck Race on the River</p>
              </td>
              <td className="text-left py-3 px-6">
                <p>
                  Finish the day with our traditional Duck Race. Head to the
                  riverbank and cheer on thousands of our eco-friendly ducks as
                  they race down the river! Watch as the fastest ducks compete
                  for glory and prizes in this thrilling spectacle.
                </p>
                <p>
                  These ducks are made from materials that are not only
                  environmentally friendly but also serve as food for the
                  wildlife inhabiting the river. As stewards of our local
                  ecosystem, we're proud to offer participants the chance to
                  race these unique ducks down the river, adding an element of
                  sustainability to the excitement of the event.
                </p>
                <p>
                  For more information and to adopt a duck, visit [Event
                  Website] or contact us at [Contact Email/Phone].
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section></section>
      <h3 className="text-4xl mt-8">Photo Gallery</h3>
      <h3 className="text-3xl mt-8">Past Events</h3>
      <PhotoGalleryPastEvents />
      <section className="flex justify-center mb-8 mt-2  gap-8 items-baseline">
        <Button>Buy tickets</Button>
      </section>{" "}
      <p className="flex underline justify-center mb-4 gap-2 items-baseline">
        {" "}
        Add to your calendar
      </p>
      <p className="flex underline justify-center  mt-2 mb-8 gap-2 items-baseline">
        Share event
      </p>
      <section className="flex justify-center mb-8 mt-2  gap-8 items-baseline">
        <Button>Go back</Button>
      </section>
    </section>
  );
};

export default AnualDuckDash;
