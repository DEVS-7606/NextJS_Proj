import { Images } from "@/data";
import Image from "next/image";
import Link from "next/link";

const MobilePageView: () => JSX.Element = () => {
  return (
    <section className="text-start flex px-16 py-24 items-center max-lg:flex-col max-lg:px-0 max-lg:text-center max-lg:gap-2 max-lg:pt-16 max-lg:pb-10 max-xs:pb-16 ">
      <div className="w-1/2 flex flex-col gap-4 max-lg:w-full ">
        <h2 className="font-bold text-2xl ">Save and track.</h2>
        <p className="font-normal text-base text-lightGray">
          Shortlist your favorite properties to keep track of upcoming open for
          inspections and auction. Login with your resi.uatz.view.com.au account
          to sync your saved properties between your computer and mobile
          devices.
        </p>
        <div className="flex gap-4 my-8 max-lg:px-8 max-xxs:px-4 max-lg:justify-center max-lg:mt-0 items-center">
          {downloadAppLinkImages()}
        </div>
      </div>
      <div className="w-1/2 flex justify-end max-lg:justify-start max-lg:w-full max-lg:px-20 max-sm:justify-center">
        {mobileImage()}
      </div>
    </section>
  );
};

export default MobilePageView;

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

const mobileImage = (): JSX.Element[] => {
  return Images.slice(7, 8).map((image) => {
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
