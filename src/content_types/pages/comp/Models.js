import React, { useState, useEffect } from "react";
import ModelComp from "./ModelComp";
// import axios from "axios";
import api from "../../../api/axios";
import { useToast } from "@chakra-ui/react";
import LoadingComp from "../../../components/LoadingComp";
import Empty_State from "../../../components/Empty_State";
/* This example requires Tailwind CSS v2.0+ */

export default function Example({ project, refresh, setRefresh }) {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const fetchModels = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/models", {
        params: { projectId },
      });
      setModels(res.data.models);
      setIsLoading(false);
      // setRefresh(!refresh)
    } catch (err) {
      setIsLoading(false);
      return toast({
        title: "error",
        description: "an error occured",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  const deleteModel = async (id, project_id, model_name) => {
    // return alert(id);
    try {
      setIsLoading(true);
      const res = await api.post("/models/delete", {
        id,
        project_id,
        model_name,
      });
      // setModels(res.data.models);
      setIsLoading(false);
      setRefresh(!refresh);
      return toast({
        title: "success",
        description: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } catch (err) {
      setIsLoading(false);
      return toast({
        title: "error",
        description: err.msg || err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  let projectId = project?.project_id;
  useEffect(() => {
    if (projectId) {
      fetchModels();
    }
  }, [projectId, refresh]);
  const modelsArray = models && [...models].reverse();
  return (
    <>
      <div className="flex flex-col lg:w-4/5 lg:mx-auto">
        {isLoading && <LoadingComp />}
        {!isLoading && models && models.length > 0 && (
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className=" overflow-hidden border-b border-gray-200 rounded-t-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                      {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {modelsArray.map((model, index) => (
                      <ModelComp
                        key={index}
                        model={model}
                        deleteModel={deleteModel}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      {!isLoading && models && models.length < 1 && (
        <div className="flex flex-col lg:w-4/5 lg:mx-auto">
          <Empty_State
            title="create your first model"
            description="models that you create will appear here, models represent the content types you create"
          />
        </div>
      )}
    </>
  );
}
