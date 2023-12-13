import { ReactNode, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import SideNavbar from "../sideNavbar/sideNavbar";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowSideNavbar(!showSideNavbar);
  };
  return (
    <>
      <Header toggleNavbar={toggleNavbar} toggleValue={showSideNavbar} />
      {children}
      <Footer />
      <SideNavbar showSideNavbar={showSideNavbar} />
    </>
  );
};

export default Layout;
