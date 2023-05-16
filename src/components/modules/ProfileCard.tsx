import { useProfileQuery } from "@/graphql/generated";
import useBuildResourceSrc from "@/hooks/useBuildResourceSrc";
import formatDate from "@/utils/formatDate";
import getStampFyiURL from "@/utils/getPlaceholderAvatar";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Flex, HStack, Skeleton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProfileCardProps {
  profileId: string;
  joined: string;
}

const ProfileCard = ({ profileId, joined }: IProfileCardProps) => {
  const { data, loading } = useProfileQuery({ variables: { request: { profileId: profileId } } });

  // @ts-ignore
  const src = useBuildResourceSrc(data?.profile?.picture?.original?.url);

  return (
    <Flex
      border="1px solid #E4E4E4"
      p="25px"
      alignItems="center"
      borderRadius="6px"
      mx={[5, 0, 0, 0]}
      w={["95%", "85%", "75%", "700px"]}>
      {!loading ? (
        <Image
          src={src ?? getStampFyiURL(data?.profile?.ownedBy?.toLowerCase())}
          alt={data?.profile?.handle}
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        />
      ) : (
        <Skeleton height="50px" width="50px" borderRadius="100%" />
      )}
      <Flex flexDir="column" alignItems="flex-start" ml={5}>
        <Text fontWeight="bold" fontSize="xl">
          {!loading ? data?.profile?.name ?? data?.profile?.handle : <Skeleton height="18px" width="140px" />}
        </Text>
        <Link href={`https://lenster.xyz/u/${data?.profile?.handle}`} target="_blank">
          <Text
            cursor="pointer"
            color="gray.500"
            mb={3}
            _hover={{ textDecoration: "underline" }}
            display="flex"
            alignItems="center">
            {!loading ? data?.profile?.handle : <Skeleton mt={2} height="16px" width="120px" />}
            <ExternalLinkIcon ml={1} w={3} />
          </Text>
        </Link>
        <Text>{!loading ? data?.profile?.bio : <Skeleton height="16px" width="200px" />}</Text>
        <HStack mt={data?.profile?.bio ? 3 : 0} spacing={[0, 3]} flexDir={["column", "row"]} alignItems="flex-start">
          <HStack spacing={2}>
            {!loading ? (
              <Text fontWeight="bold">{data?.profile?.stats.totalFollowing}</Text>
            ) : (
              <Skeleton height="16px" width="36px" />
            )}
            &nbsp;
            <Text>following</Text>
          </HStack>
          <HStack spacing={2}>
            {!loading ? (
              <Text fontWeight="bold">{data?.profile?.stats.totalFollowers}</Text>
            ) : (
              <Skeleton height="16px" width="36px" />
            )}
            &nbsp;
            <Text>followers</Text>
          </HStack>
          <Badge py={1} px={2}>
            Verified {formatDate(joined)}
          </Badge>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
