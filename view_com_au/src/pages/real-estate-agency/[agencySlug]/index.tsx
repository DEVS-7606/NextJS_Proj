import AgentDetailSEO from "@/modules/realEstateAgency/agentDetailSEO";
import Layout from "@/shared/components/Layout/Layout";

import type { GetServerSideProps, GetServerSidePropsContext } from "next";

type MyProps = {
  repo: any;
  slug: string;
};

export const getServerSideProps: GetServerSideProps<any> = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.query;

  const res = await fetch("http://localhost:8000/props");
  const repo = await res.json();
  if (slug) {
    return { props: { repo, slug } };
  }
  return { props: { repo } };
};

const RealEstateAgency = (props: MyProps) => {
  return (
    <Layout>
      <AgentDetailSEO
        title="resi.uatz.view.com.au"
        details={props.repo.pageProps}
      />
    </Layout>
  );
};

export default RealEstateAgency;
