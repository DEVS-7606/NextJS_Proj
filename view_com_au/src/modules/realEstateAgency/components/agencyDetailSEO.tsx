import LdJson from "../../../shared/components/LdJson/LdJson";
import SEO from "../../../shared/components/SEO/SEO";

interface Iprops {
  title: string;
  details: any;
  metaData: any;
}

const AgencyDetailSEO = (props: Iprops) => {
  const Details = props.details.data;
  const commonMetaData = props.metaData;

  const agencyMetaDetails = [
    { name: "title", content: Details.name },
    { name: "og:title", content: `${Details.name}|${props.title}` },
    { name: "twitter:title", content: `${Details.name}|${props.title}|view` },
    { name: "description", content: Details.metaDescription },
    { name: "og:description", content: Details.metaDescription },
    { name: "twitter:description", content: Details.metaDescription },
  ];

  const getLdJson = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: Details.name,
      url: `${props.title}`,
      logo: `${Details.logoFileName}`,
      telephone: Details.phone,
      address: Details.address,
    };
  };
  return (
    <>
      <SEO
        title={props.title}
        details={commonMetaData?.concat(agencyMetaDetails)}
      />
      <LdJson ldJson={getLdJson()} />
    </>
  );
};

export default AgencyDetailSEO;
