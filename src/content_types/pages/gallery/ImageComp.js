import React from "react";

function ImageComp({ images }) {
  return (
    <div className="flex">
      {images.map((image) => (
        <Image image={image} />
      ))}
    </div>
  );
}

function Image({ image }) {
  const { info } = image;
  return (
    <div
      style={{
        maxWidth: "10rem",
      }}
      className="m-2"
    >
      <img src={info.secure_url} className="object-cover" />
    </div>
  );
}

export default ImageComp;
