import React from 'react';

const Iit2079 = () => {
  const images = Array.from(Array(12), (_, i) => {
    const number = (i+1).toString().padStart(2, '0');
    
    return {
      
      src: `public/iit/Introduction to Information Technology (2079)/Introduction to Information Technology (2079)-${number}.jpg`,
      
      alt: `Image ${i+1}`,
    };
  });

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
