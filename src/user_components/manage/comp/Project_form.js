import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
// import { nanoid } from "nanoid";
import { customAlphabet } from "nanoid";
const options = [
  { value: "portfolio", label: "Portfolio" },
  { value: "side-project", label: "Side project" },
  { value: "blog", label: "Blog" },
];
export default function Project_form({ user }) {
  const [project_name, setProject_name] = useState();
  //   const [project_id, setProject_id] = useState();
  const [project_type, setProject_type] = useState("");
  const [project_info, setProject_info] = useState("");
  const [project_owner, setProject_owner] = useState(null);
  const [loading, setLoading] = useState(false);

  const alph =
    "9b1deg4d3r7d47b3dcb8d6ec0cd7f10fhd9d2b0d7b3dcb8d6ec0cd7f10cc043da975e2043da975e2z8ad9ezae0b";

  //functions
  const submitDataToApi = (data) => {
    // alert(JSON.stringify(data));
    axios.post("http://localhost:5000/project", data).then((res) => {
      //redirect to the project page
    });
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      project_name,
      project_id: project_name
        ? project_name.toLowerCase().replace(/ /g, "-") +
          "-" +
          customAlphabet(alph.trim(), 7)()
        : null,
      project_type,
      project_info,
      project_owner: user,
    };
    submitDataToApi(data);
  };
  return (
    <div>
      <div className=" items-center  dark:bg-gray-900">
        <div className="">
          <div className="max-w-xl mx-auto my-10 bg-gray-50 p-5 rounded-md shadow-sm">
            <div className="m-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    for="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Project name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={project_name}
                    onChange={(e) => setProject_name(e.target.value)}
                    placeholder="project name"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    // for="phone"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Project type
                  </label>
                  <Select
                    options={options}
                    // onChange={(value) => alert(JSON.stringify(value))}
                    onChange={(value) => setProject_type(value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Description
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={project_info}
                    onChange={(e) => setProject_info(e.target.value)}
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    create project
                  </button>
                </div>
                <p
                  className="text-base text-center text-gray-400"
                  id="result"
                ></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
