import Main from "@/components/conveyancingMain/main";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import SideNavbar from "@/components/sideNavbar/sideNavbar";
import Head from "next/head";
import { useState } from "react";

const Conveyancing = () => {
  const [showSideNavbar, setShowSideideNavbar] = useState(false);

  const toggleNavbar = (): void => {
    setShowSideideNavbar(!showSideNavbar);
  };

  return (
    <>
      <Head>
        <title>Conveyancing with Settle Easy - view.com.au </title>
      </Head>
      <Header toogleNavbar={toggleNavbar} toogleValue={showSideNavbar} />
      <Main />
      <Footer />
      <SideNavbar showSideNavbar={showSideNavbar} />
    </>
  );
};

export default Conveyancing;
