import FeaturesAndAmenities from "./featuresAndAmenities";
import AboutProperty from "./aboutProperty";
import AddressBanner from "./addressBanner";
import Container from "@/shared/components/pageContainer/pageContainer";
import OffThePlanForSale from "./offThePlanForSale";
import InsightOnArea from "./insightOnArea";
import SuburbProfile from "./suburbProfile";

const NewDevelopmentsMain = (props: any) => {
  const addressDetail = props.addressDetail.data.developmentDetail;
  const address = addressDetail.address;
  const displaySuite = addressDetail.displaySuite.address;
  const description = addressDetail.description.textProfile;

  return (
    <Container>
      <AddressBanner
        title={addressDetail.title}
        fareNum={address.thoroughfareNumber}
        fare={address.thoroughfare}
        area={address.area}
        state={address.state}
        postalCode={address.postalCode}
        shortenState={address.shortenState}
      />
      <div className="lg:w-2/3">
        <AboutProperty
          title={addressDetail.title}
          fareNum={address.thoroughfareNumber}
          fare={address.thoroughfare}
          area={address.area}
          state={address.state}
          postalCode={address.postalCode}
          bedrooms={addressDetail.bedrooms}
          bathrooms={addressDetail.bathrooms}
          carSpaces={addressDetail.carSpaces}
          propertyType={addressDetail.classification}
          totalProperties={addressDetail.totalProperties}
          displaySuite_fareNum={displaySuite.thoroughfareNumber}
          displaySuite_fare={displaySuite.thoroughfare}
          displaySuite_area={displaySuite.area}
          displaySuite_shortenState={displaySuite.shortenState}
          displaySuite_postalCode={displaySuite.postalCode}
          descriptionList={description}
        />
        {addressDetail.title && (
          <FeaturesAndAmenities
            title={addressDetail.title}
            src={addressDetail.files.video.textAlternative}
          />
        )}
        <OffThePlanForSale
          title={addressDetail.title}
          properties={addressDetail.properties}
        />
        <InsightOnArea suburb={props.addressDetail.data.suburb} />
        <SuburbProfile suburb={props.addressDetail.data.suburb} />
      </div>
    </Container>
  );
};

export default NewDevelopmentsMain;
