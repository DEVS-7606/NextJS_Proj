import { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import SideNavbar from "../sideNavbar/sideNavbar";

const Layout = (props: { children: any }) => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowSideNavbar(!showSideNavbar);
  };
  return (
    <>
      <Header toggleNavbar={toggleNavbar} toggleValue={showSideNavbar} />
      {props.children}
      <Footer />
      <SideNavbar showSideNavbar={showSideNavbar} />
    </>
  );
};

export default Layout;
