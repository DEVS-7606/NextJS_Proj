import { Images, customerReview } from "@/data";
import Image from "next/image";
import { useState } from "react";

const CustomerReview = (): JSX.Element => {
  const [showFullReview, setShowFullReview] = useState<
    Record<string, number | boolean>[]
  >([
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
  ]);

  const fullReviewButton = (objId: number, objValue: boolean): void => {
    const updateReviews: Record<string, number | boolean>[] =
      showFullReview.map((obj) => {
        if (obj.id === objId) {
          return { ...obj, value: objValue };
        }
        return obj;
      });

    setShowFullReview(updateReviews);
  };

  const reviewRatings = (): JSX.Element[] => {
    return Images.slice(10, 11).map((star, index) => {
      return (
        <Image
          src={star.src}
          alt={star.alt}
          height={star.height}
          width={star.width}
          className={star.className}
          key={index}
        />
      );
    });
  };

  const reviews = (): JSX.Element[] => {
    return customerReview.map((review, index) => {
      return (
        <div
          className="bg-white border shadow-sm rounded-xl gap-2 h-fit p-4 flex flex-col text-start"
          key={index}
        >
          <div className="flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              {reviewRatings()}
              {reviewRatings()}
              {reviewRatings()}
              {reviewRatings()}
              {reviewRatings()}
            </div>
            <div className="text-xs font-normal text-almostBlack">
              {review.duration}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 h-[75px] ${
              showFullReview[index].value && "h-72 max-h-full"
            }`}
          >
            {review.review}
          </div>
          <div
            className="flex items-center gap-2 text-seaBlue mt-2 cursor-pointer"
            onClick={() =>
              fullReviewButton(index + 1, !showFullReview[index].value)
            }
          >
            Show {showFullReview[index].value ? "less" : "more"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className={`fill-seaBlue ${
                showFullReview[index].value &&
                "transform rotate-180 duration-500"
              }`}
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
          <div className="text-sm font-bold mt-4">{review.name}</div>
        </div>
      );
    });
  };

  return (
    <div className="mx-auto rounded-xl mb-14 bg-shirtBlue">
      <div className="flex items-center">
        <h1 className="text-base tracking-wider font-bold mx-4 mt-6 mb-4 lg:mx-auto lg:text-2xl lg:mt-10 lg:mb-6">
          What Settle Easy customers are saying...
        </h1>
      </div>
      <div className="px-4 pb-6 lg-px-10 lg:pb-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reviews()}
      </div>
    </div>
  );
};

export default CustomerReview;
