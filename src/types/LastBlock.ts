type LastBlock = {
  block_hash: string;
  blockNumber: number;
  block_timestamp: {
    value: string;
  };
  datastream_metadata: {
    source_timestamp: number;
    uuid: string;
  };
};

export default LastBlock;
