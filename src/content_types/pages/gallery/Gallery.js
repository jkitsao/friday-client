import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../../../api/axios";
import { useUser } from "../../../firebase/useUser";
import ImageComp from "./ImageComp";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ x: -100, opacity: 0.3 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <ImageComp images={images} />
    </motion.div>
  );
}

export default Gallery;
