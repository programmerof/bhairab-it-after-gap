import React from "react";

const ImageGallery = () => {
  const images = [];

  for (let i = 1; i <= 30; i++) {
    const imageName = `/assets/Mp/Mp_${i}.jpg`;
    images.push(imageName);
  }
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Microprocessor ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
