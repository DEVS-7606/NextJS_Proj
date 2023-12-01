import bedroom from "../../../../public/images/Bedroom.svg";
import bathtub from "../../../../public/images/Bathtub.svg";
import car from "../../../../public/images/parking.svg";
import map from "../../../../public/images/site-map.svg";
import home from "../../../../public/images/new-dev-home.svg";
import Image from "next/image";

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
  const propertySpecs = () => {
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

  const displayLocation = () => {
    return (
      <div>
        <div className="mb-2 lg:border-r lg:pr-6">
          <div className="flex gap-2 items-center mb-1">
            <Image src={map} alt="map" />
            <p className="text-sm font-normal text-lightGray">
              Display Location
            </p>
          </div>
          <p className="text-base font-normal text-almostBlack">{`${displaySuite_fareNum} ${displaySuite_fare}, ${displaySuite_area}, ${displaySuite_shortenState} ${displaySuite_postalCode}`}</p>
        </div>
        <div className="mb-2 lg:border-r lg:pr-6">
          <div className="flex gap-2 items-center mb-1">
            <Image src={map} alt="map" />
            <p className="text-sm font-normal text-lightGray">Property Type</p>
          </div>
          <p className="text-base font-normal text-almostBlack">
            {propertyType}
          </p>
        </div>
        <div className="mb-2 lg:border-r lg:pr-6">
          <div className="flex gap-2 items-center mb-1">
            <Image src={home} alt="map" />
            <p className="text-sm font-normal text-lightGray">size</p>
          </div>
          <p className="text-base font-normal text-almostBlack">
            {totalProperties}
          </p>
        </div>
      </div>
    );
  };

  const basicSpecsOfProperty = () => {
    return (
      <div className="my-4 flex flex-col">
        <h2 className="font-medium text-lg text-almostBlack">About {title}</h2>
        <p className="font-medium text-lg text-almostBlack mt-4 mb-2 lg:text-2xl">{`${fareNum} ${fare}, ${area}, ${state} ${postalCode}`}</p>
        {propertySpecs()}
        {displayLocation()}
      </div>
    );
  };

  const moreDetailsOfProperty = () => {
    const updateDescriptionList = descriptionList.replace(
      "ul",
      'ul class="list-inside list-disc"'
    );
    return (
      <div
        dangerouslySetInnerHTML={{ __html: updateDescriptionList }}
        className="mt-8"
      ></div>
    );
  };

  return (
    <>
      {basicSpecsOfProperty()}
      <hr />
      {moreDetailsOfProperty()}
    </>
  );
};

export default AboutProperty;
