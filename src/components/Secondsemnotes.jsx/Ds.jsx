import React from "react";

const DiscreteStructureGallery = () => {
  const images = [];

  for (let i = 1; i <= 83; i++) {
    const imageName = `/assets/Diglog/Image${i.toString().padStart(2, '0')}.jpg`;
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

export default DiscreteStructureGallery;
