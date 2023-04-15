import React from 'react';

const Iit2079 = () => {
  const images = [];

  for (let i = 1; i <= 12; i++) {
    const imageName = `public/assets/iit/Introduction to Information Technology (2079)/Introduction to Information Technology (2079)-${i.toString().padStart(2, '0')}.jpg`;
    images.push({
      src: imageName,
      alt: `Image ${i}`,
    });
  }

  return (
    <div className="flex flex-col items-center">
      {images.map((image, index) => (
        <div key={index} className="w-full my-2">
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Iit2079;
