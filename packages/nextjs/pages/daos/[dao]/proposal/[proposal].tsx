// pages/dashboard.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ProposalQueryDocument, ProposalQueryQuery, execute } from "../../../../.graphclient";
import { prepareWriteContract, waitForTransaction, writeContract } from "@wagmi/core";
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import { NextPage } from "next";
import { zeroAddress } from "viem";
import { useAccount, useContractRead } from "wagmi";
import daoAbi from "~~/abis/dao.abi";
import proposalAbi from "~~/abis/proposal.abi";
import { decode } from "~~/utils/decode";
import { getDaoImage } from "~~/utils/getDaoImage";

const Proposal: NextPage = () => {
  const { address } = useAccount();
  const router = useRouter();
  const worldCoinAppId = process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID || "";
  const { index } = router.query;
  const { proposal: id } = router.query;

  const [hash, setHash] = useState<`0x${string}`>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<ProposalQueryQuery>();
  const [selectedOptionId, setSelectedOptionId] = useState<{ id: string; index: number } | null>(null);

  useEffect(() => {
    execute(ProposalQueryDocument, { proposalId: id }).then(result => {
      setData(result?.data);
    });
  }, [id, setData]);

  const { data: proposalActionId } = useContractRead({
    address: data?.proposal?.id,
    abi: proposalAbi,
    functionName: "proposalId",
  });

  useEffect(() => {
    const waitForTx = async () => {
      if (hash) {
        try {
          await waitForTransaction({
            hash,
          });
          setIsLoading(false);
          setIsSuccess(true);
        } catch (error) {
          console.error(error);
        }
      }
    };
    waitForTx();
  }, [hash]);

  const isDaoMember =
    data?.proposal?.dao.members &&
    data.proposal.dao.members.some(m => m.member.id.toLowerCase() === address?.toLowerCase());

  const handleSuccess = async (result: ISuccessResult) => {
    const config = await prepareWriteContract({
      address: data?.proposal?.dao.id,
      abi: daoAbi,
      functionName: "voteOnProposal",
      args: [
        // TODO - This logic needs changing. The proposal ID should come from the contract and not rely on this weird conditional logic.
        // Currently we do not get the proposal ID from the contract. We should add a function to the subgraph which gets the
        // proposal ID from the mapping or consider another approach.
        typeof index === "string" ? BigInt(index) : BigInt(0),
        selectedOptionId ? BigInt(selectedOptionId.index) : BigInt(0),
        address || zeroAddress,
        //@ts-ignore
        BigInt(result.merkle_root),
        //@ts-ignore
        BigInt(result.nullifier_hash),
        //@ts-ignore
        decode("uint256[8]", result.proof),
      ],
    });
    const { hash } = await writeContract(config);
    setHash(hash);
    setIsLoading(true);
  };

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
    buttonText = "Vote with World ID";
  }

  if (isLoading) {
    buttonText = "Voting...";
  }

  if (isSuccess) {
    buttonText = "Voted!";
  }

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{proposal.title}</h2>
        <span
          className={`px-2 py-1 text-sm rounded-md ${
            proposal.proposalState === "Active" ? "bg-green-300 text-white" : "bg-yellow-500 text-gray-800"
          }`}
        >
          {proposal.proposalState}
        </span>
      </header>

      <div className="flex">
        <div className="w-4/5 flex flex-col justify-center">
          <Image
            className="rounded-3xl"
            src={getDaoImage(proposal.dao.name)}
            alt="dao-image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col text-left ml-8 p-10 bg-white rounded-3xl">
          <p className="mb-1 text-gray-600">Proposed by: {proposal.proposer.id}</p>
          <span>
            <p className="mb-4 text-gray-600">Current approvals: {proposal.options[0].voteCount}</p>
            <p className="mb-4 text-gray-600">Current rejections: {proposal.options[1].voteCount}</p>
          </span>
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
                {/* <span className="text-gray-800">{option.name}</span> */}
                <span className="text-gray-800">{option.description}</span>
              </label>
            ))}
          </div>

          {isDaoMember && proposalActionId && (
            <div className="text-center mt-10">
              <IDKitWidget
                app_id={worldCoinAppId}
                action={proposalActionId}
                signal={address}
                onSuccess={handleSuccess}
                credential_types={["orb"] as [CredentialType.Orb]}
                enableTelemetry
              >
                {({ open }) => (
                  <button
                    className={`mt-4 px-4 py-2 rounded-md w-fit ${
                      selectedOptionId ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-600 cursor-not-allowed "
                    }`}
                    disabled={!address || !selectedOptionId || isLoading || isSuccess}
                    onClick={open}
                  >
                    {buttonText}
                  </button>
                )}
              </IDKitWidget>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proposal;
