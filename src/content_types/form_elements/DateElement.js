import React, { useState, useEffect } from "react";
import { DatePicker } from "react-rainbow-components";
function DateElement({ field, content, setContent, fields }) {
  let obj = field?.name;
  const [value, setValue] = useState(fields[obj] ? fields[obj] : "");
  useEffect(() => {
    if (value) setContent({ ...content, [obj]: value });
  }, [value]);
  function onChange(date) {
    setValue(date);
  }
  return (
    <div className=" font-semibold my-3 border-l-2 border-green-200 p-2">
      <span className=" py-2 inline-block">{field?.name}</span>
      <DatePicker
        id={field?.id}
        value={value}
        onChange={onChange}
        // label={field?.name}
        formatStyle="medium"
      />
    </div>
  );
}

export default DateElement;
