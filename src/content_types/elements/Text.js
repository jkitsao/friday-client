import React from "react";
import { Input } from "@chakra-ui/react";
import text from "../../assets/elements/text.png";
import Delete from "./comp/DeleteComp";
import Badge_Comp from "./comp/Badge";

function Text({ field, handleDeleteField }) {
  return (
    <div className="p-2 my-3 bg-white hover:bg-gray-50 cursor-pointer border border-gray-700 rounded-sm relative">
      <div className="flex items-center">
        <div className="p-1 mr-3">
          <img src={text} className="w-8 h-8 object-cover " />
        </div>
        <div className="flex items-center">
          <div className="font-medium py-2 px-1 ">{field?.name}</div>
          <div className="ml-5 text-green-600 underline">
            {/* {field?.text_type} {field?.type} */}
            <Badge_Comp name={field?.text_type} />
            <Badge_Comp name={field?.type} />
          </div>
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

export default Text;
