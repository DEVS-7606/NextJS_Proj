import { IMAGES } from "@/data";
import Image from "next/image";
import Link from "next/link";

const DesktopPageView: () => JSX.Element = () => {
  const renderAppsImage = (): JSX.Element => {
    return (
      <div className="flex gap-4 my-4 justify-center lg:justify-normal mt-0 lg:mt-4 xxs:px-8 px-4 lg:px-0 items-center">
        {IMAGES.slice(0, 2).map((image) => {
          return (
            <Link href="#">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={image.className}
              />
            </Link>
          );
        })}
      </div>
    );
  };

  const getDesktopImage = (): JSX.Element => {
    return (
      <div className="lg:w-1/2 flex w-full px-4 lg:px-0 justify-center sm:justify-start">
        {IMAGES.slice(8, 9).map((image) => {
          return (
            <Image
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
      <div
        className="lg:w-1/2 flex lg:px-20
justify-start flex-col gap-4 w-full px-0"
      >
        <h2 className="font-bold text-2xl ">
          Search, plan and research properties.
        </h2>
        <p className="font-normal text-base text-lightGray">
          Search any property in Australia, get price data and suburb
          information, plus points of interest.
        </p>
        {renderAppsImage()}
      </div>
    );
  };

  return (
    <section
      className="text-almostBlack text-center lg:text-start flex flex-col lg:flex-row-reverse lg:px-16 py-10 items-center
gap-4 px-0 "
    >
      {renderFeaturesDescAndAppsImg()}
      {getDesktopImage()}
    </section>
  );
};

export default DesktopPageView;
