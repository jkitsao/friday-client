import React from "react";
import { Spinner } from "@chakra-ui/react";
function LoadingComp() {
  return (
    <div className="flex justify-center w-full p-5">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
}

export default LoadingComp;
