import React from "react";
import { Spinner } from "@chakra-ui/react";
import loader from "../assets/loader.gif";

function LoadingComp() {
  return (
    <div className="flex justify-center h-full items-center w-full p-5">
      {/* <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /> */}
      <img src={loader} className="object-cover w-64 h-64 mx-auto " />
    </div>
  );
}

export default LoadingComp;
