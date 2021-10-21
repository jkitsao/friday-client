import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
function TextElement({ field, content, setContent, fields }) {
  let obj = field?.name;
  const [value, setValue] = useState(fields[obj] ? fields[obj] : "");
  useEffect(() => {
    if (value) setContent({ ...content, [obj]: value });
  }, [value]);

  return (
    <div className="my-3 border-l-2 border-green-200 p-2">
      {field?.text_type === "long" ? (
        <FormControl id={field?.name}>
          <FormLabel>{field?.name}</FormLabel>
          <Textarea
            value={value}
            placeholder=""
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
      ) : (
        <FormControl id={field?.name}>
          <FormLabel>{field?.name}</FormLabel>
          <Input
            value={value}
            placeholder=""
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
      )}
    </div>
  );
}

export default TextElement;
