import React, { useState } from "react";
import { useToast, Spinner } from "@chakra-ui/react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import { postMediaToGallery } from "./functions/gallery";
import { useUser } from "../../firebase/useUser";

function Cloudinary_Uploader({ value, setValue }) {
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useUser();
  const toast = useToast();
  //delete functions
  const removeImageUrl = () => {
    setImageUrl("");
  };
  const removeUploadValue = () => {
    setValue({});
  };
  //cloudinary  callback functions
  const successCallBack = (result) => {
    console.log({ result });
    const {
      asset_id,
      original_filename,
      path,
      etag,
      bytes,
      url,
      secure_url,
      public_id,
      format,
    } = result.info;
    //post media to gallery
    postMediaToGallery(result.info, user);
    setValue({
      original_filename,
      format,
      bytes,
      public_id,
      path,
      url,
      secure_url,
    });
    setImageUrl(secure_url);
    return toast({
      title: "success",
      description: `${original_filename} has been uploaded`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  const failureCallBack = (error) => {
    // console.log({ response });
    const { status, statusText } = error;
    return toast({
      title: status,
      description: statusText,
      status: "error",
      duration: 4000,
      isClosable: true,
      position: "bottom",
    });
  };

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `whey`,
        uploadPreset: `friday`,
        sources: ["local", "camera"],
        folder: "cms-assets",
        apiKey: "618115664326338",
      },
      (error, result) => {
        if (error) {
          return failureCallBack(error);
        }
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          return successCallBack(result);
        }
      }
    );
    widget.open();
  };
  return (
    <div>
      {value && value?.secure_url && (
        <div>
          <img
            src={value?.secure_url}
            alt=""
            className="object-cover w-24 h-24 cursor-pointer border"
          />
          <DeleteComp handleDelete={removeUploadValue} />
        </div>
      )}
      {imageUrl && !value?.secure_url && (
        <div>
          <img
            src={imageUrl}
            alt=""
            className="object-cover w-24 h-24 cursor-pointer border"
          />
          <DeleteComp handleDelete={removeImageUrl} />
        </div>
      )}
      {!imageUrl && !value?.secure_url && (
        // <Cloudinary_Upload_Widget
        //   successCallBack={successCallBack}
        //   failureCallBack={failureCallBack}
        // />
        <button
          onClick={showWidget}
          style={{
            color: "white",
            border: "none",
            maxWidth: "10rem",
            backgroundColor: "gray",
            borderRadius: "4px",
            //   height: "25px",
            padding: "0.7rem",
          }}
        >
          custom upload
        </button>
      )}
    </div>
  );
}

export default Cloudinary_Uploader;

function Cloudinary_Upload_Widget({ failureCallBack, successCallBack }) {
  return (
    <div className="">
      <WidgetLoader />
      <Widget
        sources={["local", "camera"]} // set the sources available for uploading -> by default
        // all sources are available. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        // sourceKeys={{dropboxAppKey: '1dsf42dl1i2', instagramClientId: 'd7aadf962m'}} // add source keys
        // and ID's as an object. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        resourceType={"image"} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={"whey"} // your cloudinary account cloud name.
        // Located on https://cloudinary.com/console/
        uploadPreset={"friday"} // check that an upload preset exists and check mode is signed or unisgned
        buttonText={"upload image"} // default 'Upload Files'
        style={{
          color: "white",
          border: "none",
          maxWidth: "10rem",
          backgroundColor: "gray",
          borderRadius: "4px",
          //   height: "25px",
          padding: "0.7rem",
        }} // inline styling only or style id='cloudinary_upload_button'
        folder={"cms-assets"} // set cloudinary folder name to send file
        cropping={false} // set ability to crop images -> default = true
        onSuccess={successCallBack} // add success callback -> returns result
        onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
        logging={false} // logs will be provided for success and failure messages,
        // set to false for production -> default = true
        // customPublicId={'sample'} // set a specific custom public_id.
        // To use the file name as the public_id use 'use_filename={true}' parameter
        // eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
        use_filename={false} // tell Cloudinary to use the original name of the uploaded
        // file as its public ID -> default = true,

        // 👇 FOR SIGNED UPLOADS ONLY 👇

        // generateSignatureUrl={'http://my_domain.com/api/v1/media/generate_signature'} // pass the api
        // endpoint for generating a signature -> check cloudinary docs and SDK's for signing uploads
        apiKey={"618115664326338"} // cloudinary API key -> number format
        // accepts={'application/json'} // for signed uploads only -> default = 'application/json'
        // contentType={'application/json'} // for signed uploads only -> default = 'application/json'
        // withCredentials={true} // default = true -> check axios documentation for more information
        unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make
        // the Public ID unique, and just use the normalized file name -> default = true
      />
    </div>
  );
}

function DeleteComp({ handleDelete }) {
  return (
    <div className="bg-gray-50 hover:bg-gray-200 transition-all duration-100 w-24 flex justify-center py-1 items-center">
      <span
        role="button"
        onClick={handleDelete}
        className="text-xs text-center font-medium text-red-700 cursor-pointer"
      >
        <svg
          className="w-4 h-4 font-normal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
  );
}
