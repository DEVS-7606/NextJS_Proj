import LdJson from "@/shared/components/LdJson/LdJson";
import SEO from "@/shared/components/SEO/SEO";

interface Iprops {
  metaData: any;
  title: string;
  details: any;
}

const NewDevelopmentSEO = (props: Iprops) => {
  const commonMetaData = props.metaData;
  const Details = props.details.developmentDetail;

  const newDevelopmentMetaDetails = [
    { name: "title", content: Details.title },
    { name: "og:title", content: `${Details.title}|${props.title}` },
    { name: "twitter:title", content: `${Details.title}|${props.title}|view` },
    { name: "description", content: Details.metaDescription },
    { name: "og:description", content: Details.metaDescription },
    { name: "twitter:description", content: Details.metaDescription },
  ];

  const getLdJson = () => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": Details.classification,
          name: Details.title,
          url: Details.url,
          image: Details.url,
          description: Details.metaDescription,
          numberOfBedrooms: Details.bedrooms,
          numberOfBathroomsTotal: Details.bathrooms,
          address: {
            "@type": "PostalAddress",
            addressLocality: Details.address.area,
            streetAddress: `${Details.address.thoroughfareNumber} ${Details.address.thoroughfare}`,
            postalCode: Details.address.postalCode,
            addressCountry: {
              "@type": "Country",
              name: Details.address.country,
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: Details.address.area,
            },
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: Details.address.latitude,
            longitude: Details.address.longitude,
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              item: "https://resi.uatz.view.com.au/new-developments/",
              position: 1,
              "@type": "ListItem",
              name: "WebPage",
            },
            {
              item: "https://resi.uatz.view.com.au/new-developments/in-nsw-castle-hill-2154/",
              position: 2,
              "@type": "ListItem",
              name: "SearchResultsPage",
            },
            {
              item: "https://resi.uatz.view.com.au/new-developments/nsw-castle-hill-2154/development-details/grand-reve/",
              position: 3,
              "@type": "ListItem",
              name: "DevelopmentDetailPage",
            },
          ],
        },
      ],
    };
  };

  return (
    <>
      <SEO
        title={props.title}
        details={commonMetaData.concat(newDevelopmentMetaDetails)}
      />
      <LdJson ldJson={getLdJson()} />
    </>
  );
};

export default NewDevelopmentSEO;
