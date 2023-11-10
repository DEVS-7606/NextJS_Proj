import { Images } from "@/data";
import Image from "next/image";
import Link from "next/link";

const DesktopPageView: () => JSX.Element = () => {
  return (
    <section
      className="text-start flex flex-row-reverse px-16 py-10 items-center
gap-4 max-lg:flex-col max-lg:px-0 max-lg:text-center"
    >
      <div
        className="w-1/2 flex px-20
justify-start flex-col gap-4 max-lg:w-full max-lg:px-0 max-lg:gap-4"
      >
        <h2 className="font-bold text-2xl ">
          Search, plan and research properties.
        </h2>
        <p className="font-normal text-base text-lightGray">
          Search any property in Australia, get price data and suburb
          information, plus points of interest.
        </p>
        <div className="flex gap-4 my-4 max-lg:justify-center max-lg:mt-0 max-lg:px-8 max-xxs:px-4 items-center">
          {downloadAppLinkImages()}
        </div>
      </div>
      <div className="w-1/2 flex justify-start max-lg:justify-start max-lg:w-full max-lg:px-4 max-sm:justify-center">
        {desktopImage()}
      </div>
    </section>
  );
};

export default DesktopPageView;

const downloadAppLinkImages = (): JSX.Element[] => {
  return Images.slice(0, 2).map((image) => {
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
  });
};

const desktopImage = (): JSX.Element[] => {
  return Images.slice(8, 9).map((image) => {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={image.className}
      />
    );
  });
};
