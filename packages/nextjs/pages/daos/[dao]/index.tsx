// pages/dashboard.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { DAOQueryDocument, DAOQueryQuery, execute } from "../../../.graphclient";
import { NextPage } from "next";
import { getDaoImage } from "~~/utils/getDaoImage";

// import { useAccount } from "wagmi";
// import DAOCard from "~~/components/DAOCard";

const DAO: NextPage = () => {
  const router = useRouter();
  const { dao: id } = router.query;

  const [data, setData] = useState<DAOQueryQuery>();

  useEffect(() => {
    execute(DAOQueryDocument, { daoId: id }).then(result => {
      setData(result?.data);
    });
  }, [id, setData]);

  if (!data?.dao) {
    return <></>;
  }

  const { dao } = data;

  return (
    <>
      <h1 className="text-2xl font-bold text-left pl-5 mb-8">{dao.name}</h1>
      <div className="flex">
        <div className="w-3/5 flex flex-col justify-center">
          <Image className="rounded-3xl" src={getDaoImage(dao.name)} alt="dao-image" width={500} height={500} />
        </div>
        <div className=" w-full bg-white p-12 rounded-3xl ml-4 text-left">
          <h2 className="text-xl font-semibold mb-10">Recent Proposals</h2>
          {!dao.proposals || dao?.proposals.length === 0 ? (
            <p className="text-gray-600">No proposals available.</p>
          ) : (
            <ul>
              {dao.proposals.map((proposal, index) => (
                <li
                  key={proposal.id}
                  className={`p-4 mb-2 cursor-pointer rounded-3xl bg-white hover:bg-gray-100`}
                  onClick={() => router.push(`/daos/${dao.id}/proposal/${proposal.id}?index=${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold ml-3">{proposal.title}</h3>
                    <div className={`text-sm text-white bg-green-300 p-2 rounded-xl mr-3`}>
                      {proposal.proposalState}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default DAO;
