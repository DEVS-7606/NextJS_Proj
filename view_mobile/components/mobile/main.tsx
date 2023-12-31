import HeroSection from "./hero";
import Container from "../shared/container";
import ResponsiveDisplayView from "./responsiveDisplayView";
import { RESPONSIVE_DISPLAY_PROPS } from "@/data";

const Main: () => JSX.Element = () => {
  const renderDifferentDisplayOfWebSite = () => {
    return RESPONSIVE_DISPLAY_PROPS.map((displayType) => {
      return (
        <ResponsiveDisplayView
          heading={displayType.heading}
          description={displayType.description}
          mainClassName={displayType.mainClassName}
          renderAppsImageClassName={displayType.renderAppsImageClassName}
          getImageClassName={displayType.getImageClassName}
          renderSpecsAndAppsImgClassName={
            displayType.renderSpecsAndAppsImgClassName
          }
          AppIndexStart={displayType.AppIndexStart}
          AppIndexEnd={displayType.AppIndexEnd}
          DisplayImageStartIndex={displayType.DisplayImageStartIndex}
          DisplayImageEndIndex={displayType.DisplayImageEndIndex}
        />
      );
    });
  };

  return (
    <Container>
      <div className="flex flex-col py-4 pb-8 px-4 lg:pb-20 xl:px-0 xl:py-8">
        <HeroSection />
        {renderDifferentDisplayOfWebSite()}
      </div>
    </Container>
  );
};

export default Main;
