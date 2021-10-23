import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../../../api/axios";
import { useUser } from "../../../firebase/useUser";
import Project from "./Project";
import { useToast, Spinner, addPrefix } from "@chakra-ui/react";
import LoadingComp from "../../../components/LoadingComp";
import Empty_State from "../../../components/Empty_State";
export default function Projects({ refresh, setRefresh }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const toast = useToast();
  //fetch projects
  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/project/all", {
        params: { user_id: user.id },
      });
      setData(res.data.projects);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log({ err });
      return toast({
        title: "error",
        description: "an error occured",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  //delete project
  const handleDeleteProject = async (id, project_id) => {
    setIsLoading(true);
    try {
      const res = await api.post("/project/delete", {
        id,
        project_id,
      });
      setIsLoading(false);
      setRefresh(!refresh);
      return toast({
        title: "success",
        description: res.data.message,
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      setIsLoading(false);
      return toast({
        title: "error",
        description: "request failed",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchProjects();
    }
  }, [user, refresh]);
  const projectsArray = data && [...data].reverse();

  return (
    <>
      <div className="p-4 ">
        {!isLoading ? (
          <div className="flex flex-wrap ">
            {data &&
              projectsArray.map((project) => (
                <Project
                  project={project}
                  refresh={refresh}
                  setRefresh={setRefresh}
                  handleDeleteProject={handleDeleteProject}
                  key={project._id}
                />
              ))}
          </div>
        ) : (
          <LoadingComp />
        )}
      </div>
      {!isLoading && data && data.length < 1 && (
        <div className="lg:w-3/4 lg:mx-auto">
          <Empty_State
            title="Create your first project"
            description="Projects you create will appear here."
          />
        </div>
      )}
    </>
  );
}
