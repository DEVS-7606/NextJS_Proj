import CustomerReview from "./customerReview";
import FAQ from "@/components/conveyancing/faq";
import HeroSection from "@/components/conveyancing/hero";
import VoucherDetails from "@/components/conveyancing/voucherDetails";
import { FREQ_ASKED_QUES, REVIEWS } from "@/data";

const Main = (): JSX.Element => {
  const renderFaq = () => {
    return (
      <div className="w-3/5 max-lg:w-full mb-4">
        <section className="flex items-center text-almostBlack mb-6 max-lg:mb-4">
          <h2 className="text-2xl font-bold bg-opacity-0 text-start  tracking-wider">
            Frequently Asked Questions
          </h2>
        </section>
        <section className="text-almostBlack">
          {FREQ_ASKED_QUES.map((data, index) => {
            return <FAQ ques={data.ques} ans={data.ans} index={index} />;
          })}
        </section>
      </div>
    );
  };

  const renderReviews = () => {
    return (
      <div className="mx-auto rounded-xl mb-14 bg-shirtBlue">
        <div className="flex items-center">
          <h1 className="text-base tracking-wider font-bold mx-4 mt-6 mb-4 lg:mx-auto lg:text-2xl lg:mt-10 lg:mb-6">
            What Settle Easy customers are saying...
          </h1>
        </div>
        <div className="px-4 pb-6 lg-px-10 lg:pb-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {REVIEWS.map((review, index) => {
            return (
              <CustomerReview
                index={index}
                periodOfTime={review.duration}
                review={review.review}
                reviewer={review.name}
              />
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="flex max-w-1200 mx-auto flex-col xl:py-8 p-4 xl:px-0 gap-8">
      <HeroSection />
      <VoucherDetails />
      {renderFaq()}
      {renderReviews()}
    </div>
  );
};

export default Main;