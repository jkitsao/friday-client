import { useState, useEffect } from "react";
// import axios from "axios";
import api from "../api/axios";
import Content_Page from "../content_types/pages/Content_Page";
import { useParams } from "react-router-dom";
import Empty_State from "../components/Empty_State";
import LoadingComp from "../components/LoadingComp";
function Project() {
  let { project_id } = useParams();
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  //fetch project via its id
  async function fetchProject() {
    setIsLoading(true);
    try {
      const res = await api.get("/project", {
        params: { project_id },
      });
      setData(res.data.project);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (project_id) {
      fetchProject();
    }
  }, [project_id]);

  return (
    <>
      {isloading ? (
        <div className="lg:mx-auto h-screen flex items-center">
          {/* <Content_Page project={data} /> */}
          <LoadingComp />
        </div>
      ) : (
        <div className="lg:mx-auto h-full">
          <Content_Page project={data} />
        </div>
      )}
    </>
  );
}

export default Project;
