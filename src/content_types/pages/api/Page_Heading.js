/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Tooltip } from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";
import { RefreshIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useClipboard } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
// import { baseURL } from "../../../api/axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page_Heading({ baseApi, fetchData }) {
  const [value, setValue] = React.useState(baseApi);
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <div className="lg:flex lg:items-center  lg:justify-around border bg-gray-900 rounded-t-md  p-3 p">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-semibold leading-7 text-gray-100 sm:text-3xl sm:truncate">
          Api Endpoint
        </h2>
        <div className="mt-1 flex  items-end sm:flex-row sm:mt-0 sm:space-x-3">
          <div className="mt-4 lg:flex items-center text-base rounded-md font-normal font-mono text-green-200 py-2 px-4 shadow-sm bg-gray-700 ">
            {/* {baseApi} */}
            <Link href={baseApi} isExternal>
              {baseApi}
              <ExternalLinkIcon mx="2px" color="white" marginX="1.5" />
            </Link>
            <span
              onClick={onCopy}
              className={`px-3 py-1 cursor-pointer text-xs font-normal transition-all duration-100 ml-2 overflow-x-auto rounded-md  ${
                hasCopied
                  ? "bg-green-400 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {hasCopied ? "Copied" : "Copy"}
            </span>
          </div>
          <span className="hidden sm:block my-2 lg:my-0">
            <button
              type="button"
              onClick={() => fetchData()}
              className="inline-flex items-center px-3 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200"
            >
              <RefreshIcon className=" h-5 w-5 " aria-hidden="true" />
            </button>
          </span>
        </div>
      </div>

      {/* <div className=" bg-white">
        hello
        {/* <span className="hidden sm:block my-2 lg:my-0">
          <button
            type="button"
            onClick={() => fetchData()}
            className="inline-flex items-center px-4 py-3 rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200"
          >
            <PaperAirplaneIcon
              className="-ml-1 mr-2 h-5 w-5 text-white"
              aria-hidden="true"
            />
            Make a request
          </button>
        </span> 
      </div> */}
    </div>
  );
}
