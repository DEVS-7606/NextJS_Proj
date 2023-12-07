import { useEffect } from "react";

const Home = (): JSX.Element => {
  useEffect(() => {
    window.location.assign("/real-estate-agency/");
  }, []);

  return <p>Loading...</p>;
};

export default Home;
