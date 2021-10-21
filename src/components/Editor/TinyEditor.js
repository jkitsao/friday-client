import React, { useRef } from "react";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";

function TinyEditor({ value, setValue }) {
  const editorRef = useRef(null);
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setValue(content);
  };
  return (
    <>
      <Editor
        apiKey="zt4g18jgsb1sbq6khpmwcso21gfxb9hc0qbgcwqh33jzj51m"
        init={{
          skin: false,
          content_css: false,
          height: 300,
          menubar: false,
          plugins: ["link image", "table paste"],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
          content_style:
            "body { font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; font-size:14px,line-height:1.6 }",
        }}
        value={value}
        onEditorChange={handleEditorChange}
      />
    </>
  );
}

export default TinyEditor;
