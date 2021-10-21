import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

/***
 *
 * text component
 */
function TextComp({
  setTextField,
  textField,
  setCurrentField,
  radioValue,
  setRadioValue,
}) {
  // handle change on input
  const handleChange = (e) => {
    let value = e.target.value.replace(/ /g, "_");
    setTextField({ ...textField, name: value });
  };
  const handleRadioChange = (e) => {
    // alert(e);
    setRadioValue(e);
    setTextField({ ...textField, text_type: e });
  };
  useEffect(() => {
    if (textField) {
      setCurrentField(textField);
    }
    // if (value) {
    //   setTextField({ ...textField, text_type: value });
    // }
  }, [textField]);
  return (
    <div>
      <div className="p-2">
        <div className="text-lg font-semibold text-gray-800 inline-block py-1">
          Name
        </div>
        <Input
          placeholder=""
          value={textField.name}
          onChange={handleChange}
          name="text"
        />
      </div>
      <div className="text-sm p-2">
        <RadioGroup onChange={handleRadioChange} value={radioValue}>
          <Stack direction="row">
            <Radio value="short">short text</Radio>
            <Radio value="long">long text</Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className="text-sm px-2">
        <p className="text-xs font-semibold text-gray-400 py-2">
          No space is allowed for the name attribute
        </p>
        <p className=" font-semibold text-gray-600"></p>
      </div>
    </div>
  );
}
/***
 *
 * number component
 */
function NumberComp({ setCurrentField, numbField, setNumbField }) {
  //handle onchange
  const handleChange = (e) => {
    let value = e.target.value.replace(/ /g, "_");
    setNumbField({ ...numbField, name: value });
    setCurrentField(numbField);
  };
  //update
  useEffect(() => {
    if (numbField) {
      setCurrentField(numbField);
    }
  }, [numbField]);
  return (
    <div>
      <div className="p-2">
        <div className="text-lg font-semibold text-gray-800 inline-block py-1">
          Name
        </div>
        <Input
          placeholder=""
          value={numbField.name}
          name="number"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="text-sm px-2">
        <p className="text-xs font-semibold text-gray-400 py-2">
          No space is allowed for the name attribute
        </p>
        <p className=" font-semibold text-gray-600"></p>
      </div>
    </div>
  );
}

/***
 *
 * richText component
 */

function RichTextComp({ setCurrentField, richTextField, setRichTextField }) {
  //handle onchange
  const handleChange = (e) => {
    let value = e.target.value.replace(/ /g, "_");
    setRichTextField({ ...richTextField, name: value });
    // setCurrentField(richTextField);
  };
  //update
  useEffect(() => {
    if (richTextField) {
      setCurrentField(richTextField);
    }
  }, [richTextField]);
  return (
    <div>
      <div className="p-2">
        <span className="text-lg font-semibold text-gray-800 inline-block py-1">
          Name
        </span>
        <Input
          placeholder=""
          value={richTextField.name}
          name="rtext"
          onChange={handleChange}
        />
      </div>
      <div className="text-sm px-2">
        <p className="text-lg font-semibold py-2">Richtext</p>
        <p className="text-xs font-semibold text-gray-400 py-2">
          No space is allowed for the name attribute
        </p>
      </div>
    </div>
  );
}
/***
 *
 * media component
 */
function MediaComp({
  setCurrentField,
  mediaField,
  setMediaField,
  mediaType,
  setMediaType,
}) {
  //handle onchange
  const handleChange = (e) => {
    let value = e.target.value.replace(/ /g, "_");
    setMediaField({ ...mediaField, name: value });
  };
  const handleRadioChange = (e) => {
    setMediaType(e);
    setMediaField({ ...mediaField, media_type: e });
  };
  //update
  useEffect(() => {
    if (mediaField) {
      setCurrentField(mediaField);
    }
  }, [mediaField]);
  return (
    <div>
      <div className="p-2">
        <span className="text-lg font-semibold text-gray-800 inline-block py-1">
          Name
        </span>
        <Input placeholder="" value={mediaField.name} onChange={handleChange} />
      </div>
      <div className="text-sm p-2">
        <RadioGroup onChange={handleRadioChange} value={mediaType}>
          <Stack direction="row">
            <Radio value="custom">custom upload</Radio>
            <Radio value="unsplash">unsplash</Radio>
            <Radio value="url">paste URL</Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className="text-sm px-2">
        <p className="text-xs font-semibold text-gray-400 py-2">
          No space is allowed for the name attribute
        </p>
        <p className=" font-semibold text-gray-600"></p>
      </div>
    </div>
  );
}
/***
 *
 * date component
 */
function DateComp({ setCurrentField, dateField, setDateField }) {
  //handle onchange
  const handleChange = (e) => {
    let value = e.target.value.replace(/ /g, "_");
    setDateField({ ...dateField, name: value });
    // setCurrentField(richTextField);
  };
  //update
  useEffect(() => {
    if (dateField) {
      setCurrentField(dateField);
    }
  }, [dateField]);
  return (
    <div>
      <div className="p-2">
        <span className="text-lg font-semibold text-gray-800 inline-block py-1">
          Name
        </span>
        <Input placeholder="" value={dateField.name} onChange={handleChange} />
      </div>
      <div className="text-sm px-2">
        <p className="text-xs font-semibold text-gray-400 py-2">
          No space is allowed for the name attribute
        </p>
        <p className=" font-semibold text-gray-600"></p>
      </div>
    </div>
  );
}
/***
 *
 * color component
 */
function ColorComp({
  setCurrentField,
  colorField,
  setColorField,
  colorType,
  setColorType,
}) {
  //handle onchange
  const handleChange = (e) => {
    let value = e.target.value.replace(/ /g, "_");
    setColorField({ ...colorField, name: value });
    // setCurrentField(richTextField);
  };
  //
  // const handleColorChange = (e) => {
  //   setColorType(e);
  //   setColorField({ ...colorField, color_type: e });
  // };
  //update state
  useEffect(() => {
    if (colorField) {
      setCurrentField(colorField);
    }
  }, [colorField]);
  return (
    <div>
      <div className="p-2">
        <span className="text-lg font-semibold text-gray-800 inline-block py-1">
          Name
        </span>
        <Input placeholder="" value={colorField.name} onChange={handleChange} />
      </div>
      {/* <div className="text-sm p-2">
        <RadioGroup onChange={handleColorChange} value={colorType}>
          <Stack direction="row">
            <Radio value="hex">Hex</Radio>
            <Radio value="rgb">RGB</Radio>
          </Stack>
        </RadioGroup>
      </div> */}
      <div className="text-sm px-2">
        <p className="text-xs font-semibold text-gray-400 py-2">
          No space is allowed for the name attribute
        </p>
        <p className=" font-semibold text-gray-600"></p>
      </div>
    </div>
  );
}

export { TextComp, NumberComp, RichTextComp, MediaComp, DateComp, ColorComp };
