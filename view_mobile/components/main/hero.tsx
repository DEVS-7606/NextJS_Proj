import Image from "next/image";
import Link from "next/link";

const HeroSection: () => JSX.Element = () => {
  return (
    <section className="bg-[#E8F4FD] text-start rounded-xl px-14 py-10 text-[#333333] flex flex-col gap-2 max-lg:gap-5 max-md:px-6 max-md:py-6 max-xs:gap-4">
      <h1 className="text-7xl leading-[82px] headLine w-2/3 max-lg:text-[44px] max-lg:leading-[52px] max-md:w-full">
        Explore properties wherever and whenever you like.
      </h1>
      <p className="font-normal text-lg w-3/4  max-lg:text-base max-xs:w-full max-xs:text-sm ">
        Available on iOS and Android, the resi.uatz.view.com.au app helps you
        keep on top of your property search with the latest real estate listings
        for sale, rent, recently sold, as well as unlisted properties.
      </p>
      <div className="flex gap-4 my-8 max-lg:my-2 max-md:justify-center items-center">
        <Link href="#">
          <Image
            src="/images/AppStore.36362f83.svg"
            alt="app-store link"
            width={180}
            height={90}
            className="max-xs:w-[150px] max-xxs:w-[120px]"
          />
        </Link>
        <Link href="#">
          <Image
            src="/images/PlayStore.7128a9f5.svg"
            alt="play-store link"
            width={180}
            height={90}
            className="max-xs:w-[150px] max-xxs:w-[120px]"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
