import React, { useState, useEffect } from "react";
import TextElement from "../../form_elements/TextElement";
import NumberElement from "../../form_elements/NumberElement";
import DateElement from "../../form_elements/DateElement";
// import JodiEditor from "../../../user_components/JoditEditor";
import RichTextElement from "../../form_elements/RichTextElement";
// import Unsplash from "../../../components/unsplash/Unsplash";
import MediaElement from "../../form_elements/MediaElement";
// import axios from "axios";
import api from "../../../api/axios";
import { useToast, Spinner } from "@chakra-ui/react";
import LoadingComp from "../../../components/LoadingComp";
import ColorElement from "../../form_elements/ColorElement";
// import { nanoid } from "nanoid";
function DynamicFormRender({
  selected,
  content,
  setContent,
  data,
  fields,
  refresh,
  setRefresh,
  onClose,
  isNew,
}) {
  //   const fields = selected?.fields;
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  // const [fields, setFields] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [id] = useState(content?.id);

  const handleSubmitContent = async (e) => {
    e.preventDefault();
    if (!content) return;
    if (Object.keys(content).length < 2) return;

    // return alert(JSON.stringify(content));
    setLoading(true);
    try {
      const res = await api.post("/content/", {
        model_name: selected?.name,
        project_id: selected?.project_id,
        content: data,
        id: id,
        _id: selected?._id,
      });
      setRefresh(!refresh);
      setLoading(false);
      onClose();
      return toast({
        title: "success",
        description: res.data.msg || res.data.message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } catch (err) {
      setLoading(false);
      return toast({
        title: "error",
        description: err?.msg || err?.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  return (
    <form className="w-full py-5" onSubmit={(e) => e.preventDefault()}>
      {/* {JSON.stringify(fields)} */}
      {!isLoading ? (
        <div className="w-full ">
          <section className="p-8 lg:w-3/4 xl:w-1/2  lg:mx-auto rounded-md shadow-lg bg-white">
            {selected?.fields &&
              selected?.fields.map((field, index) => (
                <FormComp
                  field={field}
                  key={index}
                  content={content}
                  setContent={setContent}
                  fields={fields}
                />
              ))}
          </section>

          <section
            className="lg:w-3/4 xl:w-1/2 lg:mx-auto  my-3 sticky bottom-0 z-50"
            style={{
              marginBottom: 0,
            }}
          >
            <button
              className="px-3 rounded-lg py-5  flex justify-center items-center bg-green-900 font-semibold text-lg hover:bg-green-800 transition-all duration-100 text-white w-full h-full focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleSubmitContent}
              type="submit"
              disabled={loading}
            >
              <span className="inline-flex justify-center items-center">
                <svg
                  className="w-6 h-6 mx-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                {!loading ? "save" : <Spinner />}
              </span>
            </button>
          </section>
        </div>
      ) : (
        <LoadingComp />
      )}
    </form>
  );
}

function FormComp({ field, content, setContent, fields }) {
  switch (field.type) {
    case "text":
      return (
        <TextElement
          field={field}
          content={content}
          setContent={setContent}
          fields={fields}
        />
      );
    case "number":
      return (
        <NumberElement
          field={field}
          content={content}
          setContent={setContent}
          fields={fields}
        />
      );
    case "media":
      return (
        <MediaElement
          field={field}
          content={content}
          setContent={setContent}
          fields={fields}
        />
      );
    case "date":
      return (
        <DateElement
          field={field}
          content={content}
          setContent={setContent}
          fields={fields}
        />
      );
    case "richtext":
      return (
        <RichTextElement
          field={field}
          content={content}
          setContent={setContent}
          fields={fields}
        />
      );
    case "color":
      return (
        <ColorElement
          field={field}
          content={content}
          setContent={setContent}
          fields={fields}
        />
      );
    default:
      return "";
  }
}

export default DynamicFormRender;
