import { Chain, optimismGoerli, polygonMumbai, sepolia } from "wagmi/chains";

export type TChainAttributes = {
  // color | [lightThemeColor, darkThemeColor]
  color: string | [string, string];
};

export const NETWORKS_EXTRA_DATA: Record<string, TChainAttributes> = {
  [sepolia.id]: {
    color: ["#5f4bb6", "#87ff65"],
  },
  [polygonMumbai.id]: {
    color: "#92D9FA",
  },
  [optimismGoerli.id]: {
    color: "#f01a37",
  },
};

export function getEnabledChains(): Array<Chain & Partial<TChainAttributes>> {
  const enabledChains = [
    { ...sepolia, ...NETWORKS_EXTRA_DATA[sepolia.id] },
    { ...polygonMumbai, ...NETWORKS_EXTRA_DATA[polygonMumbai.id] },
    { ...optimismGoerli, ...NETWORKS_EXTRA_DATA[optimismGoerli.id] },
  ];

  return enabledChains;
}
