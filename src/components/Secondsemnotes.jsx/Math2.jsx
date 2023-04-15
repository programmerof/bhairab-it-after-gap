import React from "react";

const MathGallery = () => {
  const images = [];

  for (let i = 1; i <= 10; i++) {
    const imageName = `public/assets/Matht/Math${i}.jpg`;
    images.push(imageName);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {images.map((image, index) => (
        <div key={index} style={{ width: "200px", height: "200px", margin: "10px" }}>
          <img
            src={image}
            alt={`Math second semester notes ${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default MathGallery;
