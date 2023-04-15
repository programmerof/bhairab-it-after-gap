import React from 'react';

const Iit = () => {
  const images = [];

  for (let i = 1; i <= 12; i++) {
    const imageName = `/assets/iit/IIT (2074)/IIT (2074)-${i.toString().padStart(2, '0')}.jpg`;
    images.push(imageName);
  }

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default Iit;
