import Image from "next/image";
import bed from "../../../../public/images/Bedroom.svg";
import car from "../../../../public/images/parking.svg";
import bathtub from "../../../../public/images/Bathtub.svg";
import { useEffect } from "react";

interface Iprops {
  details: any;
  params?: { agencySlug: string; propertyStatusSlug?: string };
}

interface Properties_status {
  status: string;
  displayStatus: string;
  numberOfProperties: any;
}

const ListingInPastYear = (props: Iprops) => {
  const PROPERTIES_STATUS: Properties_status[] = [
    {
      status: "",
      displayStatus: "Sold",
      numberOfProperties: props.details.data.numberOfSoldListings,
    },
    {
      status: "sale",
      displayStatus: "For Sale",
      numberOfProperties: props.details.data.numberOfBuyListings,
    },
    {
      status: "rent",
      displayStatus: "For Rent",
      numberOfProperties: props.details.data.numberOfRentListings,
    },
  ];

  useEffect(() => {
    if (props.params?.propertyStatusSlug) {
      window.scrollTo({
        top: 950,
        behavior: "smooth",
      });
    }
  }, [props.params]);

  const renderCategories = () => {
    return (
      <div className="flex flex-row items-center h-20 relative mt-8">
        <div className="flex items-center justify-evenly self-stretch flex-1 relative bg-shirtBlue rounded-xl">
          {PROPERTIES_STATUS.map((status, index) => {
            return (
              <a
                key={index}
                href={`/real-estate-agency/${props.details.slug}/${status.status}`}
              >
                <div className="flex flex-col gap-0.5 items-center relative cursor-pointer">
                  {renderNumPropertiesInCategory(index, status)}
                  <p className="text-sm font-bold">{status.displayStatus}</p>
                  {renderSelectedCategory(index, status)}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  const renderNumPropertiesInCategory = (
    index: number,
    status: Properties_status
  ) => {
    return (
      <p
        className={`text-xl font-bold ${
          props.params?.propertyStatusSlug || index > 0
            ? props.params?.propertyStatusSlug === status.status
              ? "text-seaBlue"
              : "text-almostBlack"
            : "text-seaBlue"
        }`}
      >
        {status.numberOfProperties}
      </p>
    );
  };

  const renderSelectedCategory = (index: number, status: Properties_status) => {
    return (
      <span
        className={`${
          props.params?.propertyStatusSlug || index > 0
            ? props.params?.propertyStatusSlug === status.status
              ? "w-16 mx-auto h-1 bg-darkerSeaBlue rounded-sm absolute -bottom-4 "
              : ""
            : "w-16 mx-auto h-1 bg-darkerSeaBlue rounded-sm absolute -bottom-4"
        }`}
      ></span>
    );
  };

  const renderCategoryHeading = () => {
    return (
      <h2 className="text-lg font-bold mb-6 text-almostBlack">
        {props.params?.propertyStatusSlug
          ? props.params?.propertyStatusSlug === "sale"
            ? "Sale "
            : "Rent "
          : "Sold "}
        listings in the past 12 month
      </h2>
    );
  };

  const renderProperties = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {props.details.data[
          `${
            props.params?.propertyStatusSlug
              ? props.params?.propertyStatusSlug === "sale"
                ? "sale"
                : "rent"
              : "sold"
          }`
        ].data.map((property: any, index: number) => {
          return (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg outline-none relative w-full shadow fill-almostBlack border">
                {getPropertyImage(
                  property?.heroImageUrl,
                  property?.imageUrlSlug
                )}
                <div className="p-4 min-h-108">
                  {getPropertyPrice(property.priceText)}
                  {getPropertyAddress(
                    property.unitNumber,
                    property.streetNumber,
                    property.streetName,
                    property.suburbName
                  )}
                  {getPropertySpecs(
                    property.bedrooms,
                    property.bathrooms,
                    property.carparks
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const getPropertyImage = (imageSrc: any, imageSlug: any) => {
    let src = `https://resi.stgz.view.com.au/viewstatic/images/listing/${imageSlug}/400-w/${
      imageSrc?.split("/")[2]
    }`;

    return (
      <div className="h-48 min-h-192 rounded-t-lg overflow-hidden relative">
        <a>
          <span>
            <Image
              src={src}
              loader={() => src}
              alt="placeHolder"
              layout="fill"
            />
          </span>
        </a>
      </div>
    );
  };

  const getPropertyPrice = (priceText: string) => {
    return (
      <div className="flex mb-1.5 w-220">
        <p className="text-base font-bold mr-2 truncate text-almostBlack">
          {priceText}
        </p>
      </div>
    );
  };

  const getPropertyAddress = (
    unitNumber: string,
    streetNumber: string,
    streetName: string,
    suburbName: string
  ) => {
    return (
      <a href="#">
        <span className="text-sm font-normal text-lightGray mg-1.5 truncate">
          {unitNumber && `${unitNumber}/`}
          {streetNumber && `${streetNumber} `}
          {streetName && `${streetName} `}
          {suburbName && suburbName}
        </span>
      </a>
    );
  };

  const getPropertySpecs = (
    bedrooms: number,
    bathrooms: number,
    carSpaces: number
  ) => {
    return (
      <div className="w-full flex flex-col md:flex-row md:justify-between text-lightGray mt-1">
        <div className="flex gap-2 items-center">
          {bedrooms > 0 && (
            <div
              className={`flex items-center text-sm gap-2 pr-2 ${
                bathrooms > 0 && "border-r"
              }`}
            >
              <Image src={bed} alt="bedrooms" />
              <span>{bedrooms}</span>
            </div>
          )}
          {bathrooms > 0 && (
            <div
              className={`flex items-center gap-2 pr-2 ${
                carSpaces > 0 && "border-r"
              }`}
            >
              <Image src={bathtub} alt="carSpaces" />
              <span>{bathrooms}</span>
            </div>
          )}
          {carSpaces > 0 && (
            <div className={`flex items-center gap-2 pr-2`}>
              <Image src={car} alt="carSpaces" />
              <span>{carSpaces}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-8 pb-16 border-b">
      {renderCategories()}
      <div className="mt-8">
        {renderCategoryHeading()}
        {renderProperties()}
      </div>
    </div>
  );
};

export default ListingInPastYear;
