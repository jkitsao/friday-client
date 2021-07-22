import { useState } from "react";
import axios from "axios";
import useSWR, { trigger } from "swr";
import Project_page from "../user_components/project";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
function Project() {
  let { project_id } = useParams();
  return (
    <>
      <Layout>
        <div className="lg:w-1/2 lg:mx-auto p-5 h-full rounded-sm">
          <div className="text-2xl">{project_id}</div>
          <Project_page />
        </div>
      </Layout>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { project_id } = context.query;
//   const url = "http://localhost:5000/project";
//   const res = await axios.get(url, { params: { project_id } });
//   return { props: { data: res.data } };
// }

export default Project;
