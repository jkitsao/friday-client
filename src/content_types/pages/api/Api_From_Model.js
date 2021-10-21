import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactJson from "react-json-view";
import Page_Heading from "./Page_Heading";
import LoadingComp from "../../../components/LoadingComp";
import api from "../../../api/axios";
import { baseURL } from "../../../api/axios";
function Api_From_Model({ model }) {
  const { name, project_id } = model;
  const baseApi = ` ${baseURL}/${project_id}/${name}`;
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  //   const [api, setApi] = useState(baseApi);

  //function to make the request
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await api.get(`/${project_id}/${name}`);
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <section className="lg:w-5/6 mx-auto py-5">
      <Page_Heading
        baseApi={baseApi}
        // setApi={setApi}
        fetchData={fetchData}
        name={name}
        project_id={project_id}
      />
      <div className="py-2">
        <span className="block font-medium">
          model name:{" "}
          <span className="font-semibold ml-2 text-green-600">{name}</span>
        </span>
        <span className="block font-medium">
          project id:{" "}
          <span className="font-semibold ml-2 text-green-600">
            {project_id}
          </span>
        </span>
      </div>
      <div
        className="h-full mt-12 border p-5 bg-gray-50 overflow-y-auto "
        style={{
          minHeight: "40vh",
          maxHeight: "65vh",
        }}
      >
        {isLoading && (
          <div className="h-full w-full flex justify-center items-center">
            <LoadingComp />
          </div>
        )}
        {data && (
          <div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <ReactJson src={data} name={false} enableClipboard={false} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Api_From_Model;
