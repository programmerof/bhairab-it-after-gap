import React from 'react';

const Iit = () => {
    const images = Array.from(Array(12), (_, i) => {
        const number = (i+1).toString().padStart(2, '0');
        return {
          src: `public/iit/IIT (2074)/IIT (2074)-${number}.jpg`,
          alt: `Image ${i+1}`,
        };
      });
      

  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {images.map((image, index) => (
        <div key={index} className="w-full lg:w-1/3 px-4 py-2">
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-md object-cover w-full lg:h-96"
          />
        </div>
      ))}
    </div>
  );
};

export default Iit;
