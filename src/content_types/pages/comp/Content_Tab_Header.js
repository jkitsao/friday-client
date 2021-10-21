/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";
import DynamicFormRender from "./DynamicFormRender";
import ModelEntries from "./ModelEntries";
import NewEntry from "./NewEntry";
import { nanoid } from "nanoid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Content_Tab_Header({
  project,
  models,
  model,
  isLoading,
}) {
  // const [models, setModels] = useState([]);
  // const id = () => nanoid(10);
  const [selected, setSelected] = useState(models[0]);
  const [content, setContent] = useState({ id: nanoid(10) });
  const [data, setData] = useState([]);
  const [fields] = useState({ id: () => nanoid(10) });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (models) {
      setSelected(models[0]);
    }
    if (model) setSelected(model);
  }, [models]);

  useEffect(() => {
    if (content) {
      let arr = [{ ...content }];
      setData(arr);
    }
  }, [content]);

  return (
    <div className=" lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0 border-b">
        <span className="text-md font-semibold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {/* Model entries for : [{selected?.name}] */}
        </span>
        {/* {JSON.stringify(data)} */}

        <div className=" flex flex-col  sm:flex-row sm:flex-wrap sm:mt-0 justify-between sm:space-x-6 py-3 border-b-2 border-gray-500">
          <div className=" items-center text-sm text-gray-500">
            {models && !isLoading && (
              <Content_Tab_Selector
                models={models}
                selected={selected}
                setSelected={setSelected}
                setContent={setContent}
              />
            )}
          </div>
          <div className="items-center h-full lg:mt-5 ">
            <NewEntry
              selected={selected}
              content={content}
              setContent={setContent}
              data={data}
              isNew={true}
              field={false}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </div>
        </div>
      </div>
      <div className=" w-full min-h-screen h-full">
        <div className="py-5">
          <ModelEntries
            selected={selected}
            content={content}
            setContent={setContent}
            data={data}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </div>
      </div>
    </div>
  );
}

function Content_Tab_Selector({ models, selected, setSelected, setContent }) {
  const handleSelected = (e) => {
    setSelected(e);
    setContent({ id: nanoid(10) });
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
