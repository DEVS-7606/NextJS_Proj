import { useEffect } from "react";

const Home = (): JSX.Element => {
  useEffect(() => {
    window.location.assign("/new-developments");
  }, []);

  return <p>Loading...</p>;
};

export default Home;
