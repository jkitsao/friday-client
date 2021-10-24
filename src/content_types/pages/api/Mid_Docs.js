import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tooltip,
} from "@chakra-ui/react";
function Mid_Docs({ name, id }) {
  return (
    <div className="bg-white text-gray-700 m-2">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="semibold">
                <span
                  className="font-normal inline-block text-sm text-white py-1 px-2 bg-green-600 rounded"
                  style={{
                    minWidth: "7rem",
                  }}
                >
                  <Tooltip label="project id" aria-label="A tooltip">
                    {id}
                  </Tooltip>
                </span>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="semibold">
                <span
                  className="font-normal text-sm text-white py-1 px-2 bg-green-600 rounded"
                  style={{
                    minWidth: "7rem",
                  }}
                >
                  <Tooltip label="model name" aria-label="A tooltip">
                    {name}
                  </Tooltip>
                </span>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Mid_Docs;
