import React, { useState } from "react";
import { getPhotos, getMockPhotos } from "./unsplashApi";
import "./App.scss";

//Helper
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

function App() {
  const [photoVms, setPhotoVms] = useState([]);
  const onClick = async () => {
    // const photosArray = await getPhotos();
    const photosArray = getMockPhotos(); //to NOT hit the API
    console.log(photosArray);

    //rundom
    const photosArrayShuffled = shuffleArray(photosArray);
    const firstPhotos = photosArrayShuffled.slice(0, 4); // take first 4

    const photoVms = firstPhotos.map((photo) => ({
      id: photo.id,
      urls: photo.urls,
    }));

    setPhotoVms(photoVms);
  };

  return (
    <div>
      <div>
        <span> Hit to </span>
        <button onClick={onClick}>Refresh</button>
      </div>
      <div className='grid-container'>
        {photoVms.map((photo) => (
          <div key={photo.key}>
            <img src={photo.urls.small} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
