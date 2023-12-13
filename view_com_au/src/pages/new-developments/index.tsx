import NewDevelopmentsMain from "@/modules/new-developments/components/newDevelopmentsMain";
import NewDevelopmentSEO from "@/modules/new-developments/newDevelopSEO";
import Layout from "@/shared/components/Layout/Layout";
import Container from "@/shared/components/pageContainer/pageContainer";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

type MyProps = {
  repo: any;
};

export const getServerSideProps: GetServerSideProps<MyProps> = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3004/props");
  const repo = await res.json();
  return { props: { repo } };
};

const NewDevelopments = ({ repo }: MyProps) => {
  return (
    <Layout>
      <NewDevelopmentSEO
        metaData={repo.metaData}
        title="resi.uatz.view.com.au"
        details={repo.data}
      />
      <Container>
        <NewDevelopmentsMain addressDetail={repo} />
      </Container>
    </Layout>
  );
};

export default NewDevelopments;
