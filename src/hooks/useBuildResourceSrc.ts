import { IPFS_GATEWAY, IPFS_REGEX } from "@/config/constants";

const extractIpfsHash = (ifpsUrl: string) => {
  const match = IPFS_REGEX.exec(ifpsUrl);

  if (!(match && match[1])) {
    throw new Error("Invalid IPFS URL");
  }

  return match[1];
};

const useBuildResourceSrc = (src: string) => {
  if (IPFS_REGEX.test(src)) {
    return `${IPFS_GATEWAY}${extractIpfsHash(src)}`;
  }

  return src;
};

export default useBuildResourceSrc;
