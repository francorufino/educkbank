/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "@/components/button/Button";
import GoBack from "@/components/ui/GoBack";

const Accounts = () => {
  return (
    <section>
      <h2 className="text-4xl mt-8">Duckling Checking Account:</h2>
      <p className="text-lg mt-4">
        Introducing the Duckling Checking Account, specially crafted for our
        young savers aged 10 to 17. This account offers a hands-on approach to
        financial literacy, providing children with the tools and resources they
        need to learn about money management in a safe and controlled
        environment. With no minimum balance requirement to open the account,
        the Duckling Checking Account makes it easy for children to get started
        on their financial journey. Parents can have peace of mind knowing that
        their child's account comes with a debit card equipped with parental
        controls, allowing them to monitor spending and set limits on
        withdrawals. The Duckling Checking Account isn't just about
        transactions; it's about education. We offer a range of educational
        resources and tools to help children understand the basics of budgeting,
        saving, and responsible spending. From interactive online modules to
        in-person workshops, we're committed to equipping our young customers
        with the knowledge and skills they need to make smart financial
        decisions. As children make regular deposits and savings, they'll be
        rewarded with incentives and rewards, such as token rewards for reaching
        savings goals. This incentivizes positive saving habits from an early
        age and reinforces the importance of financial responsibility. With
        access to online and mobile banking features, children can track their
        account activity, set savings goals, and manage their money
        independently under parental supervision. The Duckling Checking Account
        is more than just a bank account; it's a stepping stone toward financial
        independence and empowerment for our youngest customers.
      </p>

      <h2 className="text-4xl mt-8">Savings Account:</h2>
      <p className="text-lg mt-4">
        Our Savings Account is the cornerstone of smart financial planning. It's
        designed to help you grow your money over time while keeping it easily
        accessible. With competitive interest rates and no monthly maintenance
        fees, you can watch your savings grow without worrying about hidden
        costs. Whether you're saving for a rainy day or a long-term goal, our
        Savings Account provides the security and flexibility you need to reach
        your financial milestones.
      </p>

      <h2 className="text-4xl mt-8">Checking Account:</h2>
      <p className="text-lg mt-4">
        Our Checking Account is your everyday companion for managing your
        finances with ease and convenience. With features like online and mobile
        banking, bill pay, and a debit card, you'll have the tools you need to
        stay in control of your money wherever you go. Plus, with no minimum
        balance requirement and no monthly service fees, you can enjoy the
        benefits of hassle-free banking without any added stress. Say goodbye to
        unnecessary fees and hello to seamless banking with our Checking
        Account.
      </p>

      <h2 className="text-4xl mt-8">Interest-Bearing Checking Account:</h2>
      <p className="text-lg mt-4">
        Upgrade your banking experience with our Interest-Bearing Checking
        Account. Not only does it offer all the convenience of a standard
        checking account, but it also rewards you for keeping your money with
        us. With competitive interest rates and added perks like ATM fee
        reimbursements and rewards programs, you'll get more out of your
        everyday banking. Say goodbye to stagnant balances and hello to earning
        rewards while you spend with our Interest-Bearing Checking Account.
      </p>

      <h2 className="text-4xl mt-8">Money Market Account:</h2>
      <p className="text-lg mt-4">
        Our Money Market Account offers the best of both worlds: high-interest
        savings with the flexibility of a checking account. With tiered interest
        rates that reward higher balances, you'll earn more as you save more.
        Plus, with check-writing privileges and debit card access, you can
        access your funds whenever you need them. Whether you're saving for a
        big purchase or building your emergency fund, our Money Market Account
        puts your money to work for you.
      </p>

      <h2 className="text-4xl mt-8">Certificate of Deposit (CD):</h2>
      <p className="text-lg mt-4">
        Secure your savings and watch them grow with our Certificate of Deposit
        (CD). With fixed interest rates and terms ranging from a few months to
        several years, you can choose the option that best fits your financial
        goals. Plus, with no monthly maintenance fees and guaranteed returns,
        you can enjoy peace of mind knowing your money is safe and growing
        steadily. Whether you're saving for a short-term goal or planning for
        the future, our CD offers a reliable way to maximize your earnings.
      </p>

      <h2 className="text-4xl mt-8">Individual Retirement Account (IRA):</h2>
      <p className="text-lg mt-4">
        Prepare for your future with our Individual Retirement Account (IRA).
        Whether you choose a traditional or Roth IRA, you'll enjoy tax
        advantages that help you save more for retirement. With a wide range of
        investment options, including stocks, bonds, and mutual funds, you can
        build a diversified portfolio tailored to your risk tolerance and
        financial goals. Plus, with no annual fees and flexible contribution
        limits, our IRA makes it easy to start saving for a secure retirement
        today.
      </p>

      <h2 className="text-4xl mt-8">Joint Account:</h2>
      <p className="text-lg mt-4">
        Our Joint Account is the perfect solution for couples, families, or
        business partners who want to manage their finances together. With
        shared access to funds, both account holders can deposit, withdraw, and
        monitor transactions seamlessly. Plus, with features like online and
        mobile banking, you can stay connected to your finances no matter where
        life takes you. Whether you're saving for a shared goal or managing
        household expenses, our Joint Account offers convenience and flexibility
        for your unique financial needs.
      </p>
      <section className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
        <Button className="mt-10 mb-10 ml-9">
          <GoBack />
        </Button>
      </section>
    </section>
  );
};

export default Accounts;
