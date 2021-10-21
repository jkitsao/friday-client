import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@heroicons/react/solid";
import Project_form from "./Project_form";
import { useUser } from "../../../firebase/useUser";

export default function Project_form_modal({ refresh, setRefresh }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  return (
    <div>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <button
        type="button"
        onClick={onOpen}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        create project
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <div>
            <Project_form
              user={user}
              refresh={refresh}
              setRefresh={setRefresh}
              onClose={onClose}
            />
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
