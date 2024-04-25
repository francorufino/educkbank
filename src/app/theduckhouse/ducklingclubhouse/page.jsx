import React from "react";
import Button from "@/components/button/Button";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <h3 className="text-[#ec552a] font-black text-2xl mt-12">
        Duckling Clubhouse
      </h3>
      <div className=" mt-4 mb-4 rounded-md">
        <p>
          <span className="text-[#ec552a] font-bold">When:</span> Every Saturday
        </p>
        <p>
          <span className="text-[#ec552a] font-bold">Time:</span> 9:00 am to
          12:00 pm <span className="text-[#ec552a] font-black"> OR </span>{" "}
          2:00pm to 5:00 pm
        </p>
        <p>
          <span className="text-[#ec552a] font-bold ">Where:</span>{" "}
          <span className="underline">The Quack House</span>
        </p>
      </div>
      <br />
      <Image
        src={"/duckingcoding5.jpg"}
        width={600}
        height={500}
        className=" rounded-lg float-right ml-4 mb-4"
        alt="kids in class with computers celebrating an achivement"
      />
      <p>
        Welcome to the Duckling Clubhouse – where young savers embark on a
        quack-tastic journey where saving money is not just about piggy banks –
        it's an exciting journey packed with valuable lessons and rewarding
        experiences!
      </p>
      <br />
      <h2 className="font-bold text-lg">What Is It?</h2>
      <p>
        While parents are busy socializing and doing other activities in our
        Nest Clubhouse, the children are busy learning about money, saving, and
        investing. Our clubhouse is all about arts and crafts; financial
        empowerment, creativity, coding, robotics and community engagement.
        Designed for children from 7 to 17 years old, the Duckling Clubhouse
        offers a variety of classes to enhance their financial literacy,
        creativity, and coding and robotics skills. Here are some of the classes
        we offer:
      </p>
      <br />
      <h2 className="font-bold text-lg">Classes</h2>
      <ul>
        <li>
          <strong>Money Masterclass:</strong> Participants dive into the world
          of finance with our Money Masterclass, where kids learn the basics of
          budgeting, saving, and smart spending through engaging activities and
          games.
        </li>{" "}
        <br />
        <li>
          <strong>Art of Saving:</strong> They get creative with their savings
          goals in our Art of Saving class! Kids explore the connection between
          art and money management as they design vision boards and create
          savings jars to visualize their financial dreams.
        </li>{" "}
        <br />
        <li>
          <strong>Excel Explorers:</strong> They unlock the power of
          spreadsheets in our Excel Explorers class! Kids learn essential Excel
          skills like creating budgets, tracking expenses, and analyzing savings
          goals in a hands-on, interactive workshop. Once they master basic
          formulas and navigation, they can advance to coding.
        </li>{" "}
        <br />
        <li>
          <strong>Coding and Robotics for Kids:</strong> Kids start their coding
          journey in our Coding for Kids class! Kids learn basic to intermediate
          coding skills to build programs that control their finances. They
          start by applying their Excel knowledge and progress to creating
          interactive financial management tools using coding languages like
          Python and JavaScript. They'll also learn HTML and CSS to translate
          their artistic creations learnt in the Art and Design Classes into
          their own web pages. They also, learn to program robots to perform
          tasks like playing music, controlling lights, and more.
        </li>
        <br />
        <li>
          <strong>Art, Design and Design Thinking:</strong> Exploring the
          intersection of art, design, and finance in our Art and Design
          Thinking class! Kids unleash their creativity as they develop
          innovative solutions to financial challenges through art and design
          projects. As they advance, they utilize advanced design software like
          Photoshop and Illustrator to give their creations a professional
          touch.
        </li>
      </ul>{" "}
      <br />
      <p>
        In addition to these classes, we empower kids to utilize their newfound
        skills for altruistic endeavors. They are encouraged to create simple
        designs and landing pages for charities and small businesses dedicated
        to helping others. We advocate for a balanced approach: while we suggest
        charging for some of their work, we also encourage them to offer their
        services pro bono, allowing them to experience both the financial and
        altruistic aspects of their talents. This dual approach fosters a deeper
        understanding of the value of their skills and the impact they can make
        on their community.
      </p>{" "}
      <br />
      <p>
        By engaging in these projects, kids not only contribute to meaningful
        causes but also build their own portfolio of work. As they compile their
        designs and creations, they develop a tangible representation of their
        abilities. This portfolio becomes a valuable asset as they progress
        through their educational and professional journey, providing them with
        a strong foundation and a wealth of experience to draw upon as they
        pursue their career aspirations.
      </p>
      <p>
        {" "}
        <br />
        Our classes are designed with flexibility in mind, taking into
        consideration both students' and parents' schedules. Held semesterly
        with winter and spring breaks, our sessions offer two convenient time
        slots: Saturdays from 9:00 am to 12:00 pm or from 2:00 pm to 5:00 pm.
        This allows parents to choose the time that best aligns with their
        family's commitments and activities. Whether they prefer to start their
        day with early morning classes or enjoy afternoons filled with learning
        and creativity, our schedule ensures that both students and parents can
        participate without conflicts.
      </p>{" "}
      <br />
      <p>
        At the Duckling Clubhouse, we're not just focused on financial success;
        we also care deeply about the future well-being of our young savers and
        the community as a whole. We believe that by empowering kids with the
        skills to manage their money responsibly and contribute positively to
        society, we can create a brighter future for everyone.
      </p>
      <div className="text-xl font-blod">
        {" "}
        <br />
        <p className="font-bold text-lg">We are so pround of our students</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        <Image
          src={"/ducklingclasses2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingclasses3.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/ducklingclasses4.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingclasses5.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingclasses6.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingclasses7.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingclasses9.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/ducklingclasses11.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingclasses12.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />

        <Image
          src={"/ducklingclasses14.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingclasses15.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingcoding.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingcode3.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingcoding1.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/duclingclasses.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingbreak.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingbreak2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/codingclasses1.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/codingclasses2.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/ducklingexcel.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
        <Image
          src={"/duclingrobotics.jpg"}
          width={330}
          height={500}
          className=" rounded-lg mr-4 mb-4"
          alt="friends talking"
        />
      </div>
      <div className="flex justify-center mt-8 mb-4">
        <Button>Join Duckling Clubhouse</Button>
      </div>
      <div className="flex justify-center underline">
        {" "}
        <p>Photo Gallery</p>
      </div>
    </div>
  );
};

export default page;
