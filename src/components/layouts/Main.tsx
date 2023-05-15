import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMainProps {
  children: ReactNode;
}

const Main = ({ children }: IMainProps) => {
  return (
    <Center mt={50} flexDir="column">
      {children}
    </Center>
  );
};

export default Main;
