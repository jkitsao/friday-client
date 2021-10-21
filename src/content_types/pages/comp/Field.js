import React from "react";
import { motion } from "framer-motion";
import date from "../../../assets/elements/date.png";
import text from "../../../assets/elements/text.png";
import media from "../../../assets/elements/media.png";
import number from "../../../assets/elements/number.png";
import color from "../../../assets/elements/color.png";
import richtext from "../../../assets/elements/richtext.svg";
const fields = ["text", "richtext", "date", "number", "media", "color"];

function Field({ setFieldOpen }) {
  return (
    <motion.div className="flex items-center justify-center flex-wrap">
      {fields.map((field) => (
        <div
          className="w-24 h-24 rounded-md bg-gray-200 p-2 cursor-pointer hover:bg-gray-100 m-2"
          onClick={() => setFieldOpen(field)}
        >
          <div className="p-2">
            <div className="flex items-center justify-center">
              {field === "text" && (
                <img
                  src={text}
                  alt=""
                  className="w-10 h-10 object-cover opacity-75 hover:opacity-100"
                />
              )}
              {field === "date" && (
                <img
                  src={date}
                  alt=""
                  className="w-10 h-10 object-cover opacity-75 hover:opacity-100"
                />
              )}
              {field === "media" && (
                <img
                  src={media}
                  alt=""
                  className="w-10 h-10 object-cover opacity-75 hover:opacity-100"
                />
              )}
              {field === "number" && (
                <img
                  src={number}
                  alt=""
                  className="w-10 h-10 object-cover opacity-75 hover:opacity-100"
                />
              )}
              {field === "richtext" && (
                <img
                  src={richtext}
                  alt=""
                  className="w-10 h-10 object-cover opacity-75 hover:opacity-100"
                />
              )}
              {field === "color" && (
                <img
                  src={color}
                  alt=""
                  className="w-10 h-10 object-cover opacity-75 hover:opacity-100"
                />
              )}
            </div>
            <div className="flex justify-center items-center p-2">
              <span className="text-base  px-2 py-1 text-gray-900 font-semibold">
                {field}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Field;
