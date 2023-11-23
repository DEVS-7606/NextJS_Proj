import Main from "../../components/mobileMain/main";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SideNavbar from "@/components/sideNavbar/sideNavbar";
import { useState } from "react";

const MobileView = (): JSX.Element => {
  const [showSideNavbar, setShowSideideNavbar] = useState(false);

  const toggleNavbar = (): void => {
    setShowSideideNavbar(!showSideNavbar);
  };

  return (
    <>
      <Header toogleNavbar={toggleNavbar} toogleValue={showSideNavbar} />
      <Main />
      <Footer />
      <SideNavbar showSideNavbar={showSideNavbar} />
    </>
  );
};

export default MobileView;
