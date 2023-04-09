import React from 'react';

const Iit = () => {
  const images = [
    {
      src: '/people/nitika.webp',
      alt: 'Image 1',
    },
    {
      src: '/images/image2.jpg',
      alt: 'Image 2',
    },
    {
      src: '/images/image3.jpg',
      alt: 'Image 3',
    },
    {
      src: '/images/image4.jpg',
      alt: 'Image 4',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {images.map((image, index) => (
        <div key={index} className="w-full sm:w-12 md:w-1/3 lg:w-1/4 px-4 py-2">
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>
      ))}
    </div>
  );
};

export default Iit;
