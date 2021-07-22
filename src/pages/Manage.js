import React from "react";
import Layout from "../components/layout";
import Manage from "../user_components/manage";
function Manage_page() {
  return (
    <Layout>
      <div className="xl:w-2/3 xl:mx-auto p-8">
        <Manage />
      </div>
    </Layout>
  );
}

export default Manage_page;
