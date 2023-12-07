// import { IMAGES } from "../../../../data";
import HeroContainer from "@/shared/components/heroContainer/heroContainer";
import appStore from "../../../../public/images/AppStore.36362f83.svg";
import googlePlayStore from "../../../../public/images/PlayStore.7128a9f5.svg";
import Image from "next/image";

const ExploreProperties: () => JSX.Element = () => {
  const renderAppsImage = (): JSX.Element => {
    return (
      <div className="flex gap-4 mt-6 lg:mt-12">
        <a href="#">
          <Image src={appStore} alt="App Store" width="180" height="90" />
        </a>
        <a href="#">
          <Image
            src={googlePlayStore}
            alt="Play Store"
            width="180"
            height="90"
          />
        </a>
      </div>
    );
  };

  return (
    <HeroContainer
      className="mb-16 md:pr-72 w-full p-6 md:px-16 md:py-12 "
      title="Explore properties wherever and whenever you like."
      subTitle="Available on iOS and Android, the resi.uatz.view.com.au app helps you keep on top of your property search with the latest real estate listings for sale, rent, recently sold, as well as unlisted properties."
      isRounded={"xl"}
    >
      {renderAppsImage()}
    </HeroContainer>
  );
};

export default ExploreProperties;
