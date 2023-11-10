import Main from "../../components/main/main";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import SideNavbar from "@/components/sideNavbar/sideNavbar";

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
