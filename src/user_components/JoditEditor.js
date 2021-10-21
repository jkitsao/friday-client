import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const JodiEditor = ({ setValue, value }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState();

  const config = {
    readonly: false,
    height: 700,
    // maxHeight: 700, // all options from https://xdsoft.net/jodit/doc/
    // buttons: ["bold", "italic", "paragraph"],
    buttons: [
      "paragraph",
      "source",
      "|",
      "bold",
      "italic",
      "|",
      "ul",
      "ol",
      "eraser",
      "|",
      "fontsize",
      "brush",
      "|",
      "image",
      "table",
      "link",
      "|",
      "align",
      "|",
      "undo",
      "redo",
      "|",
      "copyformat",
      "fullsize",
      // "dots",
    ],
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      tabIndex={1} // tabIndex of textarea
      // onChange={(newContent) => handleContent(newContent)}
      //   onChange={(newContent) => setContent(newContent)}
      onBlur={(newContent) => setValue(newContent)} // preferred to use only this option to update the content for performance reasons
    />
  );
};

export default JodiEditor;
