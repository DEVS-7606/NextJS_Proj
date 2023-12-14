import Image from "next/image";
import StarImage from "../../../../public/images/star.svg";
import ToggleButton from "@/shared/components/toggleMoreOrLessBtn/toggleMoreOrLessBtn";
import DownArrow from "@/shared/components/downArrow/downArrow";

interface Iprops {
  index: number;
  periodOfTime: string;
  review: string;
  reviewer: string;
}

const CustomerReview = (props: Iprops): JSX.Element => {
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
        ShowLess={
          <div className="flex items-center gap-1">
            Show Less
            <DownArrow rotateAngle="rotate-180" />
          </div>
        }
        ShowMore={
          <div className="flex items-center gap-1">
            Show More
            <DownArrow rotateAngle="rotate-0" />
          </div>
        }
        value={props.review}
      />
      {renderReviewerName()}
    </div>
  );
};

export default CustomerReview;
