import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const Editor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 400,
    maxHeight: 400, // all options from https://xdsoft.net/jodit/doc/
  };
  const handleContent = (content) => {
    // alert(content);
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onChange={(newContent) => handleContent(newContent)} // preferred to use only this option to update the content for performance reasons
      //   onChange={(newContent) => setContent(newContent)}
    />
  );
};

export default Editor;
