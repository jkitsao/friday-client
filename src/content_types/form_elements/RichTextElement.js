// import { Modal } from "@chakra-ui/modal";
import React, { useEffect, useState } from "react";
import JodiEditor from "../../user_components/JoditEditor";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import TinyEditor from "../../components/Editor/TinyEditor";
import TextEditor from "../../components/Editor/TextEditor";
function RichTextElement({ field, content, setContent, fields }) {
  let obj = field?.name;
  const [value, setValue] = useState(fields[obj] ? fields[obj] : "");
  useEffect(() => {
    if (value) setContent({ ...content, [obj]: value });
  }, [value]);
  return (
    <div className="my-3 border-l-2 border-green-200 p-2">
      <div className="py-2 z-10">
        <span className="font-semibold">{field?.name}</span>
      </div>
      <div>
        {/* <RichTextModel field={field} setValue={setValue} value={value} /> */}
        <TinyEditor setValue={setValue} value={value} />
        {/* <TextEditor setValue={setValue} value={value} /> */}
      </div>
    </div>
  );
}

function RichTextModel({ field, setValue, value }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Input
        placeholder={
          value
            ? value
            : `Rich text area for ${field?.name} ..click to activate `
        }
        cursor="pointer"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{field?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <JodiEditor setValue={setValue} value={value} /> */}
            <TinyEditor setValue={setValue} value={value} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              done
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RichTextElement;
