import React from "react";

function Landing_Image({ image_src }) {
  return (
    <div className="relative lg:w-5/6 xl:w-3/5 lg:mx-auto shadow-lg border rounded-md lg:mb-12 overflow-hidden">
      <img
        className=" w-full h-full object-cover"
        src={image_src}
        alt=""
        style={{
          maxHeight: "800px",
        }}
      />
    </div>
  );
}

export default Landing_Image;
