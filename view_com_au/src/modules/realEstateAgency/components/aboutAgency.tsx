import ToggleButton from "@/shared/components/toggleMoreOrLessBtn/toggleMoreOrLessBtn";
import DownArrow from "@/shared/components/downArrow/downArrow";

const AboutAgency = (props: any) => {
  const renderAgencyDetail = () => {
    return (
      <span
        className="flex flex-col overflow-hidden whitespace-pre-line text-almostBlack"
        dangerouslySetInnerHTML={{ __html: props.details }}
      />
    );
  };

  return (
    <div className="pb-8 border-b mb-8">
      <h2 className="text-lg font-bold text-almostBlack mb-4">
        About our agency
      </h2>
      <ToggleButton
        mainClassName="relative"
        initialHeight="120px"
        className="text-seaBlue gap-1"
        ShowMore={
          <div className="flex gap-2 items-stretch">
            Read More
            <DownArrow rotateAngle="rotate-0" />
          </div>
        }
        ShowLess={
          <div className="flex gap-2 items-stretch">
            Read Less
            <DownArrow rotateAngle="rotate-180" />
          </div>
        }
        valueClassName="pl-8 relative ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-28 before:bg-gradient-to-t before:from-[rgba(255,255,255)] before:via-[rgba(255,255,255,0.7)] before:to-transparent pb-20"
        value={renderAgencyDetail()}
      />
    </div>
  );
};

export default AboutAgency;
