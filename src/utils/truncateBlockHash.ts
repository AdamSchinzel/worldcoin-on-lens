const truncateBlockHash = (blockHash: string | undefined): string => {
  return `${blockHash?.slice(0, 4)}...${blockHash?.slice(-4)}`;
};

export default truncateBlockHash;
