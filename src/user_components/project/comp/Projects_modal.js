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
import Projects_form from "./Projects_form";
export default function Projects_modal({ projects, setProjects }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="w-full px-3 text-gray-700  py-3 shadow-sm flex justify-center items-center rounded-sm font-semibold bg-gray-300"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 mx-1 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
        <span>Add Projects</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Projects_form
              projects={projects}
              setProjects={setProjects}
              onClose={onClose}
            />
          </ModalBody>

          {/* <ModalFooter>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
