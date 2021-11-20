import React, { useEffect, useState } from "react";
import Unsplash from "../../components/unsplash/Unsplash";
import { LinkIcon, CheckIcon } from "@heroicons/react/solid";
import upload from "../../assets/upload.png";
// import axios from "axios";
import api from "../../api/axios";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Input,
  Image,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Cloudinary_Uploader from "../../components/imageUploader/Cloudinary_Uploader";

function MediaElement({ field, content, setContent, fields }) {
  let obj = field?.name;
  const [value, setValue] = useState(fields[obj] ? fields[obj] : null);
  useEffect(() => {
    if (value) setContent({ ...content, [obj]: value });
  }, [value]);
  return (
    <div className="my-3 border-l-2 border-green-200 p-2">
      <div className="py-1 font-semibold">
        <span>{field?.name}</span>
      </div>
      {field.media_type === "unsplash" && (
        <div className="p-3 border-2 border-dotted ">
          <div>
            <Unsplash setValue={setValue} value={value} />
          </div>
        </div>
      )}
      {field.media_type === "url" && (
        <div className="p-3 border-2 border-dotted bg-gray-50">
          <div>
            <UrlUpload setValue={setValue} value={value} />
          </div>
        </div>
      )}
      {field.media_type === "custom" && (
        <div className="p-3 border-2 border-dotted bg-gray-50">
          <div>
            <CustomUpload setValue={setValue} value={value} />
            {/* <Cloudinary_Uploader setValue={setValue} value={value} /> */}
          </div>
        </div>
      )}
    </div>
  );
}

const UrlUpload = ({ setValue, value }) => {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        {!value ? (
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <LinkIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            click to add url
          </button>
        ) : (
          <Image
            boxSize="100px"
            cursor="pointer"
            objectFit="cover"
            src={value}
            alt=""
          />
        )}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">
          Paste image address(url)
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <div>
            <Input
              placeholder="paste image address here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

// image upload component
function CustomUpload({ value, setValue }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  // const [desc, setDesc] = useState(value ? value.description : "");
  // const [errors, setErrors] = useState(false);
  // // const [thumb, setthumb] = useState(null);
  // const [title, setTitle] = useState(value ? value.title : "");

  let data = {
    thumb: "",
    id: "",
  };

  //handle image upload

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    const file = e.target.files[0];
    setImage(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };
  //cancel image upload
  const cancelImage = () => {
    setImage("");
    setPreview("");
  };
  // image upload function
  const uploadToBucket = async (image) => {
    if (!image) return;
    setUploadingImg(true);
    const formData = new FormData();
    formData.append("image", image);
    const result = await api.post("/assets/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setUploadingImg(false);
    return result;
  };
  const test = async () => {
    try {
      const res = await uploadToBucket(image);

      // data.thumb = res.data.thumb;
      // data.id = res.data.id;
      setValue(res.data);
      return onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      {!value && (
        <button
          ref={btnRef}
          onClick={onOpen}
          type="button"
          className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {/* <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" /> */}
          <img
            src={upload}
            alt="upload image"
            title="upload image"
            className="w-28 h-28 object-cover shadow-md"
          />
        </button>
      )}
      {value && (
        <div>
          <img
            src={value?.thumb}
            className=" object-cover cursor-pointer"
            onClick={onOpen}
            style={{
              width: "110px",
              height: "110px",
            }}
          />
        </div>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="gry.700" />
          <ModalHeader textColor="gray.700">
            {!value && (
              <div className="flex w-full justify-center items-center h-full">
                <span>
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
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </span>
                <span>upload image</span>
              </div>
            )}
          </ModalHeader>

          <ModalBody bgColor="gray.50 relative">
            <form className=" ">
              {/* <div className="fixed w-full h-full bg-gray-900  opacity-70"></div> */}
              <div className="grid grid-cols-1 space-y-2">
                {value && (
                  <div className=" font-semibold  tracking-wide">
                    {value?.id}
                  </div>
                )}
                <div className="flex items-center justify-center w-full">
                  <label
                    className={`flex flex-col rounded-lg ${
                      !image && !value?.thumb && "border-4 border-dashed"
                    } w-full  py-3 px-2 group text-center`}
                  >
                    <div className="h-full w-full text-center flex flex-col items-center justify-center   ">
                      {!preview && !value?.thumb ? (
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-700 hover:text-white">
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span className="mt-2 text-base leading-normal">
                            Add an image
                          </span>
                          <input
                            type="file"
                            class="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      ) : (
                        <div className="w-full relative">
                          <div className="">
                            <img
                              src={preview ? preview : value?.regular}
                              alt=""
                              className=" object-cover w-full "
                              style={{
                                maxHeight: "17rem",
                              }}
                            />
                            {/* {JSON.stringify(info)} */}
                          </div>

                          {value?.thumb && (
                            <div
                              className="m-2 absolute top-0 right-0 rounded-full p-3 bg-white text-gray-500 hover:bg-red-600 hover:text-red-50"
                              onClick={() => setValue({})}
                            >
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 cursor-pointer"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </span>
                            </div>
                          )}

                          {preview && image && !value?.thumb && (
                            <div
                              className="m-2 absolute top-0 right-0 rounded-full p-3 bg-white text-gray-500 hover:bg-red-600 hover:text-red-50"
                              onClick={cancelImage}
                            >
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 cursor-pointer"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {!value && (
              <Button
                colorScheme="blue"
                type="button"
                onClick={test}
                disabled={uploadingImg}
              >
                {uploadingImg ? <Spinner /> : " Publish image"}
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default MediaElement;
