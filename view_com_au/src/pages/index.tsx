import { useEffect } from "react";

const Home = (): JSX.Element => {
  useEffect(() => {
    window.location.assign("/conveyancing");
  }, []);

  return <p>Loading...</p>;
};

export default Home;
