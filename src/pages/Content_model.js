import { useState, useEffect } from "react";
import api from "../api/axios";
import ModelsPage from "../content_types/pages/ModelsPage";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// import axios from "axios";
// import useSWR, { trigger } from "swr";
// import Project_page from "../user_components/project";
// import Layout from "../components/layout";
// import Unsplash from "../components/unsplash/Unsplash";

function Project() {
  let { model, project_id } = useParams();
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  //function to fetch fields
  const fetchModelFields = async () => {
    try {
      setLoading(true);
      const res = await api.get("/models/model", {
        params: { project_id, name: model },
      });
      setData(res.data.model);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (project_id && model) {
      fetchModelFields();
    }
  }, [project_id, model, refresh]);
  // console.log(data);
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0.3 }}
        animate={{ x: 0, opacity: 1 }}
        className="lg:mx-auto"
      >
        <ModelsPage
          model={data}
          setRefresh={setRefresh}
          refresh={refresh}
          loading={loading}
        />
      </motion.div>
    </>
  );
}

export default Project;
