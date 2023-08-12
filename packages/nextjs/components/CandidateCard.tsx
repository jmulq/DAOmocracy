import React from "react";
import Image from "next/image";
import { Candidate } from "~~/.graphclient";

type CandidateCardProps = {
  candidate: Pick<Candidate, "name" | "party" | "votes" | "id">;
  imageSource: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const CandidateCard = ({ candidate, imageSource, onClick }: CandidateCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg flex flex-col h-fit cursor-pointer" onClick={onClick}>
      <Image
        className="rounded-t-lg"
        about="candidate image"
        alt={`Candidate_${candidate.id}`}
        src={imageSource}
        width={500}
        height={500}
      />
      <h3 className="text-lg font-semibold">{candidate.name}</h3>
      <p className="text-gray-600 m-0.5">{candidate.party}</p>
      <p className="text-gray-600 m-0.5">Votes: {Number(BigInt(+candidate.votes))}</p>
    </div>
  );
};

export default CandidateCard;
