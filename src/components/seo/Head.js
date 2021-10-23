import React from "react";
import { Helmet } from "react-helmet";
function Head({ title, name, content }) {
  return (
    <Helmet htmlAttributes>
      <html lang="en" />
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
}

export default Head;
