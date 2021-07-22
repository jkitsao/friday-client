import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Button,
  useDisclosure,
  FocusLock,
} from "@chakra-ui/react";
import Social_form from "./Social_form";

const PopoverForm = ({ socialLinks, setSocialLinks }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <div>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
      >
        <PopoverTrigger>
          <button
            type="button"
            className="w-full px-3 text-gray-700  py-3 shadow-sm flex justify-center items-center rounded-sm font-semibold bg-gray-300"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 mx-1 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
            <span>Add Social links</span>
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <div className="font-semibold ">Social Links</div>
          </PopoverHeader>
          <PopoverBody>
            <Social_form
              socialLinks={socialLinks}
              onClose={onClose}
              setSocialLinks={setSocialLinks}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverForm;
