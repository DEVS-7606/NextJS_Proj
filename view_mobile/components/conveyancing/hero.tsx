import Link from "next/link";
import settleEasyImage from "@/public/images/settle-easy.svg";
import Image from "next/image";

const HeroSection = () => {
  const renderSettleEasy = () => {
    return (
      <Link href="#">
        <Image
          src={settleEasyImage}
          alt="settleEasy"
          width={120}
          height={120}
          className="w-14 h-14 md:w-24 md:h-24 lg:w-120 lg:h-120px"
        />
      </Link>
    );
  };

  const renderPromotionalContent = () => {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl lg:text-7xl leading-52 headLine font-bold break-words">
          Buying or selling?
        </h1>
        <p className="md:text-base font-normal w-full text-sm">
          Redeem your $220 conveyancing voucher and free contract review
        </p>
      </div>
    );
  };
  return (
    <section
      className="bg-saltWhite rounded-xl flex md:flex-row
    flex-col-reverse items-start p-6 gap-4 md:gap-0 text-almostBlack justify-between md:px-16 md:py-12 md:items-center text-start"
    >
      {renderPromotionalContent()}
      {renderSettleEasy()}
    </section>
  );
};

export default HeroSection;
