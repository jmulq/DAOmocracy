// pages/dashboard.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DAOQueryDocument, DAOQueryQuery, execute } from "../../../.graphclient";
import { NextPage } from "next";

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
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">{dao.name}</h1>

      <h2 className="text-xl font-semibold mb-2">Recent Proposals</h2>
      {!dao.proposals || dao?.proposals.length === 0 ? (
        <p className="text-gray-600">No proposals available.</p>
      ) : (
        <ul>
          {dao.proposals.map((proposal, index) => (
            <li
              key={proposal.id}
              className={`p-4 mb-2 cursor-pointer rounded ${
                proposal.proposalState === "Active" ? "bg-green-200" : "bg-yellow-200"
              }`}
              onClick={() => router.push(`/daos/${dao.id}/proposal/${proposal.id}?index=${index}`)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{proposal.title}</h3>
                <span
                  className={`text-sm ${proposal.proposalState === "Active" ? "text-green-600" : "text-yellow-600"}`}
                >
                  {proposal.proposalState}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DAO;
