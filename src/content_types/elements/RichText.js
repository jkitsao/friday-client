import React from "react";
import richtext from "../../assets/elements/richtext.svg";
import Delete from "./comp/DeleteComp";

function RichText({ field, handleDeleteField }) {
  return (
    <div className="p-2 my-3 bg-white hover:bg-gray-50 cursor-pointer border border-gray-700 rounded-sm relative">
      <div className="flex items-center">
        <div className="p-1 mr-3">
          <img src={richtext} className="w-8 h-8 object-cover " />
        </div>
        <div className="flex items-center">
          <div className="font-medium py-2 px-1 ">{field?.name}</div>
          <div className="ml-5 text-green-600 underline">{field?.type}</div>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 p-2 h-full"
        // onClick={handleDelete}
      >
        <Delete id={field?.id} handleDeleteField={handleDeleteField} />
      </div>
    </div>
  );
}

export default RichText;
