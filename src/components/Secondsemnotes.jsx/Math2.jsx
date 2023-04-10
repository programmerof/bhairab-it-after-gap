import React from "react";

const ImageGallery = () => {
  const images = [];

  for (let i = 1; i <= 10; i++) {
    const imageName = `public/Matht/Math${i}.jpg`;
    images.push(imageName);
  }

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`math second semester notes ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
