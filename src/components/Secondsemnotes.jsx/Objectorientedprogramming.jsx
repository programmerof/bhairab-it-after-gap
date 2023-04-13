import React from "react";

const ImageGallery = () => {
  const images = [];

  for (let i = 1; i <= 10; i++) {
    const imageName = `public/assets/Oop/Oop${i}.jpg`;
    images.push(imageName);
  }

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`oop ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
