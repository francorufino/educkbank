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
        <section className={styles.myContainer}>
          <section>
            <h2 className="container m-auto text-8xl mt-16">We are </h2>
            <h1 className="container m-auto text-8xl my-4 ">duck-fferent.</h1>
            <h3 className="container m-auto text-2xl mb-6 ">
              We're here to make a difference in your banking experience.
            </h3>
            <h3 className="container m-auto text-2xl -mt-6 -mr-[45px] text-right ">
              And in the world.
            </h3>
          </section>
          <section>
            <Image
              className="myImage ml-2"
              src={"/educk2.png"}
              alt="yellow rubber duck"
              width={400}
              height={400}
              priority
            />
          </section>
        </section>

        <section className="mx-0 min-w-full flex flex-col items-center -mt-[90px] mb-[50px]">
          <Link href="/auth/register">
            <Button>Get Started</Button>
          </Link>
        </section>
      </main>
    </>
  );
}
