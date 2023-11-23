import { Images } from "@/data";
import Image from "next/image";
import Link from "next/link";

const HeroSection = (): JSX.Element => {
  const settleEasy = (): JSX.Element[] => {
    return Images.slice(9, 10).map((image, index) => {
      return (
        <Link key={index} href="#">
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
    <section
      className="bg-saltWhite rounded-xl flex flex-row
    max-md:flex-col-reverse max-md:items-start max-md:py-6 max-md:gap-4 text-almostBlack px-16 max-md:px-6 max-lg:px-10 justify-between py-10 items-center text-start "
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-74 max-lg:text-5xl max-md:text-44  leading-82 headLine font-bold break-words">
          Buying or selling?
        </h1>
        <p className="text-base font-normal w-full max-md:text-sm">
          Redeem your $220 conveyancing voucher and free contract review
        </p>
      </div>
      {settleEasy()}
    </section>
  );
};

export default HeroSection;
