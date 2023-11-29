import { IMAGES } from "@/data";
import Image from "next/image";
import Link from "next/link";

const MobilePageView: () => JSX.Element = () => {
  const renderAppsImage = (): JSX.Element => {
    return (
      <div className="flex gap-4 my-8 lg:px-0 xxs:px-8 px-4 justify-center lg:justify-normal mt-0 lg:mt-auto items-center">
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

  const getMobileImage = (): JSX.Element => {
    return (
      <div className="flex lg:justify-end sm:justify-start justify-center w-full lg:w-1/2 px-20 lg:px-0">
        {IMAGES.slice(7, 8).map((image) => {
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

  return (
    <section className="text-center lg:text-start flex px-0 lg:px-16 py-24 items-center flex-col lg:flex-row gap-2 lg:gap-0 pt-16 lg:pt-24 xs:pb-10 pb-16 ">
      {renderFeaturesDescAndAppsImg()}
      {getMobileImage()}
    </section>
  );
};

export default MobilePageView;
