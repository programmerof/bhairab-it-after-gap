import React from "react";

const ImageGallery = () => {
  const images = [];

  for (let i = 1; i <= 83; i++) {
    const imageName = `public/assets/Diglog/Image${i}.jpg`;
    images.push(imageName);
  }

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Discrete Structure ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
