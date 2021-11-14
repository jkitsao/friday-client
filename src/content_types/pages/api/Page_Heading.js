/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Tooltip } from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";
import { RefreshIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useClipboard } from "@chakra-ui/react";

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
          Api playground
        </h2>
        <div className="mt-1 flex  items-end sm:flex-row sm:mt-0 sm:space-x-6">
          <div className="mt-4 lg:flex items-center text-sm rounded-md font-normal text-white py-2 px-4 shadow-sm bg-gray-400 ">
            {/* {baseApi} */}
            <Code
              // colorScheme={`${hasCopied ? "green" : "yellow"}`}
              colorScheme="green"
              children={baseApi}
              transition="all"
              transitionDuration="150"
              paddingX="2"
              overflowX="auto"
              maxW="xl"
            />
            <span
              onClick={onCopy}
              className={`px-3 py-1 cursor-pointer text-xs font-normal transition-all duration-100 ml-3 overflow-x-auto rounded-md  ${
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
              className="inline-flex items-center px-3 py-3 rounded-md shadow-sm text-sm font-medium text-green-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200"
            >
              <RefreshIcon
                className=" h-5 w-5 text-green-700"
                aria-hidden="true"
              />
            </button>
          </span>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4 lg:hidden">
        {/* Dropdown */}
        {/* <Menu as="span" className="ml-3 relative ">
          <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            More
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu> */}
        <span className="hidden sm:block my-2 lg:my-0">
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
      </div>
    </div>
  );
}
