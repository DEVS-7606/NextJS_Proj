import Image from "next/image";
import { useRef, useState } from "react";
import StarImage from "../../../../public/images/star.svg";
import downArrow from "../../../../public/images/downArrow.svg";
import ToggleButton from "@/shared/components/toggleMoreOrLessBtn/toggleMoreOrLessBtn";

interface Iprops {
  index: number;
  periodOfTime: string;
  review: string;
  reviewer: string;
}

const CustomerReview = (props: Iprops): JSX.Element => {
  const [showFullReview, setShowFullReview] = useState(false);
  const heightRef = useRef<string>("96px");
  const reviewRef: any = useRef(null);

  const renderShowFullReviewBtn = (): void => {
    setShowFullReview(!showFullReview);
    if (!showFullReview) {
      return (heightRef.current = reviewRef.current?.scrollHeight);
    }
    heightRef.current = "96px";
  };

  const renderStar = () => {
    return (
      <div className="flex">
        {Array(5).fill(
          <Image src={StarImage} alt="star" height={20} width={20} />
        )}
      </div>
    );
  };

  const renderRatings = () => {
    return (
      <div className="flex justify-between">
        {renderStar()}
        <div className="text-xs font-normal text-almostBlack">
          {props.periodOfTime}
        </div>
      </div>
    );
  };

  const renderReview = () => {
    return (
      <div
        className={`overflow-hidden transition-all duration-500`}
        ref={reviewRef}
        style={{ height: heightRef.current }}
      >
        {props.review}
      </div>
    );
  };

  const renderShowMoreAndLessBtn = () => {
    return (
      <div
        className="flex items-center gap-1 text-seaBlue mt-2 cursor-pointer"
        onClick={() => renderShowFullReviewBtn()}
      >
        {showFullReview ? "Show less" : "Show more"}
        <Image
          src={downArrow}
          alt="downArrow"
          className={`transform duration-500 ${
            showFullReview ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    );
  };

  const renderReviewerName = () => {
    return <div className="text-sm font-bold mt-4">{props.reviewer}</div>;
  };

  return (
    <div
      className="bg-white border shadow-sm rounded-xl gap-2 h-fit p-4 flex flex-col text-start"
      key={props.index}
    >
      {renderRatings()}
      <ToggleButton
        initialHeight="96px"
        className="gap-1 text-seaBlue mt-2"
        ShowLess="Show Less"
        ShowMore="Show More"
        value={props.review}
      >
        <Image
          src={downArrow}
          alt="downArrow"
          className={`transform duration-500 ${
            showFullReview ? "rotate-180" : "rotate-0"
          }`}
        />
      </ToggleButton>
      {renderReviewerName()}
    </div>
  );
};

export default CustomerReview;
