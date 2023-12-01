import AboutProperty from "./aboutProperty";
import AddressBanner from "./addressBanner";
import Container from "@/shared/components/pageContainer/pageContainer";

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
    </Container>
  );
};

export default NewDevelopmentsMain;
