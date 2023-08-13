import React from "react";
import Image from "next/image";
import { DAO } from "~~/.graphclient";

type DAOCardProps = {
  dao: Pick<DAO, "name" | "id" | "description">;
  imageSource: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const DAOCard = ({ dao, imageSource, onClick }: DAOCardProps) => {
  return (
    <div className="bg-white shadow rounded-3xl flex flex-col h-fit cursor-pointer" onClick={onClick}>
      <Image
        className="rounded-t-3xl"
        about="dao image"
        alt={`DAO${dao.id}`}
        src={imageSource}
        width={500}
        height={500}
      />
      <div className="flex items-center h-14 justify-center">
        <h3 className="text-center text-lg font-semibold">{dao.name}</h3>
      </div>
    </div>
  );
};

export default DAOCard;
