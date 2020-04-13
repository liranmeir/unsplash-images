import React from "react";

export const Photo = ({ key, url }) => {
  return (
    <div key={key}>
      <img src={url} />
    </div>
  );
};
