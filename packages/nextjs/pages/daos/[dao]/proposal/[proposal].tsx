// pages/dashboard.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProposalQueryDocument, ProposalQueryQuery, execute } from "../../../../.graphclient";
import { NextPage } from "next";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import daoAbi from "~~/abis/dao.abi";

const Proposal: NextPage = () => {
  const { address } = useAccount();
  const router = useRouter();
  const { index } = router.query;
  const { proposal: id } = router.query;

  const [data, setData] = useState<ProposalQueryQuery>();
  const [selectedOptionId, setSelectedOptionId] = useState<{ id: string; index: number } | null>(null);

  useEffect(() => {
    execute(ProposalQueryDocument, { proposalId: id }).then(result => {
      setData(result?.data);
    });
  }, [id, setData]);

  const isDaoMember =
    data?.proposal?.dao.members &&
    data.proposal.dao.members.some(m => m.member.id.toLowerCase() === address?.toLowerCase());

  const { config } = usePrepareContractWrite({
    address: data?.proposal?.dao.id,
    abi: daoAbi,
    functionName: "voteOnProposal",
    args: [
      // TODO - This logic needs changing. The proposal ID should come from the contract and not rely on this weird conditional logic.
      // Currently we do not get the proposal ID from the contract. We should add a function to the subgraph which gets the
      // proposal ID from the mapping or consider another approach.
      typeof index === "string" ? BigInt(index) : BigInt(0),
      selectedOptionId ? BigInt(selectedOptionId.index) : BigInt(0),
    ],
  });
  const { data: writeData, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  // Can refactor index out of this by changing the data structure of an option in the subgraph
  // Consider adding an option index instead so we don't need this weird logic in the app.
  const handleOptionSelect = (option: { id: string; index: number }) => {
    setSelectedOptionId(option);
  };

  if (!data?.proposal) {
    return <></>;
  }

  const { proposal } = data;

  let buttonText = "Connect Wallet";

  if (address && !isLoading && !isSuccess) {
    buttonText = "Vote";
  }

  if (isLoading) {
    buttonText = "Voting...";
  }

  if (isSuccess) {
    buttonText = "Voted!";
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{proposal.title}</h2>
        <span
          className={`px-2 py-1 text-sm rounded-md ${
            proposal.proposalState === "Active" ? "bg-green-500 text-white" : "bg-yellow-500 text-gray-800"
          }`}
        >
          {proposal.proposalState}
        </span>
      </header>
      <p className="mb-4 text-gray-600">Proposed by: {proposal.proposer.id}</p>
      <p className="mb-4">{proposal.description}</p>
      <div className="flex flex-col space-y-4">
        {proposal.options.map((option, index) => (
          <label
            key={option.id}
            className={`flex items-center space-x-2 cursor-pointer ${
              selectedOptionId?.id === option.id ? "text-blue-500 font-semibold" : ""
            }`}
          >
            <input
              type="radio"
              value={option.id}
              checked={option.id === selectedOptionId?.id}
              onChange={() => handleOptionSelect({ id: option.id, index })}
              className="form-radio h-4 w-4 text-blue-500"
            />
            <span className="text-gray-800">{option.name}</span>
            <span className="text-gray-800">{option.description}</span>
          </label>
        ))}
      </div>
      {isDaoMember && (
        <button
          className={`mt-4 px-4 py-2 rounded-md ${
            selectedOptionId ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-600 cursor-not-allowed "
          }`}
          disabled={!address || !selectedOptionId || isLoading || isSuccess}
          onClick={write}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Proposal;
