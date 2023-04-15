import React from "react";

const ImageGallery = () => {
  const images = [];

  for (let i = 1; i <= 30; i++) {
    const imageName = `/assets/Mp/Mp_${i}.jpg`;
    images.push(imageName);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {images.map((image, index) => (
        <div key={index} style={{ width: "200px", height: "200px", margin: "10px" }}>
          <img
            src={image}
            alt={`Microprocessor ${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
