import { TOAST_DURATION } from "@/config/constants";
import Profile from "@/types/Profile";
import Block from "@/types/block";
import copyToClipboard from "@/utils/copyToClipboard";
import truncateBlockHash from "@/utils/truncateBlockHash";
import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  HStack,
  Skeleton,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import Heading from "../elements/Heading";
import ProfileCard from "../modules/ProfileCard";

const Home = () => {
  const [profiles, setProfiles] = useState<Array<Profile>>([]);
  const [block, setBlock] = useState<Block>();
  const [loadingProfiles, setLoadingProfiles] = useState<boolean>(false);
  const [loadingBlock, setLoadingBlock] = useState<boolean>(false);

  const toast = useToast();

  const handleCopyToClipboard = (text: string | undefined) => {
    copyToClipboard(text);
    toast({
      title: "Block hash copied to clipboard",
      duration: TOAST_DURATION,
      status: "success",
      position: "bottom-right",
    });
  };

  const getProfiles = async () => {
    setLoadingProfiles(true);
    const res = await fetch("api/get-profiles");
    const profilesData = await res.json();

    profilesData.results.sort((a: Profile, b: Profile) => {
      // @ts-ignore
      return new Date(a.block_timestamp.value) - new Date(b.block_timestamp.value);
    });

    setProfiles(profilesData.results);
    setLoadingProfiles(false);
  };

  const getLatestBlock = async () => {
    setLoadingBlock(true);
    const res = await fetch("api/get-latest-block");
    const blockData = await res.json();
    setBlock(blockData.results[0]);
    setLoadingBlock(false);
  };

  useEffect(() => {
    getProfiles();
    getLatestBlock();
  }, []);

  return (
    <>
      <Heading text="Worldcoin on Lens" description="Find out which people have World ID verified on Lens" />
      <ButtonGroup gap={[0, 3, 3, 3]} mt={25} flexDir={["column", "row", "row", "row"]} alignItems="center">
        <Link href="https://worldcoin.org/download-app" passHref target="_blank">
          <Button variant="outline" colorScheme="green" size={["md", "lg"]}>
            Get World ID
          </Button>
        </Link>
        <Link href="https://human.withlens.app/" passHref target="_blank">
          <Button colorScheme="green" size={["md", "lg"]}>
            Verify World ID with Lens
          </Button>
        </Link>
      </ButtonGroup>
      <HStack mt={12} gap={[5, 20]} flexDir={["column", "row", "row", "row"]} alignItems="center">
        {loadingProfiles || loadingBlock ? (
          <>
            <Stat textAlign="center">
              <StatLabel>
                Latest block
                <CopyIcon mx="2px" />
              </StatLabel>
              <StatNumber>
                <Skeleton mt={2} height="28px" width="130px" />
              </StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Accounts verified</StatLabel>
              <StatNumber>
                <Skeleton mt={2} ml={10} height="28px" width="35px" />
              </StatNumber>
            </Stat>
          </>
        ) : (
          <>
            <Stat textAlign="center">
              <StatLabel>
                Latest block
                <CopyIcon cursor="pointer" onClick={() => handleCopyToClipboard(block?.block_hash)} mx="2px" />
              </StatLabel>
              <StatNumber>{truncateBlockHash(block?.block_hash)}</StatNumber>
            </Stat>
            <Stat textAlign="center">
              <StatLabel>Accounts verified</StatLabel>
              <StatNumber>{profiles?.length}</StatNumber>
            </Stat>
          </>
        )}
      </HStack>
      {loadingProfiles ? (
        <Spinner mt={100} size="lg" />
      ) : (
        <VStack my={35} gap={3}>
          {profiles.map((profile: Profile) => (
            <ProfileCard
              key={profile.profile_id}
              profileId={profile.profile_id}
              joined={profile.block_timestamp.value}
            />
          ))}
        </VStack>
      )}
    </>
  );
};

export default Home;
