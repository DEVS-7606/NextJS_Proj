import { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import SideNavbar from "../sideNavbar/sideNavbar";

const Layout = (props: { children: any }) => {
  const [showSideNavbar, setShowSideideNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowSideideNavbar(!showSideNavbar);
  };
  return (
    <>
      <Header toogleNavbar={toggleNavbar} toogleValue={showSideNavbar} />
      <>{props.children}</>
      <Footer />
      <SideNavbar showSideNavbar={showSideNavbar} />
    </>
  );
};

export default Layout;
