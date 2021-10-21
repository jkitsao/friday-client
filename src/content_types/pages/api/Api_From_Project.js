import React, { useState, useEffect } from "react";
import axios from "axios";
import Selector from "./Selector";
import Api_From_Model from "./Api_From_Model";
import Empty_State from "../../../components/Empty_State";
import LoadingComp from "../../../components/LoadingComp";
import api from "../../../api/axios";
function Api_From_Project({ project }) {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingModels, setFetchingModels] = useState(false);
  const [selected, setSelected] = useState(models && models[0]);
  let projectId = project?.project_id;
  const fetchModels = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/models", {
        params: { projectId },
      });
      setModels(res.data.models);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (projectId) {
      setFetchingModels(true);
      fetchModels();
    }
  }, [projectId]);
  useEffect(() => {
    if (models) setSelected(models[0]);
  }, [models]);
  return (
    <>
      {isLoading && <LoadingComp />}
      {selected && !isLoading && (
        <section>
          <div className="lg:w-1/2 mx-auto">
            <Selector
              project={project}
              models={models}
              selected={selected}
              setSelected={setSelected}
              isLoading={isLoading}
            />
          </div>

          <div>
            <Api_From_Model model={selected} />
          </div>
        </section>
      )}
      {!selected && !isLoading && (
        <Empty_State
          title="Model and entries not available"
          description="You need to create a model on the content model tab and add entries to get and test an API"
        />
      )}
    </>
  );
}

export default Api_From_Project;
