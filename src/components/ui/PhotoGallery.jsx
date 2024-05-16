"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const clubhouse = [
  { label: "BBQ Classes", href: "/bbq1.jpg" },
  { label: "BBQ Classes", href: "/bbq2.jpg" },
  { label: "BBQ Classes", href: "/bbq3.jpg" },
  { label: "BBQ Classes", href: "/bbq4.jpg" },
  { label: "BBQ Classes", href: "/bbq5.jpg" },
  { label: "BBQ Classes", href: "/bbq6.jpg" },
  { label: "BBQ Classes", href: "/bbq7.jpg" },
  { label: "BBQ Classes", href: "/bbq8.jpg" },
  { label: "BBQ Classes", href: "/bbq9.jpg" },
  { label: "BBQ Classes", href: "/bbq10.jpg" },
  { label: "BBQ Classes", href: "/bbq11.jpg" },
  { label: "Zumba Classes", href: "/zumba1.jpg" },
  { label: "Zumba Classes", href: "/zumba2.jpg" },
  { label: "Zumba Classes", href: "/zumba3.jpg" },
  { label: "Yoga Classes", href: "/yoga1.jpg" },
  { label: "Yoga Classes", href: "/yoga2.jpg" },
  { label: "Yoga Classes", href: "/yoga3.jpg" },
  { label: "Yoga Classes", href: "/yoga4.jpg" },
  { label: "Yoga Classes", href: "/yoga5.jpg" },
  { label: "Wood Work Classes", href: "/wood1.jpg" },
  { label: "Wood Work Classes", href: "/wood2.jpg" },
  { label: "Wood Work Classes", href: "/wood4.jpg" },
  { label: "Wood Work Classes", href: "/wood5.jpg" },
  { label: "Wood Work Classes", href: "/wood6.jpg" },
  { label: "Sports Practice", href: "/sport1.jpg" },
  { label: "Sports Practice", href: "/sport2.jpg" },
  { label: "Social Gathering", href: "/social1.jpg" },
  { label: "Social Gathering", href: "/social2.jpg" },
  { label: "Social Gathering", href: "/social3.jpg" },
  { label: "Photography Classes", href: "/photo1.jpg" },
  { label: "Photography Classes", href: "/photo2.jpg" },
  { label: "Photography Classes", href: "/photo3.jpg" },
  { label: "Painting Classes", href: "/paint1.jpg" },
  { label: "Painting Classes", href: "/paint2.jpg" },
  { label: "Painting Classes", href: "/paint3.jpg" },
  { label: "Painting Classes", href: "/paint4.jpg" },
  { label: "Painting Classes", href: "/paint5.jpg" },
  { label: "Games Gathering", href: "/games1.jpg" },
  { label: "Games Gathering", href: "/games2.jpg" },
  { label: "Games Gathering", href: "/games3.jpg" },
  { label: "Games Gathering", href: "/games4.jpg" },
  { label: "Games Gathering", href: "/games5.jpg" },
  { label: "Cooking Classes", href: "/cooking1.jpg" },
  { label: "Cooking Classes", href: "/cooking2.jpg" },
  { label: "Cooking Classes", href: "/cooking3.jpg" },
  { label: "Cooking Classes", href: "/cooking4.jpg" },
  { label: "Cooking Classes", href: "/cooking5.jpg" },
  { label: "Cooking Classes", href: "/cooking6.jpg" },
  { label: "Cooking Classes", href: "/cooking7.jpg" },
  { label: "Cooking Classes", href: "/cooking8.jpg" },
  { label: "Cooking Classes", href: "/cooking9.jpg" },
  { label: "Arts and Craft Classes", href: "/artes1.jpg" },
  { label: "Arts and Craft Classes", href: "/artes2.jpg" },
  { label: "Arts and Craft Classes", href: "/artes3.jpg" },
  { label: "Arts and Craft Classes", href: "/artes4.jpg" },
  { label: "Arts and Craft Classes", href: "/artes5.jpg" },
  { label: "Cards for Nursing Homes", href: "/card1.jpg" },
  { label: "Cards for Nursing Homes", href: "/card2.jpg" },
  { label: "Cards for Nursing Homes", href: "/card3.jpg" },
  { label: "Cards for Nursing Homes", href: "/card4.jpg" },
  { label: "Cards for Nursing Homes", href: "/card5.jpg" },
  { label: "Cards for Nursing Homes", href: "/card6.jpg" },
  { label: "Volunteering for Charities", href: "/charity1.jpg" },
  { label: "Volunteering for Charities", href: "/charity2.jpg" },
  { label: "Volunteering for Charities", href: "/charity3.jpg" },
  { label: "Volunteering for Charities", href: "/charity4.jpg" },
  { label: "Volunteering for Charities", href: "/charity4.jpg" },
  { label: "Volunteering for Charities", href: "/charity5.jpg" },
  { label: "Volunteering for Charities", href: "/charity6.jpg" },
  { label: "Volunteering for Charities", href: "/charity7.jpg" },
  { label: "Volunteering for Charities", href: "/charity8.jpg" },
  { label: "Volunteering for Charities", href: "/charity9.jpg" },
  { label: "Volunteering for Charities", href: "/charity10.jpg" },
  { label: "Volunteering for Charities", href: "/charity11.jpg" },
  { label: "Volunteering for Charities", href: "/charity12.jpg" },
  { label: "Volunteering for Charities", href: "/charity13.jpg" },
  { label: "Volunteering for Charities", href: "/charity14.jpg" },
  { label: "Volunteering for Charities", href: "/charity15.jpg" },
  { label: "Crafting for Shelters", href: "/winter1.jpg" },
  { label: "Crafting for Shelters", href: "/winter2.jpg" },
  { label: "Crafting for Shelters", href: "/winter3.jpg" },
  { label: "Crafting for Shelters", href: "/winter4.jpg" },
  { label: "Crafting for Shelters", href: "/winter5.jpg" },
  { label: "Book Club", href: "/book1.jpg" },
  { label: "Book Club", href: "/book2.jpg" },
  { label: "Book Club", href: "/book3.jpg" },
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

const PhotoGallery = () => {
  const [shuffledClubhouse, setShuffledClubhouse] = useState([]);

  useEffect(() => {
    setShuffledClubhouse(shuffleArray(uniqueClubhouse));
  }, []);

  return (
    <section className="flex flex-wrap justify-center ">
      {shuffledClubhouse.map((club, index) => (
        <section
          key={index}
          className="relative w-80 h-80 rounded-lg mr-4 mb-4 border-dgray border-2 "
        >
          <Image
            priority
            src={club.href}
            alt={club.label}
            layout="fill"
            className="rounded-md object-cover"
          />
          <p className="absolute bottom-0 left-0 right-0 bg-dgray bg-opacity-80 text-white text-center p-2 rounded-b-sm">
            {club.label}
          </p>
        </section>
      ))}
    </section>
  );
};

export default PhotoGallery;
