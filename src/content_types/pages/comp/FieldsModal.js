import React, { useState } from "react";
import { motion } from "framer-motion";
// import axios from "axios";
import api from "../../../api/axios";
import { nanoid } from "nanoid";
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
  Spinner,
} from "@chakra-ui/react";
import {
  TextComp,
  RichTextComp,
  MediaComp,
  NumberComp,
  DateComp,
  ColorComp,
} from "./FieldsComponents";
import Field from "./Field";
function FieldsModal({ fields, setFields, model, setRefresh, refresh }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fieldOpen, setFieldOpen] = useState(null);
  const [currentField, setCurrentField] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateFields = async () => {
    // alert(JSON.stringify(currentField));
    if (currentField && currentField.name && model) {
      try {
        const res = await api.post("/models/field", {
          field: currentField,
          id: model._id,
        });
        setLoading(false);
        setRefresh(!refresh);
        setCurrentField(null);
        onClose();
        return setFieldOpen(null);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {/* <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" /> */}
        Add fields
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> create fields</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!fieldOpen && <Field setFieldOpen={setFieldOpen} />}
            <IsFieldOpen
              fieldOpen={fieldOpen}
              fields={fields}
              setFields={setFields}
              // mediaType={mediaType}
              // setMediaType={setMediaType}
              // radioValue={radioValue}
              // setRadioValue={setRadioValue}
              currentField={currentField}
              setCurrentField={setCurrentField}
              // textField={textField}
              // setTextField={setTextField}
              // numbField={numbField}
              // setNumbField={setNumbField}
              // mediaField={mediaField}
              // setMediaField={setMediaField}
              // dateField={dateField}
              // setDateField={setDateField}
              // richTextField={richTextField}
              // setRichTextField={setRichTextField}
              // colorField={colorField}
              // setColorField={setColorField}
              // colorType={colorType}
              // setColorType={setColorType}
              // handleDeleteField={handleDeleteField}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={updateFields}>
              {!loading ? "add" : <Spinner />}
            </Button>
            <Button
              variant="ghost"
              onClick={fieldOpen ? () => setFieldOpen(null) : onClose}
            >
              {fieldOpen ? "back" : "close"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function IsFieldOpen({
  // mediaType,
  // setMediaType,
  // radioValue,
  // setRadioValue,
  fieldOpen,
  fields,
  setFields,
  currentField,
  setCurrentField,
  // textField,
  // setTextField,
  // numbField,
  // setNumbField,
  // mediaField,
  // setMediaField,
  // dateField,
  // setDateField,
  // richTextField,
  // setRichTextField,
  // colorField,
  // setColorField,
  // colorType,
  // setColorType,
  // handleDeleteField,
}) {
  const [radioValue, setRadioValue] = useState("short");
  const [mediaType, setMediaType] = useState("custom");
  const [colorType, setColorType] = useState("hex");

  const [textField, setTextField] = useState({
    name: null,
    id: nanoid(10),
    type: "text",
    text_type: radioValue,
  });
  const [numbField, setNumbField] = useState({
    name: null,
    id: nanoid(10),
    type: "number",
  });
  const [mediaField, setMediaField] = useState({
    name: null,
    id: nanoid(10),
    type: "media",
    media_type: mediaType,
  });
  const [dateField, setDateField] = useState({
    name: null,
    id: nanoid(10),
    type: "date",
  });
  const [richTextField, setRichTextField] = useState({
    name: null,
    id: nanoid(10),
    type: "richtext",
  });
  const [colorField, setColorField] = useState({
    name: null,
    id: nanoid(10),
    type: "color",
    color_type: colorType,
  });
  return (
    <motion.div className="transition-all duration-150 ">
      {fieldOpen === "text" && (
        <div className="transition-all duration-100">
          <TextComp
            currentField={currentField}
            fields={fields}
            setFields={setFields}
            setCurrentField={setCurrentField}
            textField={textField}
            setTextField={setTextField}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
        </div>
      )}
      {fieldOpen === "richtext" && (
        <div>
          <RichTextComp
            currentField={currentField}
            fields={fields}
            setFields={setFields}
            setCurrentField={setCurrentField}
            richTextField={richTextField}
            setRichTextField={setRichTextField}
          />{" "}
        </div>
      )}
      {fieldOpen === "media" && (
        <div>
          {" "}
          <MediaComp
            currentField={currentField}
            fields={fields}
            setFields={setFields}
            setCurrentField={setCurrentField}
            mediaField={mediaField}
            setMediaField={setMediaField}
            mediaType={mediaType}
            setMediaType={setMediaType}
          />
        </div>
      )}
      {fieldOpen === "number" && (
        <div>
          {" "}
          <NumberComp
            currentField={currentField}
            fields={fields}
            setFields={setFields}
            setCurrentField={setCurrentField}
            numbField={numbField}
            setNumbField={setNumbField}
          />
        </div>
      )}
      {fieldOpen === "date" && (
        <div>
          {" "}
          <DateComp
            currentField={currentField}
            fields={fields}
            setFields={setFields}
            setCurrentField={setCurrentField}
            dateField={dateField}
            setDateField={setDateField}
          />
        </div>
      )}
      {fieldOpen === "color" && (
        <div>
          {" "}
          <ColorComp
            currentField={currentField}
            fields={fields}
            setFields={setFields}
            setCurrentField={setCurrentField}
            colorField={colorField}
            setColorField={setColorField}
            colorType={colorType}
            setColorType={setColorType}
          />
        </div>
      )}
    </motion.div>
  );
}

export default FieldsModal;
