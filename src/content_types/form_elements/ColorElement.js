import React, { useState, useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
function ColorElement({ field, content, setContent, fields }) {
  let obj = field?.name;
  const [value, setValue] = useState(fields[obj] ? fields[obj] : "");
  let type = field.color_type;
  let initialColor = value ? value?.hex || value?.rgb : "";
  const [color, setColor] = useColor(type, initialColor);
  const [isDark, setIsDark] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  useEffect(() => {
    if (value) setContent({ ...content, [obj]: value });
  }, [value]);

  function onChange(e) {
    setColor(e);
    setValue(e);
  }
  return (
    <div
      className=" font-semibold my-3 border-l-2 border-green-200 p-2 xl:w-1/2"
      onMouseEnter={() => setShowToggle(true)}
      onMouseLeave={() => setShowToggle(false)}
    >
      <div className="flex justify-between">
        <span className="py-2 inline-block">{field?.name}</span>
        <span
          className={`${
            !showToggle ? "bg-opacity-25" : "opacity-100"
          } p-1 w-6 h-6 mt-8 mr-5 ${
            isDark ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-600"
          } rounded-full transition-all duration-150 cursor-pointer`}
          onClick={() => setIsDark(!isDark)}
        >
          <svg
            className=""
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
      </div>
      <ColorPicker
        width={300}
        height={120}
        color={color}
        onChange={onChange}
        // initColor={}
        hideHSV={true}
        hideRGB={field?.color_type === "hex" ? true : false}
        hideHEX={field?.color_type === "rgb" ? true : false}
        dark={isDark}
        className="border border-dashed"
      />
      {/* {JSON.stringify({ type })} */}
    </div>
  );
}

export default ColorElement;
