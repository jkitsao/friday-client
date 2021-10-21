import React, { useState } from "react";

export default function ProfilePic({setProfileImg}) {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState();
  const [unsplashImg, setUnsplashImg] = useState(
    "https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80"
  );
  //image upload from device function
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    const file = e.target.files[0];
    setImage(file);
    setProfileImg(file)

    reader.onloadend = () => {
      setPreview(reader.result);
      //   setProfileImage(file);
    };
    if (file) {
      // reader.readAsDataURL(file);
      return reader.readAsDataURL(file);
    }
  };
  return (
    <div className="py-3 center mx-auto my-8">
      <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-3/4 sm:w-1/2 lg:w-2/5 mx-auto">
        <div className="mb-4">
          <img
            className="w-32 h-32 mx-auto rounded-full object-cover object-center"
            src={preview ? preview : unsplashImg}
            alt="Avatar Upload"
          />
        </div>
        <label className="cursor-pointer mt-6">
          <span className="mt-2 text-sm  leading-normal px-4 py-2 bg-blue-500 text-white  rounded-full">
            upload image
          </span>
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
      </div>
    </div>
  );
}
