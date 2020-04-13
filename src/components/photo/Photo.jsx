import React from "react";
import "./photo.scss";
export const Photo = ({ key, url }) => {
  return (
    <div key={key} className='photo'>
      <img src={url} />
    </div>
  );
};
