import React from 'react';

const Iit2077 = () => {
  const images = [];

  for (let i = 1; i <= 23; i++) {
    const imageName = `/assets/c/C-Programming (2075)/C-Programming-${i.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}.jpg`;
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

export default Iit2077;
