import LdJson from "./LdJson";
import SEO from "./SEO";

interface Iprops {
  title: string;
  details: any;
}

const AgencyDetailSEO = (props: Iprops) => {
  const Details = props.details.data;

  const agencyDesc = `Real estate agency information and contact details for BigginScott Richmond in Richmond on resi.uatz.view.com.au`;
  const agencyImage = `https://resi.uatz.view.com.au/viewstatic/lancer/static/images/logo.png`;

  const agencyMetaDetails = [
    { name: "title", content: Details.name },
    { name: "og:title", content: `${Details.name}|${props.title}` },
    { name: "twitter:title", content: `${Details.name}|${props.title}|view` },
    { name: "description", content: agencyDesc },
    { name: "og:description", content: agencyDesc },
    { name: "twitter:description", content: agencyDesc },
    { name: "image", content: agencyImage },
    { name: "og:image", content: agencyImage },
    { name: "twitter:image", content: agencyImage },
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
      <LdJson ldJson={getLdJson()} />
      <SEO title={props.title} details={agencyMetaDetails} />
    </>
  );
};

export default AgencyDetailSEO;
