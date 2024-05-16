/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "@/components/button/Button";
import GoBack from "@/components/ui/GoBack";

const InvestmentFinancing = () => {
  return (
    <section>
      <section>
        <h2 className="text-4xl mt-8">Investment Account</h2>
        <p className="text-lg mt-4">
          Our Investment Account offers a gateway to the world of investing,
          allowing you to build wealth and achieve your financial goals through
          a diversified portfolio of stocks, bonds, ETFs, and mutual funds.
          Whether you're a seasoned investor or just starting out, our platform
          provides intuitive tools and personalized guidance to help you make
          informed investment decisions. With low fees, tax-efficient
          strategies, and access to professional advice, you can confidently
          navigate the markets and grow your wealth over time.
        </p>

        <h2 className="text-4xl mt-8">Personal Loan</h2>
        <p className="text-lg mt-4">
          Need funds for a big purchase or unexpected expense? Our Personal Loan
          offers a flexible solution to help you achieve your financial goals
          without tapping into your savings. With competitive interest rates,
          customizable repayment terms, and no collateral required, you can
          borrow the money you need with confidence. Whether you're
          consolidating debt, covering medical expenses, or financing a major
          purchase, our Personal Loan provides the support you need to move
          forward with your plans.
        </p>

        <h2 className="text-4xl mt-8">Home Mortgage</h2>
        <p className="text-lg mt-4">
          Turn your dream of homeownership into a reality with our Home Mortgage
          options. Whether you're a first-time buyer or looking to refinance
          your existing home loan, we offer competitive rates, flexible terms,
          and personalized guidance every step of the way. With a variety of
          loan programs to choose from, including fixed-rate and adjustable-rate
          mortgages, you can find the perfect fit for your budget and lifestyle.
          Plus, with streamlined application processes and dedicated support
          from our team of mortgage experts, you can enjoy a seamless homebuying
          experience from start to finish.
        </p>

        <h2 className="text-4xl mt-8">Business Loan</h2>
        <p className="text-lg mt-4">
          Fuel the growth of your business with our Business Loan options.
          Whether you're launching a new venture, expanding operations, or need
          working capital to support day-to-day operations, our flexible
          financing solutions can help you achieve your goals. With competitive
          rates, flexible terms, and expedited approval processes, you can
          access the funds you need quickly and efficiently. Plus, with
          dedicated support from our team of business banking specialists, you
          can receive personalized guidance and tailored solutions to meet your
          unique needs.
        </p>
      </section>
      <section className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <Button className="mt-10 mb-10 ml-9">
          <GoBack />
        </Button>
      </section>
    </section>
  );
};

export default InvestmentFinancing;
