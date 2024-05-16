"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const clubhouse = [
  { label: "Live Music", href: "/livemusic.jpg" },
  { label: "Live Music", href: "/livemusic1.jpg" },
  { label: "Live Music", href: "/livemusic3.jpg" },
  { label: "Live Music", href: "/livemusic5.jpg" },
  { label: "Lemonade Stand", href: "/lemonstand1.png" },
  { label: "Lemonade Stand", href: "/lemonstand2.png" },
  { label: "Lemonade Stand", href: "/lemonstand3.png" },
  { label: "Animal Adoption", href: "/adoption1.jpg" },
  { label: "Animal Adoption", href: "/adoption2.jpg" },
  { label: "Animal Adoption", href: "/adoption3.jpg" },
  { label: "Animal Adoption", href: "/adoption4.jpg" },
  { label: "Animal Adoption", href: "/adoption5.jpg" },
  { label: "Animal Adoption", href: "/adoption6.jpg" },
  { label: "Animal Adoption", href: "/adoption7.jpg" },
  { label: "Animal Adoption", href: "/adoption8.jpg" },
  { label: "Annual Duck Dash", href: "/dd1.jpg" },
  { label: "Annual Duck Dash", href: "/dd2.jpg" },
  { label: "Annual Duck Dash", href: "/dd5.jpg" },
  { label: "Annual Duck Dash", href: "/dd6.jpg" },
  { label: "Annual Duck Dash", href: "/dd7.jpg" },
  { label: "Annual Duck Dash", href: "/dd8.jpg" },
  { label: "Annual Duck Dash", href: "/dd9.jpg" },
  { label: "Local vendors", href: "/dd11.jpg" },
  { label: "Local vendors", href: "/dd12.jpg" },
  { label: "Food Truck", href: "/dd16.jpg" },
  { label: "Food Truck", href: "/foodtruck1.jpg" },
  { label: "Food Truck", href: "/foodtruck2.jpg" },
  { label: "Food Truck", href: "/foodtruck3.jpg" },
  { label: "Food Truck", href: "/foodtruck4.jpg" },
  { label: "Live Music", href: "/livemusic5.jpg" },
  { label: "Live Music", href: "/livemusic5.jpg" },
  { label: "Live Music", href: "/livemusic5.jpg" },
  { label: "Live Music", href: "/livemusic5.jpg" },
  { label: "Live Music", href: "/livemusic5.jpg" },
  { label: "Live Music", href: "/livemusic5.jpg" },
];

const uniqueClubhouse = clubhouse.reduce((unique, current) => {
  // Check if the current href already exists in unique
  if (!unique.find(item => item.href === current.href)) {
    unique.push(current);
  }
  return unique;
}, []);

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PhotoGalleryPastEvents = () => {
  const [shuffledClubhouse, setShuffledClubhouse] = useState([]);

  useEffect(() => {
    setShuffledClubhouse(shuffleArray(uniqueClubhouse));
  }, []);

  return (
    <section className="p-5 md:p-10 ">
      <section className="columns-1 gap-5 lg:gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl-columns:5 mb-5 ">
        {shuffledClubhouse.map((club, index) => (
          <section
            key={index}
            className="mb-4 border-2 border-dgray rounded-md flex flex-nowrap flex-col justify-center text-center"
          >
            <Image
              src={club.href}
              alt={club.label}
              width={300}
              height={300}
              className="rounded-tr-sm rounded-tl-sm"
            />
            <p className="mb-2 pt-2 border-t-2 border-dgray">{club.label}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default PhotoGalleryPastEvents;
