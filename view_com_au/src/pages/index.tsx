// import { useEffect } from "react";

export const getServerSideProps = async (context: any) => {
  return {
    redirect: {
      permanent: true,
      destination: "/real-estate-agency/biggin-scott-richmond-4326",
    },
  };
};

const Home = (): JSX.Element => {
  return <p>Loading...</p>;
};

export default Home;
