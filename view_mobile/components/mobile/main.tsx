import HeroSection from "./hero";
import DesktopPageView from "./desktopView";
import MobilePageView from "./mobileView";
import Container from "../shared/container";

const Main: () => JSX.Element = () => {
  return (
    <Container>
      <div className="flex flex-col xl:py-8 py-4 px-4 xl:px-0">
        <HeroSection />
        <MobilePageView />
        <DesktopPageView />
      </div>
    </Container>
  );
};

export default Main;
