import React, { useState, useEffect, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Selector({ models, selected, setSelected }) {
  const handleSelected = (e) => {
    setSelected(e);
    //   setContent({ id: nanoid(10) });
  };
  return (
    <Listbox value={selected} onChange={handleSelected} className="w-full">
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-base font-medium text-gray-700">
              {selected?.name}
            </Listbox.Label> */}
          <div className="mt-1 relative text-lg" style={{ minWidth: "27rem" }}>
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10  text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center py-2">
                <span className="ml-3 block text-base">{selected?.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {models &&
                  models.map((model, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={model}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            {/* <img
                              src={person.avatar}
                              alt=""
                              className="flex-shrink-0 h-6 w-6 rounded-full"
                            /> */}
                            <span
                              className={classNames(
                                selected
                                  ? "font-semibold text-base cursor-pointer"
                                  : "font-normal cursor-pointer",
                                "ml-3 block text-base"
                              )}
                            >
                              {model.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active
                                  ? "text-white cursor-pointer"
                                  : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
