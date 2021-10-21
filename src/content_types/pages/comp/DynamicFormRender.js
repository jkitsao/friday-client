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
          <section className="p-8 lg:w-3/4 xl:w-1/2  lg:mx-auto  border rounded-md shadow-sm bg-white">
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
            className="lg:w-3/4 xl:w-1/2 lg:mx-auto  sticky bottom-0 z-50"
            style={{
              marginBottom: 0,
            }}
          >
            <button
              className="px-3 py-5 bg-green-900 hover:bg-green-800 transition-all duration-100 text-white w-full h-full"
              onClick={handleSubmitContent}
              type="submit"
              disabled={loading}
            >
              {!loading ? "save" : <Spinner />}
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
