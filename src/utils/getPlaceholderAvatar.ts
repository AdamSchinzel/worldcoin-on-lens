const getStampFyiURL = (address: string): string => {
  return `https://cdn.stamp.fyi/avatar/eth:${address}?s=300`;
};

export default getStampFyiURL;
