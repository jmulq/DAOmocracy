// pages/dashboard.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ElectionQueryDocument, ElectionQueryQuery, execute } from "../.graphclient";
import { NextPage } from "next";

const Election: NextPage = () => {
  const [data, setData] = useState<ElectionQueryQuery>();

  useEffect(() => {
    execute(ElectionQueryDocument, {}).then(result => {
      setData(result?.data);
    });
  }, [setData]);

  console.log("data", data);

  if (!data?.elections[0].candidates) {
    return <></>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-left mb-2">Hey James, cast your vote in the National Election</h2>

      <div className="flex">
        {/* Left Side: Candidate Cards */}
        <div className="w-2/5 grid grid-cols-2 gap-4">
          {/* Candidate 1 */}
          {data.elections[0].candidates.map((c, i) => (
            <div key={i} className="bg-white shadow rounded-lg flex flex-col h-fit">
              <Image
                className="rounded-t-lg"
                about="candidate image"
                alt={`Candidate${i + 1}`}
                src={`/../public/assets/politician${i + 1}.png`}
                width={500}
                height={500}
              />
              <h3 className="text-lg font-semibold">Candidate 1 Name</h3>
              <p className="text-gray-600 m-0.5">Candidate 1 Party</p>
              <p className="text-gray-600 m-0.5">Votes: 1000</p>
            </div>
          ))}

          {/* Repeat similar structure for other candidates */}
        </div>

        {/* Right Side: Interactive Graph */}
        <div className="w-1/2 bg-gray-200 p-4 rounded-lg ml-4">
          {/* Placeholder for the interactive graph */}
          <div className="h-64 bg-white rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default Election;
