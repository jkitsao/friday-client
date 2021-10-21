import React, { useState, useEffect } from "react";
import axios from "axios";
import { Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
function Content_modal_form({ setName, name, setDescription }) {
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>Model name</FormLabel>
        <Input
          ref={initialRef}
          value={name}
          placeholder="model name"
          onChange={(e) => setName(e.target.value.replace(/ /g, "-"))}
        />
        <span className="ml-1 text-xs fon inline-block text-gray-400">
          *spaces are not allowed
        </span>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea
          className="w-full min-h-64 p-2 border outline-none border-gray-500"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
      </FormControl>
    </div>
  );
}

export default Content_modal_form;
