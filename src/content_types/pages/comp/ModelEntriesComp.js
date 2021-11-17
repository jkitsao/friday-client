import React, { useState } from "react";
import NewEntry from "./NewEntry";

import OverLayDelete from "../../components/OverLayDelete";
const title = "Delete entry";
const message =
  " Are you sure you want to delete this entry? Once you delete this entry, it's gone for good and cannot be retrieved. This action cannot be undone.";
function ModelEntriesComp({
  field,
  model,
  selected,
  content,
  setContent,
  data,
  refresh,
  setRefresh,
  deleteEntry,
}) {
  const n = 1 || 2 || 3 || 4;
  const name =
    typeof field[Object.keys(field)[n]] !== "object" &&
    typeof field[Object.keys(field)[n]] !== "number"
      ? field[Object.keys(field)[n]]
      : "untitled entry";

  const [open, setOpen] = useState(false);

  return (
    <tr>
      <td className="px-2 py-4 whitespace-nowrap overflow-hidden truncate ">
        <div className="flex items-center">
          <div className="">
            <div
              className=""
              style={{
                maxWidth: "25rem",
              }}
            >
              <NewEntry
                name={name}
                field={field}
                selected={selected}
                content={content}
                setContent={setContent}
                data={data}
                refresh={refresh}
                setRefresh={setRefresh}
                isNew={false}
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-xs text-gray-400 font-normal">{field?.id}</div>
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-400 font-normal whitespace-nowrap">
        {model && model}
      </td>
      <td className="px-6 py-4 whitespace-nowrap opacity-75">
        <DeleteComp
          field={field}
          deleteFunction={deleteEntry}
          title={title}
          message={message}
          id={false}
          open={open}
          setOpen={setOpen}
        />
      </td>
    </tr>
  );
}

export function DeleteComp({
  field,
  deleteFunction,
  title,
  message,
  id,
  open,
  setOpen,
  project_id,
  model_name,
}) {
  return (
    <>
      <button
        className="p-2 inline-flex text-xs rounded-full hover:bg-gray-200 opacity-60 hover:opacity-95 text-red-800"
        onClick={() => setOpen(true)}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>

      <div>
        <OverLayDelete
          open={open || false}
          field={field}
          deleteFunction={deleteFunction}
          setOpen={setOpen}
          title={title}
          message={message}
          id={id}
          project_id={project_id}
          model_name={model_name}
          // handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default ModelEntriesComp;
