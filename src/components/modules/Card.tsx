import { Alert, AlertDescription, AlertTitle, VStack } from "@chakra-ui/react";

const Card = () => {
  return (
    <Alert status="success" mt={10} rounded={6} maxW={500}>
      <VStack width="100%" align="left" spacing={1} ml={2}>
        <AlertTitle textAlign="left">Tech stack</AlertTitle>
        <AlertDescription textAlign="left">Next.js, React, TypeScript and Chakra</AlertDescription>
      </VStack>
    </Alert>
  );
};

export default Card;
