/* eslint-disable react/no-unescaped-entities */
"use client";
import Button from "../components/button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="container">
        <section className="flex mt-16 mb-8 justify-center items-center">
          <section className="text-lg font-semibold mr-12">
            {" "}
            <h1>Uh oh... how did you end up here? </h1>
            <h1 className="mb-12">
              No worries, duckie... let's get you back to safe waters
            </h1>
            <section className="flex justify-center">
              <Button onClick={() => router.back()}>Go back</Button>
            </section>
          </section>
          <section>
            <Image
              src={"/404pageEDUCK1.gif"}
              width={200}
              height={100}
              // className=" rounded-lg float-right ml-2"
              alt="logo"
            />
          </section>
        </section>
      </main>
    </>
  );
}
