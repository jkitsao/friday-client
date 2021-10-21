/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
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
import { Menu, Transition } from "@headlessui/react";
import FieldsModal from "./FieldsModal";
import ModelFieldsRender from "./ModelFieldsRender";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
export default function ModelsPageComp({
  model,
  setRefresh,
  refresh,
  loading,
}) {
  // const [textName, setTextName] = useState();
  // const [richTextName, setRichTextName] = useState();
  // const [numberName, setNumberName] = useState();
  // const [mediaName, setMediaName] = useState();
  const [fields, setFields] = useState([]);

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between borer-b py-2 mb-3">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
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
      <div className="py-5 bg-gray-300 min-h-screen border-t-2 border-gray-500 overflow-y-auto">
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
