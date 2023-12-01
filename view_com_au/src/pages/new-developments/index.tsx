import NewDevelopmentsMain from "@/modules/new-developments/components/newDevelopmentsMain";
import Layout from "@/shared/components/Layout/Layout";
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
      <NewDevelopmentsMain addressDetail={repo} />
    </Layout>
  );
};

export default NewDevelopments;
