import React from "react";

function Image_comp({ images, setValue, onClose }) {
  const handleSelection = (image) => {
    // alert(JSON.stringify(image.user));
    const {
      user: {
        username,
        name,
        links: { html },
      },
      urls,
    } = image;
    setValue({ ...urls, user: { username, name, link: html } });
    return onClose();
  };
  return (
    <div className="flex flex-wrap justify-center items-center">
      {images.map((image) => (
        <div
          className="hover:shadow-md border-2  border-transparent transition-all duration-75 hover:border-green-400 cursor-pointer"
          key={image.id}
          onClick={() => handleSelection(image)}
        >
          <div className="m-1">
            <img
              src={image.urls.thumb}
              alt={image.alt_description || "unsplash image"}
              className="w-32 object-cover h-32"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Image_comp;
