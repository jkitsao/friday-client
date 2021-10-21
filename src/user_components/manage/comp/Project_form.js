import React, { useState } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

// import axios from "axios";
import api from "../../../api/axios";
// import { nanoid } from "nanoid";
import { customAlphabet } from "nanoid";
import { Input, Textarea } from "@chakra-ui/react";
const alph =
  "9b1deg4d3r7d47b3dcb8d6ec0cd7f10fhd9d2b0d7b3dcb8d6ec0cd7f10cc043da975e2043da975e2z8ad9ezae0b";
export default function Project_form({ user, refresh, setRefresh, onClose }) {
  const [project_name, setProject_name] = useState("");
  const [project_info, setProject_info] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  var id = project_name
    ? project_name.toLowerCase().replace(/ /g, "-") +
      "-" +
      customAlphabet(alph.trim(), 7)()
    : null;
  //functions
  const submitDataToApi = (data) => {
    try {
      setLoading(true);
      api.post("/project", data).then((res) => {
        const { project_id } = res.data.project;
        setRefresh(!refresh);
        setProject_name("");
        setProject_info("");
        setLoading(false);
        onClose();
        history.push(`/projects/${project_id}`);
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      project_name,
      project_id: id,
      project_info,
      project_owner: user,
    };
    submitDataToApi(data);
  };
  return (
    <div>
      <div className="">
        <div className="">
          <div className="max-w-xl mx-auto p-5 rounded-md ">
            <div className="m-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-semibold text-gray-700 "
                  >
                    Project name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={project_name}
                    onChange={(e) =>
                      setProject_name(e.target.value.replace(/ /, "-"))
                    }
                    placeholder="project name"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  <span className="text-xs text-gray-400">
                    *Spaces are not allowed
                  </span>
                </div>
                <div className="mb-6">
                  <label
                    for="message"
                    className="block mb-2 text-sm font-semibold text-gray-600 "
                  >
                    Description
                  </label>

                  <Textarea
                    name="message"
                    value={project_info}
                    onChange={(e) => setProject_info(e.target.value)}
                    placeholder="project description"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    // required
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    {!loading ? "create project" : <Spinner />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
