/* eslint-disable react/no-unescaped-entities */
import styles from "./main.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import Link from "next/link";

export const metadata = {
  title: "eDuck Bank",
  description:
    "Discover eDuck Bank, where financial innovation meets community engagement. Explore our range of banking services and join us in making a positive impact",
  keywords: [
    "card",
    "banking",
    "financial services",
    "savings",
    "checking account",
    "investment",
    "loan",
    "online banking",
    "financial literacy",
    "children's banking",
    "parental controls",
    "community engagement",
    "charity support",
    "financial education",
    "budgeting",
    "retirement planning",
    "credit card",
    "customer service",
    "giving back",
    "me time",
    "socialization",
    "SSR",
  ],
  openGraph: {
    title: "eDuck Bank",
    description:
      "Discover eDuck Bank, where financial innovation meets community engagement. Explore our range of banking services and join us in making a positive impact",
    type: "website",
    publishedTime: new Date().toISOString(),
    authors: ["https://www.educkbank.com"],
  },
};

export default function Home() {
  return (
    <>
      <main>
        <section className="flex flex-col justify-center text-center container lg:flex-row ">
          <section>
            <h2 className=" text-5xl mt-16 sm:text-left sm:text-8xl">
              We are{" "}
            </h2>
            <h1 className="font-bold text-4xl my-4 sm:text-left sm:text-7xl">
              duck-fferent.
            </h1>
            <h3 className=" text-2xl mt-8 sm:text-left sm:text-3xl">
              We're here to make a difference in your banking experience.
            </h3>
            <h3 className="text-3xl font-semibold mt-8 sm:text-left sm:text-4xl md:ml-12 lg:ml-[280px] xl:ml-[450px]">
              {/* text-2xl -mt-6 -mr-[45px] text-right */}
              And in the world.
            </h3>
          </section>
          <section className="flex justify-center items-center sm:items-end sm:justify-end ">
            <Image
              className="-mt-24 sm:-mt-32 md:w-[300px] md:-mt-60 lg:w-[500px] lg:mt-0"
              src={"/duckCENTEREDSemBolinhaOlho.png"}
              alt="yellow logo duck"
              width={200}
              height={200}
              priority
            />
          </section>
        </section>

        <section className=" flex flex-col justify-center items-center -mt-9 md:-mt-24 lg:-mt-40">
          <Link href="/about">
            <Button>Get Started</Button>
          </Link>
        </section>
      </main>
    </>
  );
}
