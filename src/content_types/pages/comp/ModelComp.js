import React, { useState } from "react";
import { Link } from "react-router-dom";
// import OverLayDelete from "../../components/OverLayDelete";
import { DeleteComp } from "./ModelEntriesComp";

function ModelComp({ model, deleteModel }) {
  const [open, setOpen] = useState(false);
  const message = `Are you sure you want to delete this model? Once you delete this model, it's gone for good and cannot be retrieved. This action cannot be undone.`;
  const title = `delete [${model?.name}] model`;
  return (
    <tr key={model?._id}>
      <td
        className="px-6 py-4 whitespace-nowrap"
        style={{
          maxWidth: "5rem",
        }}
      >
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-base font-medium text-gray-900">
              <Link
                to={`/projects/${model?.project_id}/content_models/${model?.name}`}
              >
                <span className="hover:text-blue-500 hover:underline">
                  {model?.name}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </td>
      <td
        className="px-6 py-4 whitespace-pre-wrap "
        style={{
          maxWidth: "4rem",
        }}
      >
        <div className="text-sm text-gray-600 truncate">
          {model?.description || "null"}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td>
        {/* <OverLayDelete
         
        /> */}
        <DeleteComp
          title={title}
          message={message}
          open={open}
          setOpen={setOpen}
          id={model?._id}
          field={false}
          deleteFunction={deleteModel}
          project_id={model.project_id}
          model_name={model.name}
        />
      </td>
      {/* {JSON.stringify(model.name)} */}
    </tr>
  );
}

export default ModelComp;
