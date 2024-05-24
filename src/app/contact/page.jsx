"use client";
import React, { useState } from "react";
import Head from "next/head";
import TitleH1 from "@/components/ui/TitleH1";
import TitleH2 from "@/components/ui/TitleH2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can add your logic to handle form submission here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("Btn clicked");
  };

  return (
    <section>
      <Head>
        <section>Contact Us</section>
        <meta
          name="description"
          content="Contact us for any inquiries or feedback."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-wrap items-center justify-center p-12">
        <section className="mx-4 text-center">
          <TitleH1>Need to talk to us? </TitleH1>
          <TitleH2>Send us a message! </TitleH2>{" "}
          <section className="text-left">
            <hr className="h-px  mt-8 mb-4 bg-white border-0 "></hr>
            <p className="mb-4">other options:</p>
            <p>Email: contact@educkbank.com.</p>
            <p>Call: +1 (222) E-DUCK-BANK </p>
            <p className="ml-14">(+1 222 3-3825-2265)</p>
            <p>
              Live chat <span className="text-morange">clicking here</span>
            </p>
            <p>Mail us at: </p>
          </section>
        </section>

        {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
        <section className="mx-auto w-full max-w-[550px]">
          <form
            action="https://formbold.com/s/FORM_ID"
            method="POST"
            onSubmit={handleSubmit}
          >
            <section className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-mlilas bg-white py-3 px-6 text-base font-medium text-dgray outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </section>
            <section className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-mlilas bg-white py-3 px-6 text-base font-medium text-dgray outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </section>
            <section className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-mlilas bg-white py-3 px-6 text-base font-medium text-dgray outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </section>
            <section className="mb-5">
              <label
                for="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-mlilas bg-white py-3 px-6 text-base font-medium text-dgray outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </section>
            <section>
              <button className="hover:shadow-form rounded-md bg-mlilas py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </section>
          </form>
        </section>
      </section>

      {/* <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </section>
        <button type="submit">Submit</button>
      </form> */}
    </section>
  );
};

export default ContactPage;
