import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectComp({ projects, setProjects }) {
  const constraintsRef = useRef(null);
  const handleRemoveItem = (e) => {
    const label = e.target.getAttribute("name");
    // alert(label);
    setProjects(projects.filter((item) => item.title !== label));
  };
  return (
    <motion.div
      ref={constraintsRef}
      className="flex w-full my-3  flex-wrap max-h-80 overflow-y-scroll"
    >
      {projects.map((project, index) => (
        <motion.div
          className="shadow-sm relative py-3 lg:w-2/5 border-4 rounded-md border-blue-200 transition-all duration-100  bg-gray-900 mx-2  cursor-pointer hover:shadow-md my-1"
          key={index}
          drag
          dragConstraints={constraintsRef}
          initial={{ x: -500, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 0.8 },
          }}
        >
          <div className="">
            {project.preview && (
              <div>
                <img
                  src={project.preview}
                  className=" w-full max-h-32 object-cover"
                />
              </div>
            )}
            <div className="px-2 py-1">
              <div className="text-sm flex items-center font-semibold text-gray-300">
                {project.title}
              </div>
              <div className="text-xs text-gray-100 flex items-center">
                {project?.url}
              </div>
            </div>
          </div>
          {/* <span className="text-xs hover:text-red-600 hover:shadow-md flex items-center right-0  h-full"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 p-2 absolute m-1 bottom-0 right-0 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleRemoveItem}
            name={project.title}
            //   name={project.title}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          {/* </span> */}
        </motion.div>
      ))}
    </motion.div>
  );
}
