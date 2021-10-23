import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../../../api/axios";
import { CheckIcon } from "@heroicons/react/solid";
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
  Spinner,
  useToast,
} from "@chakra-ui/react";
import Content_modal_form from "./Content_modal_form";

export default function Content_modal({ project, refresh, setRefresh }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(null);
  const toast = useToast();
  // let value = e.target.value.replace(/ /g, "_");

  //submit to api function
  const submitModel = async () => {
    if (project) {
      try {
        const data = {
          name,
          description,
          projectId: project?._id,
          project_id: project?.project_id,
        };
        setLoading(true);
        await api.post("/models", data).then((res) => {
          setLoading(false);
          setRefresh(!refresh);
          setName(null);
          // console.log({ res });
          return onClose();
        });
      } catch (error) {
        console.error(error.response.data.message);
        setLoading(false);

        return toast({
          title: "an issue was found",
          description: error.response.data.message
            ? error.response.data.message
            : "",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      return submitModel();
    }
    return toast({
      title: "Model name is required",
      description: "please provide a model name to continue",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Add content model
      </button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>content model</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Content_modal_form
              project={project}
              setDescription={setDescription}
              setName={setName}
              name={name}
              loading={loading}
            />
            {/* {JSON.stringify(project)} */}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
              disabled={loading}
            >
              {!loading ? "create" : <Spinner />}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
