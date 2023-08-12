// pages/dashboard.js
import React, { useEffect, useState } from "react";
import { ElectionQueryDocument, ElectionQueryQuery, execute } from "../.graphclient";
import { NextPage } from "next";
import { zeroAddress } from "viem";
import { Chain, useAccount, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import electionAbi from "~~/abis/election.abi";
import sourceVoterAbi from "~~/abis/sourcevoter.abi";
import CandidateCard from "~~/components/CandidateCard";

// TODO refactor
// Choose base contract if on Optimism
// Else, choose relevant CCIP source contract
const getPrepareContractWriteOpts = (
  chain: (Chain & { unsupported?: boolean | undefined }) | undefined,
  address: string | undefined,
  data: ElectionQueryQuery | undefined,
  selectedCandidate: number,
) => {
  // Chain ID for CCIP config
  const chainIdOptimismGoerli = BigInt("2664363617261496610");

  if (!chain || !address) {
    return {
      address: zeroAddress,
      abi: electionAbi,
      functionName: "vote",
      args: [address ?? "", BigInt(0)],
    };
  }
  // OP Goerli
  if (chain.id === 420) {
    return {
      address: data?.elections[0].id,
      abi: electionAbi,
      functionName: "vote",
      args: [address ?? "", BigInt(selectedCandidate)],
    };
  } else if (chain.id === 80001) {
    // Mumbai
    return {
      address: process.env.NEXT_PUBLIC_CCIP_SOURCE_MUBAI,
      abi: sourceVoterAbi,
      functionName: "vote",
      args: [chainIdOptimismGoerli, process.env.NEXT_PUBLIC_CCIP_DESTINATION, 1, selectedCandidate],
    };
  } else {
    console.log("return sep");
    // Sepolia
    return {
      address: process.env.NEXT_PUBLIC_CCIP_SOURCE_SEPOLIA,
      abi: sourceVoterAbi,
      functionName: "vote",
      args: [chainIdOptimismGoerli, process.env.NEXT_PUBLIC_CCIP_DESTINATION, 1, selectedCandidate],
    };
  }
};

const Election: NextPage = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [data, setData] = useState<ElectionQueryQuery>();
  const [selectedCandidate, setSelectedCandidate] = useState<number>(0);

  const hasUserVoted = data?.elections[0].voters
    ? data.elections[0]?.voters.some(v => v.id.toLowerCase() === address?.toLowerCase())
    : false;

  useEffect(() => {
    execute(ElectionQueryDocument, {}).then(result => {
      setData(result?.data);
    });
  }, [setData]);

  const options = getPrepareContractWriteOpts(chain, address, data, selectedCandidate);

  // @ts-ignore
  const { config } = usePrepareContractWrite(options);

  // @ts-ignore
  const { data: writeData, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  if (!data?.elections[0].candidates) {
    return <></>;
  }

  const { candidates } = data.elections[0];

  let buttonText = "Connect Wallet";

  if (address && !isLoading && !isSuccess) {
    buttonText = "Vote";
  }

  if (isLoading) {
    buttonText = "Voting...";
  }

  if (hasUserVoted || isSuccess) {
    buttonText = "Voted!";
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-left mb-2">Cast your vote in the National Election</h2>

      <div className="flex">
        <div className="w-2/5 grid grid-cols-2 gap-4">
          {data.elections[0].candidates.map((c, i) => {
            return (
              <CandidateCard
                key={i}
                candidate={c}
                imageSource={`/assets/politician${i + 1}.png`}
                onClick={() => setSelectedCandidate(i)}
              />
            );
          })}
        </div>

        <div className="w-1/2 bg-gray-200 p-12 rounded-lg ml-4 text-left">
          <h2 className="text-lg font-semibold">{candidates[selectedCandidate].name}</h2>
          <p className="text-gray-600">{candidates[selectedCandidate].party}</p>
          <p className="mt-2">{candidates[selectedCandidate].description}</p>
          <button
            disabled={!address || isLoading || isSuccess || hasUserVoted}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 disabled:bg-gray-400 mt-4"
            onClick={write}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Election;
