// Remove this when saving DAO image via IPFS is implemented
export const getDaoImage = (dao: string) => {
  if (dao === "Blockchain DAO") {
    return "/assets/dao1.png";
  }
  if (dao === "AI Governance DAO") {
    return "/assets/dao2.png";
  } else {
    return "/assets/dao3.png";
  }
};
