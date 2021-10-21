import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../../../api/axios";
import { useUser } from "../../../firebase/useUser";
import ImageComp from "./ImageComp";

function Gallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  //function to fetch the images
  const fetchImages = async (id) => {
    try {
      setIsLoading(true);
      const res = await api.get("/gallery", {
        params: { userId: id },
      });
      setImages(res.data.images);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user && user?.id) {
      fetchImages(user?.id);
    }
  }, [user]);
  return (
    <div>
      <ImageComp images={images} />
    </div>
  );
}

export default Gallery;
