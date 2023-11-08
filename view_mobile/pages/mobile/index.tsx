import Main from "../../components/main/main";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import SideNavbar from "@/components/sideNavbar/sideNavbar";

const MobileView: () => JSX.Element = () => {
  const [showSideNavbar, setShowSideideNavbar] = useState<boolean>(false);

  const toggleNavbar: () => void = () => {
    setShowSideideNavbar(!showSideNavbar);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header toogleNavbar={toggleNavbar} toogleValue={showSideNavbar} />
      <div>
        <Main />
        <Footer />
      </div>
      <div
        className={
          showSideNavbar
            ? "fixed left-0 top-4 w-[100%] h-screen bg-white py-10 transform overflow-y-auto translate-x-0 duration-200 no-scrollbar xl:left-[-100%]"
            : "fixed left-[-100%] top-0 p-10 transform overflow-y-auto translate-x-0 duration-200"
        }
      >
        <SideNavbar />
      </div>
    </div>
  );
};

export default MobileView;
