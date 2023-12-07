import HeroContainer from "@/shared/components/heroContainer/heroContainer";
import settleEasyImage from "../../../../public/images/settle-easy.svg";
import Image from "next/image";

const BuyAndSellBanner = () => {
  const renderSettleEasy = () => {
    return (
      <a href="#">
        <Image
          src={settleEasyImage}
          alt="settleEasy"
          width={120}
          height={120}
          className="w-14 h-14 md:w-24 md:h-24 lg:w-120 lg:h-120px"
        />
      </a>
    );
  };

  return (
    <HeroContainer
      className="w-full pt-24 flex justify-between p-6 md:px-16 md:py-12 "
      title="Buying or selling?"
      subTitle="Redeem your $220 conveyancing voucher and free contract review"
      isRounded={"xl"}
    >
      {renderSettleEasy()}
    </HeroContainer>
  );
};

export default BuyAndSellBanner;
// .p-6, .md:px-16, .md:py-12, .bg-at-primary-50, .rounded-xl, .w-full, .relative

//.text-at-5xl, .font-bold, .font-golos, .lg:text-at-7xl, .break-words
//.text-at-5xl, .font-bold, .font-golos, .lg:text-at-7xl, .break-words
// .text-at-5xl, .font-bold, .font-golos, .lg:text-at-7xl, .break-words

// .text-sm, .font-normal, .font-dmSans, .md:text-base, .mt-4, .lg:text-lg
// .text-sm, .font-normal, .font-dmSans, .md:text-base, .mt-4
// .text-sm, .font-normal, .font-dmSans, .md:text-base, .mt-4
