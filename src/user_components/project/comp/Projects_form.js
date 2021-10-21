import React, { useState } from "react";
// import axios from "axios";
import api from "../../../api/axios";
import { Spinner } from "@chakra-ui/react";
function Projects_form({ projects, setProjects, onClose }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [stack, setStack] = useState("");
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  //handle image upload
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    const file = e.target.files[0];
    setImage(file);

    reader.onloadend = () => {
      setPreview(reader.result);
      //   setProfileImage(file);
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
    return result.data;
  };
  // add projects
  const addProjects = async () => {
    if (!title) {
      setErrors(true);
      return;
    }
    if (uploadingImg) return;
    const imgObject = image ? await uploadToBucket(image) : {};
    const data = {
      title,
      url,
      repoUrl,
      desc,
      image: imgObject,
      preview,
      stack,
    };
    setProjects([...projects, data]);
    onClose();
  };
  return (
    <div>
      <form className="mt-8 space-y-3">
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Title
          </label>
          <input
            className={`text-sm p-2 border ${
              !errors ? "border-gray-300" : "border-red-600"
            } rounded-sm focus:outline-none focus:border-indigo-500`}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Acme project"
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Live url
          </label>
          <input
            className="text-sm p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.acme.app"
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Github Url
          </label>
          <input
            className="text-sm p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="github.com/user/acme"
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Tech stack used
          </label>
          <input
            className="text-sm p-2 border border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
            type="text"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            placeholder="html,css,javascript"
          />
          <span className="text-xs mt-0 ">separate with a coma</span>
        </div>
        <div className="flex-auto w-full mb-1 text-sm space-y-2">
          <label class="font-semibold text-gray-600 py-2">Description</label>
          <textarea
            className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
            placeholder="Brief description of the project"
            spellcheck="false"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <p class="text-xs text-gray-400 text-left my-3">
            You inserted {desc?.length} characters{" "}
            {desc && (
              <span
                className="text-red-700 font-semibold mx-5 cursor-pointer"
                onClick={() => setDesc("")}
              >
                clear
              </span>
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold  tracking-wide">
            screenshot/image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full  py-3 px-2 group text-center">
              <div className="h-full w-full text-center flex flex-col items-center justify-center   ">
                {!preview ? (
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
                  <div className="w-full">
                    <img
                      src={preview}
                      alt=""
                      className="h-48 object-cover w-full"
                    />
                  </div>
                )}
              </div>
            </label>
            {preview && image && (
              <div className="m-2">
                <span className="" onClick={cancelImage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer text-red-700"
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
        </div>
        <p className="text-sm text-gray-300">
          <span>File type: doc,pdf,types of images</span>
        </p>
        <div>
          <button
            type="button"
            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
            font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            onClick={addProjects}
            disabled={uploadingImg}
          >
            {!uploadingImg ? "Add" : <Spinner />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Projects_form;
