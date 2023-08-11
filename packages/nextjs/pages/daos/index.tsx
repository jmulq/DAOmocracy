// pages/dashboard.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DAOSQueryDocument, DAOSQueryQuery, execute } from "../../.graphclient";
import { NextPage } from "next";
import DAOCard from "~~/components/DAOCard";

const DAOS: NextPage = () => {
  const [data, setData] = useState<DAOSQueryQuery>();
  const [selectedDAO, setSelectedDAO] = useState<number>(0);

  useEffect(() => {
    execute(DAOSQueryDocument, {}).then(result => {
      setData(result?.data);
    });
  }, [setData]);

  if (!data?.daos) {
    return <></>;
  }

  const { daos } = data;

  return (
    <>
      <h2 className="text-2xl font-bold text-left mb-2">DAOs</h2>

      <div className="flex">
        <div className="w-2/5 grid grid-cols-2 gap-4">
          {data.daos.map((d, i) => {
            return (
              <DAOCard key={i} dao={d} imageSource={`/assets/dao${i + 1}.png`} onClick={() => setSelectedDAO(i)} />
            );
          })}
        </div>

        <div className="w-1/2 bg-gray-200 p-12 rounded-lg ml-4 text-left">
          <h2 className="text-lg font-semibold">{daos[selectedDAO].name}</h2>
          <p className="text-gray-600">{daos[selectedDAO].description}</p>
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
            href={`/daos/${daos[selectedDAO].id}`}
          >
            Enter
          </Link>
        </div>
      </div>
    </>
  );
};

export default DAOS;