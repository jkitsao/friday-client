import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInput,
} from "@chakra-ui/react";
function NumberElement({ field, content, setContent, fields }) {
  let obj = field?.name;
  const [value, setValue] = useState(fields[obj] ? fields[obj] : "");
  useEffect(() => {
    if (value) setContent({ ...content, [obj]: value });
  }, [value]);
  return (
    <div className="my-3 border-l-2 border-green-200 p-2">
      <FormControl id="amount">
        <FormLabel>{field?.name}</FormLabel>
        <NumberInput
          value={value}
          placeholder=""
          onChange={(value) => setValue(value)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </div>
  );
}

export default NumberElement;
