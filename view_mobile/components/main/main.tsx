import Image from "next/image";
import HeroSection from "./hero";
import DesktopPageView from "./desktopView";
import MobilePageView from "./mobileView";

const Main: () => JSX.Element = () => {
  return (
    <div className="flex flex-col py-8 mt-20 max-xl:px-4 max-xl:mt-9">
      <HeroSection />
      <MobilePageView />
      <DesktopPageView />
    </div>
  );
};

export default Main;
