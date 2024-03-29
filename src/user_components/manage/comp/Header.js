import React from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import { Fragment } from "react";
import manage from "../../../assets/manage.png";
import { Menu, Transition } from "@headlessui/react";
import Project_form_modal from "./project_form_modal";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ refresh, setRefresh, name }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <img src={manage} className="w-16 h-16 object-cover" />
          <h2 className="text-xl font-normal leading-5 text-gray-100 sm:text-2xl sm:truncate">
            Dashboard for {name}
          </h2>
        </div>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          {/* <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Closing on January 9, 2020
          </div> */}
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        {/* <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PencilIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Edit
          </button>
        </span>

        <span className="hidden sm:block ml-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <LinkIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            View
          </button>
        </span> */}

        <span className="sm:ml-3">
          {/* modal opener */}
          <Project_form_modal refresh={refresh} setRefresh={setRefresh} />
        </span>

        {/* Dropdown */}
        <Menu as="span" className="ml-3 relative sm:hidden">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                More
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
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
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}
