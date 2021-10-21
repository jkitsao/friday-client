import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
function Empty_State({ title, description }) {
  return (
    <div
      className="w-full h-full mx-auto rounded-lg mt-16 border-2 border-dashed flex justify-center items-center"
      style={{
        maxWidth: "65rem",
      }}
    >
      <Alert
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="300px"
        bgColor="white"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {title}
        </AlertTitle>
        <AlertDescription maxWidth="sm">{description}</AlertDescription>
      </Alert>
    </div>
  );
}

export default Empty_State;
