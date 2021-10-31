import React, { useEffect, useState } from "react";
import axios from "axios";
import Image_comp from "./Image_comp";
function Images({ page, setLoading, setValue, onClose }) {
  const key = process.env.REACT_APP_UNSPLASH_ID;
  const api = `https://api.unsplash.com/photos?page=${page}`;
  // https://api.unsplash.com/photos?page=1
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(api, {
        params: {
          client_id: key,
        },
      });
      const { data } = res;
      setImages(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setImages(null);
    }
  };
  useEffect(() => {
    fetchImages();
  }, [page]);
  return (
    <div>
      {images && (
        <Image_comp images={images} setValue={setValue} onClose={onClose} />
      )}
    </div>
  );
}

export default Images;
