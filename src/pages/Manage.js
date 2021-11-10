import React from "react";
import Layout from "../components/layout";
import Manage from "../user_components/manage";
import { motion } from "framer-motion";

function Manage_page() {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0.3 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Layout>
        <div className="xl:w-2/3 xl:mx-auto p-8">
          <Manage />
        </div>
      </Layout>
    </motion.div>
  );
}

export default Manage_page;
