import AboutAgency from "@/modules/realEstateAgency/components/aboutAgency";
import AgencyDetailPage from "@/modules/realEstateAgency/components/agencyDetailPage";
import AgencyDetailSEO from "@/modules/realEstateAgency/components/agencyDetailSEO";
import BreadCrum from "@/modules/realEstateAgency/components/breadCrum";
import ListingInPastYear from "@/modules/realEstateAgency/components/listingInPastYear";
import MarketPerformance from "@/modules/realEstateAgency/components/marketPerformance";
import OurPeople from "@/modules/realEstateAgency/components/ourPeople";
import Layout from "@/shared/components/Layout/Layout";
import Container from "@/shared/components/pageContainer/pageContainer";

import type { GetServerSideProps, GetServerSidePropsContext } from "next";

type MyProps = {
  repo: any;
  params?: { agencySlug: string; propertyStatusSlug?: string };
};

export const getServerSideProps: GetServerSideProps<any> = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;

  const res = await fetch("http://localhost:8000/props");
  const repo = await res.json();
  if (params) {
    return {
      props: { repo, params },
      // redirect: { permanent: false, destination: "...:slug" },
    };
  }
  return {
    props: { repo },
    // redirect: { permanent: false, destination: ":slug" },
  };
};

const RealEstateAgency = (props: MyProps) => {
  return (
    <Layout>
      <AgencyDetailSEO
        metaData={props.repo.metaData}
        title="resi.uatz.view.com.au"
        details={props.repo.pageProps}
      />
      <Container>
        <BreadCrum breadCrums={props.repo.pageProps.data.breadcrumbs} />
        <AgencyDetailPage details={props.repo.pageProps} />
        <MarketPerformance details={props.repo.pageProps} />
        <ListingInPastYear
          params={props.params}
          details={props.repo.pageProps}
        />
        <AboutAgency details={props.repo.pageProps.data.description} />
        <OurPeople agents={props.repo.pageProps.data.agents} />
      </Container>
    </Layout>
  );
};

export default RealEstateAgency;
