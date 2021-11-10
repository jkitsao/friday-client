import React, { useState, useEffect } from "react";
import axios from "axios";
import Content_Tab_Header from "./comp/Content_Tab_Header";
import Empty_State from "../../components/Empty_State";
import BreadCrumb from "../../components/BreadCrumb";
import { motion } from "framer-motion";
import api from "../../api/axios";
function Content_Tab({ project, model }) {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingModels, setFetchingModels] = useState(false);
  const [selected, setSelected] = useState({});
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
    if (projectId && !model) {
      setFetchingModels(true);
      fetchModels();
    }
  }, [projectId, model, selected]);

  let links = [
    {
      name: "projects",
      path: "/projects",
    },
  ];
  return (
    <motion.div
      initial={{ x: -100, opacity: 0.3 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {/* <BreadCrumb links={links} /> */}
      <section>
        {fetchingModels ? (
          <div>
            {models.length > 0 && (
              <Content_Tab_Header
                project={project}
                models={models}
                model={model}
                selected={selected}
                setSelected={setSelected}
                isLoading={isLoading}
              />
            )}
          </div>
        ) : (
          <div>
            {models && (
              <Content_Tab_Header
                project={project}
                models={models}
                model={model}
                selected={selected}
                setSelected={setSelected}
                isLoading={isLoading}
              />
            )}
          </div>
        )}
        {!isLoading && !model && models.length < 1 && (
          <div className="h-full py-16 flex justify-center items-center">
            <Empty_State
              title="Add a model to continue"
              description="You need to create a model on the content model tab for you to add content"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
  // return <div>{JSON.stringify(project)}</div>;
}

export default Content_Tab;
