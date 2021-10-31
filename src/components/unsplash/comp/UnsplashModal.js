import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Lorem,
} from "@chakra-ui/react";
import Images from "./Images";
import Search_comp from "./Search_comp";
import { useState, useEffect } from "react";
import Search_input from "./Search_input";
import LoadingComp from "../../LoadingComp";
import unsplash from "../../../assets/icons/unsplash.png";
export default function UnsplashModal({ setValue, value }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [alt, setAlt] = useState("");
  //function for prev && next page
  const nextPage = () => {
    if (page > 0 && page < 100) return setPage(page + 1);
  };
  const prevPage = () => {
    if (page > 1 && page < 100) return setPage(page - 1);
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <button
        onClick={onOpen}
        className="border p-1"
        title="unsplash"
        type="button"
      >
        {!value && (
          <img
            src={unsplash}
            alt="unsplash image"
            className="w-10 shadow-sm h-10 object-cover"
          />
        )}
        {value && (
          <img
            src={value.thumb}
            alt="unsplash image"
            className="w-24 h-24 object-cover"
          />
        )}
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="flex justify-center items-center">
              <span>
                <Search_input
                  query={query}
                  setPage={setPage}
                  setQuery={setQuery}
                  setIsSearchOpen={setIsSearchOpen}
                  setLoading={setLoading}
                />
              </span>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="relative">
              {loading && (
                <div className="absolute flex h-full text-center bg-white opacity-75 top-0 left-0 w-full items-center justify-center py-5">
                  <LoadingComp />
                </div>
              )}
              {!isSearchOpen && (
                <Images
                  page={page}
                  setLoading={setLoading}
                  setValue={setValue}
                  onClose={onClose}
                />
              )}
              {isSearchOpen && query && (
                <Search_comp
                  page={page}
                  setValue={setValue}
                  query={query}
                  setQuery={setQuery}
                  setLoading={setLoading}
                  onClose={onClose}
                />
              )}
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="mr-3 text-sm text-gray-500">page {page}</div>
            {page > 1 && (
              <Button
                variant="ghost"
                onClick={prevPage}
                className="text-sm font-normal"
                fontWeight="normal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Button>
            )}
            <Button variant="ghost" onClick={nextPage}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
