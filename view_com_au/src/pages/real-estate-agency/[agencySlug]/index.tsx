import AgencyDetailPage from "@/modules/realEstateAgency/components/agencyDetailPage";
import AgencyDetailSEO from "@/modules/realEstateAgency/components/agencyDetailSEO";
import BreadCrum from "@/modules/realEstateAgency/components/breadCrum";
import MarketPerformance from "@/modules/realEstateAgency/components/marketPerformance";
import Layout from "@/shared/components/Layout/Layout";
import Container from "@/shared/components/pageContainer/pageContainer";

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
      <AgencyDetailSEO
        title="resi.uatz.view.com.au"
        details={props.repo.pageProps}
      />
      <Container>
        <BreadCrum breadCrums={props.repo.pageProps.data.breadcrumbs} />
        <AgencyDetailPage details={props.repo.pageProps} />
        <MarketPerformance details={props.repo.pageProps} />
      </Container>
    </Layout>
  );
};

export default RealEstateAgency;
