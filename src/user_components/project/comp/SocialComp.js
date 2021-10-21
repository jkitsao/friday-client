import React, { useRef } from "react";
import { motion } from "framer-motion";
import { LinkOverlay } from "@chakra-ui/react";
function SocialComp({ links, setSocialLinks }) {
  const constraintsRef = useRef(null);

  const handleRemoveItem = (e) => {
    const label = e.target.getAttribute("name");
    alert(label);
    setSocialLinks(links.filter((item) => item.label !== label));
  };

  const handleIcon = (value) => {
    if (value == "twitter")
      return "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Twitter_Logo_as_of_2021.svg/100px-Twitter_Logo_as_of_2021.svg.png";
  };
  return (
    <motion.div
      ref={constraintsRef}
      className="flex w-full my-3  flex-wrap max-h-64 overflow-y-auto"
    >
      {links.map((link, index) => (
        <motion.div
          className="px-3 py-3 shadow-sm lg:w-2/5 border-l-4 border-blue-200  rounded-sm  bg-white mx-1 flex justify-between cursor-pointer hover:shadow-md my-1"
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
            <div className="text-sm font-semibold text-gray-700">
              {link.label}
            </div>
            <div className="text-xs text-gray-500">{link.link}</div>
          </div>
          <span className="text-xs hover:text-red-600 hover:shadow-md flex items-center right-0  h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              name={link.label}
              onClick={handleRemoveItem}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SocialComp;
