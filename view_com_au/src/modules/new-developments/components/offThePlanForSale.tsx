import Image from "next/image";
import placeHolder from "../../../../public/images/placeholder.png";
import bedrooms from "../../../../public/images/Bedroom.svg";
import car from "../../../../public/images/parking.svg";
import bathroom from "../../../../public/images/Bathtub.svg";
import GetStaticImageLoader from "@/shared/components/getStaticImageLoader/getStaticImageLoader";

interface Property {
  id: string;
  title: string;
  priceDisplay: string;
  price: string;
  priceFrom: string;
  priceTo: string;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  livingAreas: string;
  discr: string;
  frontage: number | null;
  depth: number | null;
  levels: number | null;
  aspect: string | null;
  areaTotal: number | null;
  areaExternal: number | null;
  areaInternal: number | null;
  createdAt: string;
  useFloorPlan: number;
  isHidden: number;
  files: {
    floorPlan?: File;
    thumbnail?: File;
  };
  studyroom: string;
  private_pool: string;
  enquire_only: number | null;
}

interface File {
  id: string;
  type: string;
  location: string;
  name: string;
  textAlternative: string | null;
  size: number;
  url: any;
  createdAt: string;
  updatedAt: string;
}

const OffThePlanForSale = (props: {
  title: string;
  properties: Property[];
}) => {
  const renderPropertyImage = (property: Property) => {
    let src = property.files.thumbnail?.url
      ? property.files.thumbnail?.url
      : placeHolder.src;
    return (
      <div className="flex justify-center items-center">
        <div className="h-20 w-20 relative rounded-lg overflow-hidden">
          <Image
            loader={GetStaticImageLoader}
            src={src}
            alt={
              property.files.thumbnail ? property.files.thumbnail.name : "NA"
            }
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    );
  };

  const renderPropertyDetails = (property: Property) => {
    return (
      <div className="w-full flex flex-col ml-4 justify-between">
        <h3 className="text-lg font-bold text-almostBlack">{property.title}</h3>
        <p className="text-base font-normal text-lightGray">
          {property.priceDisplay}
        </p>
        {renderPropertySpecs(property)}
      </div>
    );
  };

  const renderPropertySpecs = (property: Property) => {
    return (
      <div className="w-full text-lightGray flex xxs:gap-2 gap-1 items-center">
        {property.bedrooms && (
          <div className="flex items-center gap-2 pr-2 border-r">
            <Image src={bedrooms} alt="bedrooms" />
            <span>{property.bedrooms}</span>
          </div>
        )}
        {property.bathrooms && (
          <div className="flex items-center gap-2 pr-2 border-r">
            <Image src={bathroom} alt="bathrooms" />
            <span>{property.bathrooms}</span>
          </div>
        )}
        {property.carSpaces && (
          <div className="flex items-center gap-2 pr-2 border-r">
            <Image src={car} alt="carSpaces" />
            <span>{property.carSpaces}</span>
          </div>
        )}
        {property.discr && (
          <span className="xxs:text-sm text-xs capitalize pl-2">
            {property.discr}
          </span>
        )}
      </div>
    );
  };

  const renderReqFloorPlan = (property: Property) => {
    return (
      property.files.floorPlan && (
        <button className="font-medium text-sm text-seaBlue text-left hover:cursor-pointer hover:underline noHoverEffect">
          Request Floorplan
        </button>
      )
    );
  };

  const renderForSaleProperties = (forSaleProperties: Property[]) => {
    return forSaleProperties.map((property, index) => {
      return (
        <div
          className="flex flex-col md:flex-row border p-4 rounded-lg shadow-md mb-4 md:justify-between md:items-end"
          key={index}
        >
          <div className="flex flex-row mb-4 md:mb-0">
            {renderPropertyImage(property)}
            {renderPropertyDetails(property)}
          </div>
          {renderReqFloorPlan(property)}
        </div>
      );
    });
  };

  return (
    <div className="pb-2 mb-8">
      <h2 className="font-bold text-lg text-almostBlack mb-6 lg:mb-4">
        Off-The-Plan Residences For Sale At {props.title}
      </h2>
      {renderForSaleProperties(props.properties)}
    </div>
  );
};

export default OffThePlanForSale;
