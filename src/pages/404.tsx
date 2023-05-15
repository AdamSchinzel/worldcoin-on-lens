import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Redirect404: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
};

export default Redirect404;
