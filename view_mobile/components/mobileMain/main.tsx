import HeroSection from "./hero";
import DesktopPageView from "./desktopView";
import MobilePageView from "./mobileView";

const Main: () => JSX.Element = () => {
  return (
    <div className="flex max-w-1200 mx-auto flex-col py-8 max-xl:py-4 max-xl:px-4 ">
      <HeroSection />
      <MobilePageView />
      <DesktopPageView />
    </div>
  );
};

export default Main;
