import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactJson from "react-json-view";
import Page_Heading from "./Page_Heading";
import LoadingComp from "../../../components/LoadingComp";
import api from "../../../api/axios";
import { baseURL } from "../../../api/axios";
import { motion } from "framer-motion";
import loader from "../../../assets/loader.gif";
import api_image from "../../../assets/api_image.gif";

import Mid_Docs from "./Mid_Docs";
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
    <section className="lg:w-5/6 mx-auto  shadow-lg">
      <Page_Heading
        baseApi={baseApi}
        fetchData={fetchData}
        name={name}
        project_id={project_id}
      />
      {/* <Mid_Docs name={name} id={project_id} /> */}
      <div
        className={`h-full  ${
          data && "p-5"
        }  bg-green-50 border-b border-green-200 overflow-y-auto `}
        style={{
          minHeight: "50vh",
          maxHeight: "70vh",
        }}
      >
        {isLoading && (
          <div
            className="h-full w-full flex justify-center items-center"
            style={{
              minHeight: "50vh",
              maxHeight: "70vh",
            }}
          >
            {/* <LoadingComp /> */}
            <motion.div
              initial={{ y: -1000, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-full w-full flex justify-center items-center"
            >
              <img src={loader} className="object-cover w-64 h-64 mx-auto " />
            </motion.div>
          </div>
        )}
        {data && !isLoading && (
          <motion.div
            initial={{ y: -100, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ReactJson src={data} name={false} enableClipboard={false} />
          </motion.div>
        )}
        {!data && !isLoading && (
          <motion.div
            initial={{ y: -1000, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/* <ReactJson src={data} name={false} enableClipboard={false} /> */}
            <motion.div
              initial={{ y: -1000, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {/* <img
                src={api_image}
                className="object-cover lg:w-3/4 h-auto mx-auto lg:my-10 shadow-lg"
              /> */}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Api_From_Model;
