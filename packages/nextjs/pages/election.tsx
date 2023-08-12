// pages/dashboard.js
import React, { useEffect, useState } from "react";
import { ElectionQueryDocument, ElectionQueryQuery, execute } from "../.graphclient";
import { prepareWriteContract, waitForTransaction, writeContract } from "@wagmi/core";
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import { NextPage } from "next";
import { decodeAbiParameters } from "viem";
import { useAccount, useNetwork } from "wagmi";
import electionAbi from "~~/abis/election.abi";
import sourceVoterAbi from "~~/abis/sourcevoter.abi";
import CandidateCard from "~~/components/CandidateCard";

const Election: NextPage = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const worldCoinAppId = process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID || "";
  const [data, setData] = useState<ElectionQueryQuery>();
  const [selectedCandidate, setSelectedCandidate] = useState<number>(0);

  const [hash, setHash] = useState<`0x${string}`>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const hasUserVoted = data?.elections[0].voters
    ? data.elections[0]?.voters.some(v => v.id.toLowerCase() === address?.toLowerCase())
    : false;

  useEffect(() => {
    execute(ElectionQueryDocument, {}).then(result => {
      setData(result?.data);
    });
  }, [setData]);

  useEffect(() => {
    const waitForTx = async () => {
      if (hash) {
        try {
          await waitForTransaction({
            hash: "0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060",
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

  // TODO move into its own file
  const decodeProof = (proof: string) => {
    //@ts-ignore
    return decodeAbiParameters([{ type: "uint256[8]" }], proof)[0];
  };

  const handleSuccess = async (result: ISuccessResult) => {
    const chainIdOptimismGoerli = BigInt("2664363617261496610");
    let options;
    // if chain === op goerli
    if (chain?.id === 420) {
      options = {
        address: data?.elections[0].id,
        abi: electionAbi,
        functionName: "vote",
        args: [
          address,
          BigInt(selectedCandidate),
          address,
          result.merkle_root,
          result.nullifier_hash,
          decodeProof(result.proof),
        ],
      };
      // TODO update source vote funcs
    } else if (chain?.id === 80001) {
      options = {
        address: process.env.NEXT_PUBLIC_CCIP_SOURCE_MUBAI,
        abi: sourceVoterAbi,
        functionName: "vote",
        args: [
          chainIdOptimismGoerli,
          process.env.NEXT_PUBLIC_CCIP_DESTINATION,
          1,
          address,
          BigInt(selectedCandidate),
          address,
          result.merkle_root,
          result.nullifier_hash,
          decodeProof(result.proof),
        ],
      };
    } else if (chain?.id === 11155111) {
      options = {
        address: process.env.NEXT_PUBLIC_CCIP_SOURCE_SEPOLIA,
        abi: sourceVoterAbi,
        functionName: "vote",
        args: [
          chainIdOptimismGoerli,
          process.env.NEXT_PUBLIC_CCIP_DESTINATION,
          1,
          address,
          BigInt(selectedCandidate),
          address,
          result.merkle_root,
          result.nullifier_hash,
          decodeProof(result.proof),
        ],
      };
    }
    if (!options) {
      window.alert("Cannot prepare contract config. Please try again.");
      return;
    }
    //@ts-ignore
    const config = await prepareWriteContract(options);
    //@ts-ignore
    const { hash } = await writeContract(config);
    setHash(hash);
    setIsLoading(true);
  };

  if (!data?.elections[0].candidates) {
    return <></>;
  }

  const { candidates } = data.elections[0];

  let buttonText = "Connect Wallet";

  if (address && !isLoading && !isSuccess) {
    buttonText = "Vote with World ID";
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

          <IDKitWidget
            app_id={worldCoinAppId}
            action="election_vote"
            signal={address}
            onSuccess={handleSuccess}
            credential_types={["orb"] as [CredentialType.Orb]}
            enableTelemetry
          >
            {({ open }) => (
              <button
                disabled={!address || isLoading || isSuccess || hasUserVoted}
                onClick={open}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 disabled:bg-gray-400 mt-4"
              >
                {buttonText}
              </button>
            )}
          </IDKitWidget>
        </div>
      </div>
    </>
  );
};

export default Election;
