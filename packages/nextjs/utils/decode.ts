import { decodeAbiParameters } from "viem";

export const decode = <T>(type: string, proof: string): T => {
  //@ts-ignore
  return decodeAbiParameters([{ type: type }], proof)[0];
};
