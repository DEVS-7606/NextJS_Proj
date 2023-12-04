import bedroom from "../../../../public/images/Bedroom.svg";
import bathtub from "../../../../public/images/Bathtub.svg";
import car from "../../../../public/images/parking.svg";
import map from "../../../../public/images/site-map.svg";
import home from "../../../../public/images/new-dev-home.svg";
import downArrow from "../../../../public/images/downArrow.svg";
import Image from "next/image";
import ToggleButton from "@/shared/components/toggleMoreOrLessBtn/toggleMoreOrLessBtn";

const AboutProperty = ({
  title,
  fareNum,
  fare,
  area,
  state,
  postalCode,
  bedrooms,
  bathrooms,
  carSpaces,
  propertyType,
  totalProperties,
  displaySuite_fareNum,
  displaySuite_fare,
  displaySuite_area,
  displaySuite_shortenState,
  displaySuite_postalCode,
  descriptionList,
}: any) => {
  const renderPropertySpecs = () => {
    return (
      <div className="flex mb-2 lg:mb-4 text-sm text-lightGray">
        <div className="flex items-center gap-2 pr-2 border-r">
          <Image src={bedroom} alt="bed" />
          <span>{bedrooms}</span>
        </div>
        <div className="flex items-center gap-2 px-2 border-r">
          <Image src={bathtub} alt="bed" />
          <span>{bathrooms}</span>
        </div>
        <div className="flex items-center gap-2 pl-2">
          <Image src={car} alt="bed" />
          <span>{carSpaces}</span>
        </div>
      </div>
    );
  };

  const renderDisplayLocation = () => {
    if (
      displaySuite_fareNum ||
      displaySuite_fare ||
      displaySuite_area ||
      displaySuite_shortenState ||
      displaySuite_postalCode
    ) {
      return (
        <div className="mb-2 lg:border-r pr-6">
          <div className="flex gap-2 items-center mb-1">
            <Image src={map} alt="map" />
            <p className="text-sm font-normal text-lightGray">
              Display Location
            </p>
          </div>
          <p className="text-base font-normal text-almostBlack">{`${displaySuite_fareNum} ${displaySuite_fare}, ${displaySuite_area}, ${displaySuite_shortenState} ${displaySuite_postalCode}`}</p>
        </div>
      );
    }
  };

  const renderPropertyType = () => {
    if (propertyType) {
      return (
        <div className="mb-2 lg:border-r pr-6">
          <div className="flex gap-2 items-center mb-1">
            <Image src={map} alt="map" />
            <p className="text-sm font-normal text-lightGray">Property Type</p>
          </div>
          <p className="text-base font-normal text-almostBlack">
            {propertyType}
          </p>
        </div>
      );
    }
  };

  const renderTotalPropertiesAvailable = () => {
    return (
      <div className="mb-2">
        <div className="flex gap-2 items-center mb-1">
          <Image src={home} alt="map" />
          <p className="text-sm font-normal text-lightGray">size</p>
        </div>
        <p className="text-base font-normal text-almostBlack">
          {totalProperties}
        </p>
      </div>
    );
  };

  const renderBasicSpecsOfProperty = () => {
    return (
      <div className="my-4 flex flex-col">
        <h2 className="font-medium text-lg text-almostBlack">About {title}</h2>
        <p className="font-medium text-lg text-almostBlack mt-4 mb-2 lg:text-2xl">{`${fareNum} ${fare}, ${area}, ${state} ${postalCode}`}</p>
        {renderPropertySpecs()}
        <div className="lg:flex pb-8 gap-6">
          {renderDisplayLocation()}
          {renderPropertyType()}
          {renderTotalPropertiesAvailable()}
        </div>
      </div>
    );
  };

  const renderMoreDetailsOfProperty = () => {
    const updateDescriptionList = descriptionList.replace(
      "ul",
      'ul class="list-inside list-disc"'
    );
    return (
      <div
        dangerouslySetInnerHTML={{ __html: updateDescriptionList }}
        className="mt-14 mb-6 flex flex-col gap-8 text-almostBlack"
      />
    );
  };

  return (
    <div className="border-b pb-8 mb-8">
      {renderBasicSpecsOfProperty()}
      <hr />
      <ToggleButton
        mainClassName="relative"
        initialHeight="200px"
        className="text-seaBlue gap-1"
        ShowMore="Read more"
        ShowLess="Read less"
        valueClassName="pl-8 des relative overflow-hidden transition-all ease-in-out duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-28 before:bg-gradient-to-t before:from-[rgba(255,255,255)] before:via-[rgba(255,255,255,0.7)] before:to-transparent after:h-10"
        value={renderMoreDetailsOfProperty()}
        propsChildClass=""
        propsChildClassIfFalse="rotate-180"
        propsChildClassIfTrue="rotate-0"
      >
        <Image src={downArrow} alt="downArrow" />
      </ToggleButton>
    </div>
  );
};

export default AboutProperty;
