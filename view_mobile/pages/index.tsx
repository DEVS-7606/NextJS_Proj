import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

const Home: () => JSX.Element = () => {
  const router:NextRouter = useRouter();

  useEffect(() => {
    router.push("/mobile");
  }, []);

  return <p>Loading...</p>;
};

export default Home;
