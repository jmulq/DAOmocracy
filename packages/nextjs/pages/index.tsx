import React from "react";
import Link from "next/link";
import type { NextPage } from "next";

const Landing: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-landing-image bg-cover relative">
      <div className="bg-black bg-opacity-40 rounded-lg max-w-3xl mx-auto text-center p-8">
        <h1 className="text-6xl font-bold mb-30 text-white">DAOMOCRACY</h1>
        <p className="text-lg text-white mb-30">
          DAOmocracy is a thought experiment reimagining the essence of democracy through a DAO of subDAOs structure.
          Our vision revolves around a dynamic ecosystem where diverse specialized DAOs contribute to various aspects of
          governance, such as proposing legislation, funding initiatives, and shaping policies. This novel approach
          would empower individuals to actively engage in shaping our future while fostering transparency, inclusivity,
          and effective decentralised decision-making.
        </p>
        <p className="text-xl font-semibold mb-30 text-white">Get involved with your World ID</p>
        <Link href="/election" className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200">
          Start now
        </Link>
      </div>
    </div>
  );
};

export default Landing;
