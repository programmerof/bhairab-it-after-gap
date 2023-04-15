import React from 'react';

const Iit2078 = () => {
  const images = [];

  for (let i = 1; i <= 12; i++) {
    const imageName = `/assets/iit/IIT (2078)/IIT (2078)-${i.toString().padStart(2, '0')}.jpg`;
    images.push(imageName);
  }

  return (
    <div className="flex flex-col items-center">
      {images.map((image, index) => (
        <div key={index} className="w-full my-2">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Iit2078;
