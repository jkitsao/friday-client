import { useState, useEffect } from "react";
// import axios from "axios";
import api from "../api/axios";
import useSWR, { trigger } from "swr";
import Project_page from "../user_components/project";
import ModelsPage from "../content_types/pages/ModelsPage";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import Unsplash from "../components/unsplash/Unsplash";

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
      <div className="lg:mx-auto h-full">
        <ModelsPage
          model={data}
          setRefresh={setRefresh}
          refresh={refresh}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Project;
