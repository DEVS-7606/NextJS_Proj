import { IMAGES } from "@/data";
import Image from "next/image";
import Link from "next/link";

const HeroSection: () => JSX.Element = () => {
  const downloadAppLinkImages = (): JSX.Element[] => {
    return IMAGES.slice(0, 2).map((image, index) => {
      return (
        <Link href="#" key={index}>
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

  return (
    <section className="bg-saltWhite text-start rounded-xl md:px-14 md:py-10 text-almostBlack flex flex-col lg:gap-2 xs:gap-5 gap-4 px-6 py-6">
      <h1 className="text-44 lg:text-74 leading-52 lg:leading-82 xl:px-2 headLine md:w-2/3 w-full">
        Explore properties wherever and whenever you like.
      </h1>
      <p className="font-normal lg:text-lg  xs:text-base text-sm  xs:w-3/4 w-full ">
        Available on iOS and Android, the resi.uatz.view.com.au app helps you
        keep on top of your property search with the latest real estate listings
        for sale, rent, recently sold, as well as unlisted properties.
      </p>
      <div className="flex gap-4 my-2 lg:my-8 md:justify-normal justify-center items-center">
        {downloadAppLinkImages()}
      </div>
    </section>
  );
};

export default HeroSection;
