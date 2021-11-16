import React, { useState } from "react";
import { Link } from "react-router-dom";
import create from "../../../assets/create.png";
import { DeleteComp } from "../../../content_types/pages/comp/ModelEntriesComp";

function Project({ project, handleDeleteProject }) {
  const [hover, setHover] = useState(false);
  const [id] = useState(project._id);
  const [open, setOpen] = useState(false);
  const field = false;
  const title = `Delete ${project?.project_name || "project"}`;
  const message =
    "Are you sure you want to delete this project? Once you delete this project, its gone for good and cannot be retrieved. This action cannot be undone.";
  //function that handles delete
  return (
    <div
      className="lg:w-1/5 xl:1/6 bg-white relative transition-all duration-200 ease-linear shadow-md m-2 cursor-pointer hover:shadow-lg rounded-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        minWidth: "17rem",
      }}
      // onclick={() => alert(project._id)}
    >
      <div className="p-5">
        <Link
          to={`/projects/${project?.project_id}`}
          className="hover:shadow-sm"
        >
          <div className="flex w-full  items-center">
            <img src={create} className="w-16 h-16 object-cover " />
            <div
              className={`text-lg font-semibold transition-all leading-tight truncate duration-200 text-gray-800 ${
                hover ? "underline text-blue-600" : ""
              }`}
            >
              {project?.project_name}
              <div className="text-xs font-semibold text-gray-600">
                {project?.project_id}
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="text-sm mt-2 pb-1 overflow-y-hidden text-gray-400"
              style={{
                maxHeight: "5rem",
              }}
            >
              {project?.project_info}
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`absolute right-0 top-0 m-1 text-xs text-red-200 ${
          hover ? "block" : "hidden"
        }`}
      >
        <DeleteComp
          open={open}
          field={field}
          deleteFunction={handleDeleteProject}
          setOpen={setOpen}
          title={title}
          message={message}
          id={id}
          project_id={project.project_id}
        />
      </div>
    </div>
  );
}

export default Project;
