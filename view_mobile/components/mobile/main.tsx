import HeroSection from "./hero";
import DesktopPageView from "./desktopView";
import MobilePageView from "./mobileView";

const Main: () => JSX.Element = () => {
  return (
    <div className="flex max-w-1200 mx-auto flex-col xl:py-8 py-4 px-4 xl:px-0">
      <HeroSection />
      <MobilePageView />
      <DesktopPageView />
    </div>
  );
};

export default Main;
