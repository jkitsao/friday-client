import React from "react";
import { nanoid } from "nanoid";
import DynamicFormRender from "./DynamicFormRender";
// import {} from '@heroicons/react'
import { CheckIcon } from "@heroicons/react/solid";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  useToast,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
function NewEntry({
  selected,
  content,
  setContent,
  data,
  name,
  field,
  refresh,
  setRefresh,
  isNew,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleClick = () => {
    if (!isNew) {
      setContent(field);
    }
    // alert(isNew);
    onOpen();
  };
  const handleNewClick = () => {
    if (selected && selected.fields.length < 1) {
      return toast({
        title: "Add a field to continue",
        description: `the current model does not have fields`,
        status: "warning",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    }
    setContent({ id: nanoid(10) });
    onOpen();
  };
  return (
    <>
      {!name && !field && (
        // <Button onClick={handleNewClick}>add new entry</Button>
        <button
          type="button"
          onClick={handleNewClick}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New entry
        </button>
      )}
      {name && field && (
        <div
          role="button"
          className="transition-all flex justify-center duration-100 cursor-pointer 
           px-5 h-full
            hover:underline hover:text-blue-500 text-green-800 py-3  font-semibold"
          onClick={handleClick}
          style={{
            maxWidth: "20rem",
          }}
        >
          <span className=" truncate">{name}</span>
        </div>
      )}

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full"
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.50">
          <DrawerCloseButton color="white" margin="4" fontSize="lg" />
          <DrawerHeader bgColor="gray.700" borderBottom="midnightblue">
            <div className="w-full h-full items-center text-gray-100 flex justify-center">
              <span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </span>
              <span>Editor</span>
            </div>
          </DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <div className="xl:w-5/6 lg:mx-auto">
              <DynamicFormRender
                selected={selected}
                content={content}
                setContent={setContent}
                data={data}
                fields={field}
                refresh={refresh}
                setRefresh={setRefresh}
                onClose={onClose}
                isNew={isNew}
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NewEntry;
