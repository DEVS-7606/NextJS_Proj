import { useEffect } from "react";

const Home = (): JSX.Element => {
  useEffect(() => {
    window.location.assign("/real-estate-agency/biggin-scott-richmond-4326");
  }, []);

  return <p>Loading...</p>;
};

export default Home;
