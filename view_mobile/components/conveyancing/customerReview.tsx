import Image from "next/image";
import { useRef, useState } from "react";
import StarImage from "@/public/images/star.svg";
import downArrow from "@/public/images/downArrow.svg";

interface Iprops {
  index: number;
  periodOfTime: string;
  review: string;
  reviewer: string;
}

const CustomerReview = (props: Iprops): JSX.Element => {
  const [showFullReview, setShowFullReview] = useState(false);
  const [height, setHeight] = useState<string>("96px");
  const reviewRef: any = useRef(null);

  const fullReviewButton = (): void => {
    setShowFullReview(!showFullReview);
    setHeight(!showFullReview ? reviewRef.current.scrollHeight : "96px");
  };

  const star = () => {
    return Array(5).fill(
      <Image src={StarImage} alt="star" height={20} width={20} />
    );
  };

  return (
    <div
      className="bg-white border shadow-sm rounded-xl gap-2 h-fit p-4 flex flex-col text-start"
      key={props.index}
    >
      <div className="flex justify-between">
        <div className="flex gap-1 justify-center items-center">{star()}</div>
        <div className="text-xs font-normal text-almostBlack">
          {props.periodOfTime}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500`}
        ref={reviewRef}
        style={{ height: height }}
      >
        {props.review}
      </div>
      <div
        className="flex items-center gap-1 text-seaBlue mt-2 cursor-pointer"
        onClick={() => fullReviewButton()}
      >
        Show {showFullReview ? "less" : "more"}
        <Image
          src={downArrow}
          alt="downArrow"
          className={`transform duration-500 ${
            showFullReview ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className="text-sm font-bold mt-4">{props.reviewer}</div>
    </div>
  );
};

export default CustomerReview;
