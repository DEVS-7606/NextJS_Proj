import CustomerReview from "./customerReview";
import FAQ from "./faq";
import HeroSection from "./hero";
import VoucherDetails from "./voucherDetails";

const Main = (): JSX.Element => {
  return (
    <div className="flex max-w-1200 mx-auto flex-col py-8 max-xl:py-4 max-xl:px-4 gap-8">
      <HeroSection />
      <VoucherDetails />
      <FAQ />
      <CustomerReview />
    </div>
  );
};

export default Main;
