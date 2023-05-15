type Profile = {
  block_timestamp: {
    value: string;
  };
  created_block_hash: string;
  data_stream_metadata: {
    uuid: string;
    source_timestamp: number;
  };
  profile_id: string;
  verified: boolean;
};

export default Profile;
