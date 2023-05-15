import { Text, VStack } from "@chakra-ui/react";

interface IHeadingProps {
  text: string;
  description: string;
}

const Heading = ({ text, description }: IHeadingProps) => {
  return (
    <VStack textAlign="center" px={5}>
      <Text fontSize="3xl" fontWeight="black">
        {text}
      </Text>
      <Text fontSize="lg" fontWeight="semibold">
        {description}
      </Text>
    </VStack>
  );
};

export default Heading;
