import Head from "next/head";

interface Iprops {
  title: string;
  details: {
    name: string;
    content: any;
  }[];
}

const SEO = ({ title, details }: Iprops) => {
  const renderMetaData = () => {
    return details.map((agencyDetail, index) => {
      return (
        <meta
          key={index}
          name={agencyDetail.name}
          content={agencyDetail.content}
        />
      );
    });
  };
  return (
    <Head>
      <meta title={title} />
      {renderMetaData()}
    </Head>
  );
};

export default SEO;
