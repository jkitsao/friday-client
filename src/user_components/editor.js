import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

function Editor() {
  return (
    <div>
      <SunEditor
        setOptions={{
          height: 300,
          //buttonList: SunEditor.buttonList.formatting, Or Array of button list, eg. [['font', 'align'], ['image']]
          // Other option
          // buttonList: buttonList.formatting,
          toolbarContainer: "#toolbar_container",
          showPathLabel: false,
          charCounter: true,
          maxCharCount: 720,
          width: "auto",
          // maxWidth: "700px",
          height: "auto",
          minHeight: "150px",
          maxHeight: "650px",
          // fontSize: [8, 10, 14, 16, 18, 20, 24, 36],
          fontSize: 18,

          buttonList: [
            ["undo", "redo", "font", "fontSize", "formatBlock"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "removeFormat",
            ],
            [
              // Line break
              ("fontColor",
              "hiliteColor",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "table"),
            ],
            [
              "link",
              "image",
              "video",
              "fullScreen",
              "showBlocks",
              "codeView",
              "preview",
              "print",
              "save",
            ],
          ],
        }}
      />
    </div>
  );
}

export default Editor;
