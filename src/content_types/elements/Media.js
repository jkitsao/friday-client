import React from "react";
import media from "../../assets/elements/media.png";
import Delete from "./comp/DeleteComp";

function Media({ field, handleDeleteField }) {
  return (
    <div className="p-2 my-3 hover:bg-white cursor-pointer border border-gray-700 rounded-sm relative">
      <div className="flex items-center">
        <div className="p-1 mr-3">
          <img src={media} className="w-8 h-8 object-cover" />
        </div>
        <div className="flex items-center">
          <div className="font-medium py-2 px-1 ">{field?.name}</div>
          <div className="ml-5 text-green-600 underline">
            {field?.type} ({field?.media_type})
          </div>
        </div>
        {/* {JSON.stringify(field)} */}
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

export default Media;
