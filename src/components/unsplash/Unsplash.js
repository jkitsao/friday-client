import React, { useState } from "react";
import UnsplashModal from "./comp/UnsplashModal";
export default function Unsplash({ setValue, value }) {
  const [isSearch, setSearch] = useState(false);
  return (
    <div>
      <UnsplashModal setValue={setValue} value={value} />
    </div>
  );
}
