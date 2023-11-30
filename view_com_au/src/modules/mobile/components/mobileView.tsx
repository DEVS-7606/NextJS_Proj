import { IMAGES } from "../../../../data";
import Image from "next/image";

const MobilePageView: () => JSX.Element = () => {
  const renderAppsImage = (): JSX.Element => {
    return (
      <div className="flex gap-4 my-8 justify-center lg:justify-normal mt-0 lg:px-0 items-center xxs:px-8 px-4 lg:mt-auto">
        {IMAGES.slice(0, 2).map((image, index) => {
          return (
            <a href="#" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={image.className}
              />
            </a>
          );
        })}
      </div>
    );
  };

  const getMobileImage = (): JSX.Element => {
    return (
      <div className="w-full lg:w-1/2 flex justify-center lg:px-0 px-20  sm:justify-end">
        {IMAGES.slice(7, 8).map((image, index) => {
          return (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.className}
            />
          );
        })}
      </div>
    );
  };

  const renderFeaturesDescAndAppsImg = () => {
    return (
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="font-bold text-2xl ">Save and track.</h2>
        <p className="font-normal text-base text-lightGray">
          Shortlist your favorite properties to keep track of upcoming open for
          inspections and auction. Login with your resi.uatz.view.com.au account
          to sync your saved properties between your computer and mobile
          devices.
        </p>
        {renderAppsImage()}
      </div>
    );
  };

  return (
    <section className="text-almostBlack text-center lg:text-start flex flex-col px-0 lg:px-16 items-center gap-2 lg:gap-0 lg:flex-row py-16 lg:py-24">
      {renderFeaturesDescAndAppsImg()}
      {getMobileImage()}
    </section>
  );
};

export default MobilePageView;
