import { Images } from "@/data";
import Image from "next/image";
import Link from "next/link";

const HeroSection: () => JSX.Element = () => {
  return (
    <section className="bg-saltWhite text-start rounded-xl px-14 py-10 text-almostBlack flex flex-col gap-2 max-lg:gap-5 max-md:px-6 max-md:py-6 max-xs:gap-4">
      <h1 className="text-74 leading-82 xl:px-2 headLine w-2/3 max-lg:text-44 max-lg:leading-52 max-md:w-full">
        Explore properties wherever and whenever you like.
      </h1>
      <p className="font-normal text-lg w-3/4  max-lg:text-base max-xs:w-full max-xs:text-sm">
        Available on iOS and Android, the resi.uatz.view.com.au app helps you
        keep on top of your property search with the latest real estate listings
        for sale, rent, recently sold, as well as unlisted properties.
      </p>
      <div className="flex gap-4 my-8 max-lg:my-2 max-md:justify-center items-center">
        {downloadAppLinkImages()}
      </div>
    </section>
  );
};

export default HeroSection;

const downloadAppLinkImages = (): JSX.Element[] => {
  return Images.slice(0, 2).map((image, index) => {
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
