import React, { useState } from "react";

function Social_form({ socialLinks, onClose, setSocialLinks }) {
  const [label, setLabel] = useState("");
  const [link, setLink] = useState("");
  //   const links = [];
  const addLink = () => {
    const data = {
      label,
      link,
    };
    // socialLinks.push(data);
    setSocialLinks([...socialLinks, data]);
    setLabel("");
    setLink("");
    onClose();
    // alert(JSON.stringify(socialLinks));
  };
  return (
    <div>
      <div>
        <div className="">
          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-gray-700"
          >
            Label
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="twitter"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="">
          <label
            htmlFor="link"
            className="block text-sm font-bold text-gray-700"
          >
            Link
          </label>
          <input
            type="text"
            value={link}
            placeholder="https://twitter.com/acme"
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-end py-3">
        <button
          type="button"
          className="px-5 py-1 rounded-sm text-sm  bg-blue-700 text-gray-50"
          onClick={addLink}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Social_form;
