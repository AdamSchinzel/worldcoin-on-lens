import Main from "@/components/layouts/Main";
import Home from "@/components/templates/Home";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Main>
      <Home />
    </Main>
  );
};

export default HomePage;
