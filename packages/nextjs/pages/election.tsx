// pages/dashboard.js
import React, { useEffect, useState } from "react";
import { ElectionQueryDocument, ElectionQueryQuery, execute } from "../.graphclient";
import { NextPage } from "next";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import electionAbi from "~~/abis/election.abi";
import CandidateCard from "~~/components/CandidateCard";

export const candidateDescriptions = [
  "Vote for Viktor Kaine, a master of strategy and innovation in the realm of data manipulation. With cyber-enhanced intelligence and keen foresight, he's primed to lead with calculated precision. Viktor's augmented neural interfaces underscore his capacity for insightful governance, while glitchy holographic projections mirror his knack for navigating complexity. Dressed in adaptive urban attire, Viktor Kaine exudes enigmatic strength, a candidate who embraces the shadows and artfully shapes a new trajectory for the city.",
  "Elect Seraphina Reyes, a virtual reality trailblazer who wields data as a force for good. Her decisions are rooted in the intricate web of information, and holographic campaign rallies showcase her visionary leadership. Seraphina's VR headset-style eyewear demonstrates her grasp on the digital realm, while glowing data projections echo her mastery of data-driven decision-making. Through vibrant virtual environments, she immerses herself in the world she envisions, inviting voters to participate in the dawn of a new era of data-guided progress.",
  "Cast your vote for Aurora Sterling, a beacon of innovation and a tech-savvy visionary. With a comic book infusion, she symbolizes a new era of politics, one defined by cybernetic policies and virtual governance. Aurora's augmented cyber-eyes exemplify her commitment to progress, while neon-lit enhancements reflect her dedication to lighting the path toward a brighter future. Dynamic poses capture her energy, and her futuristic attire, adorned with glowing accents, signifies her role as a pioneer in navigating a metropolis painted in the vibrant hues of innovation.",
  "Binary Croak is a unique and unexpected candidate in the political arena. A digitally-augmented frog with a charismatic demeanor, Binary Croak advocates for the rights of augmented and non-human entities in the metropolis. Their platform revolves around equitable access to virtual spaces and bio-digital integration. With neon-lit skin and holographic projections, Binary Croak challenges the norms of the political landscape and represents a technologically diverse future.",
];

const Election: NextPage = () => {
  const { address } = useAccount();
  const [data, setData] = useState<ElectionQueryQuery>();
  const [selectedCandidate, setSelectedCandidate] = useState<number>(0);

  useEffect(() => {
    execute(ElectionQueryDocument, {}).then(result => {
      setData(result?.data);
    });
  }, [setData]);

  const { config } = usePrepareContractWrite({
    address: data?.elections[0].id,
    abi: electionAbi,
    functionName: "vote",
    args: [address ?? "", BigInt(selectedCandidate)],
  });

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

  if (isSuccess) {
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
          <p className="mt-2">{candidateDescriptions[selectedCandidate]}</p>
          <button
            disabled={!address || isLoading || isSuccess}
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
