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
import { Kbd } from "@chakra-ui/react";
import { baseURL } from "../../../api/axios";
function Mid_Docs({ name, id, url }) {
  return (
    <div className="bg-white text-gray-700 m-2">
      {/* <div className="py-3">
        <span className=" text-lg font-semibold">Api format</span>
      </div> */}
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="semibold">
                <div className=" flex text-center items-center transition-all duration-150">
                  {/* url tooltip */}
                  <Tooltip label="base url" aria-label="A tooltip">
                    <span className="text-base bg-red-50 font-normal hover:bg-gray-900 rounded px-2 py-1 text-red-600  hover:text-red-300 mx-1">
                      <kbd>{baseURL}</kbd>
                    </span>
                  </Tooltip>
                  / {/* project id tooltip */}
                  <Tooltip label="project id" aria-label="A tooltip">
                    <span className="text-base font-normal bg-green-50 hover:bg-gray-900 rounded px-2 py-1 text-green-600  hover:text-green-300 mx-1 ">
                      {id}
                    </span>
                  </Tooltip>
                  /{/* model name tooltip */}
                  <Tooltip label="model name" aria-label="A tooltip">
                    <span className="text-base font-normal bg-blue-50 hover:bg-gray-900 rounded px-2 py-1 text-blue-600  hover:text-blue-200 mx-1 ">
                      {name}
                    </span>
                  </Tooltip>
                </div>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Mid_Docs;
