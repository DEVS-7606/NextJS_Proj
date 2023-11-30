import Main from "@/modules/conveyancing/components/main";
import Layout from "@/shared/components/Layout/Layout";
import { useState } from "react";
// import Layout from "@/components/shared/Layout";

const Conveyancing = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowSideNavbar(!showSideNavbar);
  };
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default Conveyancing;
