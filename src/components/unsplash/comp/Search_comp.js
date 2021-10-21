import React, { useState, useEffect } from "react";
import axios from "axios";
import Image_comp from "./Image_comp";
function Search_comp({ query, page, setLoading, setValue, onClose }) {
  const api = `https://api.unsplash.com/search/photos?page=${page}&query=${query}`;
  const key = "l0Q9rfXvRoVv3rM3CvkP1un7VxeN-WKy8XXhNOxBuC0";

  const [images, setImages] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(api, {
        params: {
          client_id: key,
        },
      })
      .then((res) => {
        setLoading(false);
        const { data } = res;
        // this.setState({ persons });
        setImages(data.results);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [page, query]);
  return (
    <div>
      <div className="flex justify-center py-1 items-center">
        <span className="text-lg font-semibold">{query}</span>
      </div>
      <Image_comp images={images} setValue={setValue} onClose={onClose} />
    </div>
  );
}

export default Search_comp;
