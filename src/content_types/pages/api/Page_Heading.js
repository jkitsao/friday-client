/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Tooltip } from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useClipboard } from "@chakra-ui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page_Heading({ baseApi, fetchData }) {
  const [value, setValue] = React.useState(baseApi);
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <div className="lg:flex lg:items-center  p-2 lg:justify-around">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-3xl sm:truncate">
          Api playground
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-4 flex items-center text-sm rounded-md font-normal text-white py-2 px-2 bg-gray-200">
            {/* {baseApi} */}
            <Code colorScheme="yellow" children={baseApi} paddingX="2" />
            <span
              onClick={onCopy}
              className={`px-3 py-1 cursor-pointer text-xs font-normal transition-all duration-100 ml-3 rounded-md  ${
                hasCopied
                  ? "bg-green-400 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {hasCopied ? "Copied" : "Copy"}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            onClick={() => fetchData()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {/* <PencilIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            /> */}
            Make a request
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="span" className="ml-3 relative sm:hidden">
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
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
