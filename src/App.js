import React, { useState } from "react";
import { getPhotos, getMockPhotos } from "./unsplashApi";
import "./App.scss";
import { Photo } from "./components/photo/Photo";
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
    <>
      <h1>Photos from Unspash</h1>
      <header className='header'>
        <button onClick={onClick} className='refresh'>
          Refresh
        </button>
      </header>
      <div className='grid-container'>
        {photoVms.map((photo) => (
          <Photo id={photo.id} url={photo.urls.small} />
        ))}
      </div>
    </>
  );
}

export default App;
