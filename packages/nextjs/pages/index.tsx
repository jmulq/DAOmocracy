import React from "react";
import Link from "next/link";
import type { NextPage } from "next";

const Landing: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-landing-image bg-cover relative">
      <div className="bg-black bg-opacity-40 rounded-lg max-w-3xl mx-auto text-center p-6">
        <h1 className="text-6xl font-bold mb-10 text-white">DAOMOCRACY</h1>
        <p className="text-lg text-white mb-10">
          DAOmocracy is a thought experiment reimagining the way we practice democracy in society. Through innovative
          blockchain technology and decentralized decision-making, we aim to create a more inclusive and transparent
          democratic process, empowering every individual to have a voice in shaping our world.
        </p>
        <p className="text-xl font-semibold mb-10 text-white">Get involved with your World ID</p>
        <Link href="/election" className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200">
          Start now
        </Link>
      </div>
    </div>
  );
};

export default Landing;
