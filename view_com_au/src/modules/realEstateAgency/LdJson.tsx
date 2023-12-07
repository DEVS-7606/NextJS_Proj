import Head from "next/head";

interface Iprops {
  ldJson: any;
}

const LdJson = ({ ldJson }: Iprops) => {
  return (
    <Head>
      <script
        id="ldJson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </Head>
  );
};

export default LdJson;
