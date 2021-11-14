/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import FieldsModal from "./FieldsModal";
import ModelFieldsRender from "./ModelFieldsRender";
import Head from "../../../components/seo/Head";
import { Skeleton, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function ModelsPageComp({
  model,
  setRefresh,
  refresh,
  loading,
}) {
  const [fields, setFields] = useState([]);

  return (
    <div>
      <Head
        title={`model - ${model?.name}`}
        name={model?.name}
        content="models"
      />
      <div className="lg:flex lg:items-center lg:justify-between borer-b py-2 mb-3">
        <div className="flex items-end">
          <div className="mx-1  flex items-center pt-2 font-light hover:text-blue-500 cursor-pointer">
            <Link to={`/projects/${model?.project_id}`}>
              <svg
                className="w-8 h-8 text-gray-700 font-light hover:text-blue-500 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            </Link>
          </div>
          <h2 className="text-xl ml-3 w-full text-center font-semibold  text-gray-900 sm:text-3xl sm:truncate">
            {model?.name}
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <FieldsModal
              fields={fields}
              setFields={setFields}
              model={model}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          </span>

          {/* Dropdown */}
        </div>
      </div>
      <hr />
      {/* content component goes here */}
      <div className="py-5  min-h-screen border-t-2 border-gray-500 overflow-y-auto">
        {!loading && (
          <ModelFieldsRender
            model={model}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        )}
        {loading && <LoadingSkeleton />}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="lg:w-1/2 lg:mx-auto  p-5 rounded-md">
      <Stack>
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
      </Stack>
    </div>
  );
}
