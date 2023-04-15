import React from 'react';

const Showcase = () => {
  const clients = [
    {
      title: 'Client 1',
      imgUrl: '/assets/Bhairabwork/bhairabwork1.jpg',
    },
    { 
      title: 'Client 2',
      imgUrl: '/assets/Bhairabwork/bhairabwork2.jpg',
    },
    {
      title: 'Client 3',
      imgUrl: '/assets/Bhairabwork/bhairabwork3.jpg',
    },
    {
      title: 'Client 4',
      imgUrl: '/assets/Bhairabwork/bhairabwork4.jpg',
    },
    {
      title: 'Client 5',
      imgUrl: '/assets/Bhairabwork/bhairabwork5.jpg',
    },
    {
      title: 'Client 6',
      imgUrl: '/assets/Bhairabwork/bhairabwork6.jpg',
    },
    {
      title: 'Client 7',
      imgUrl: '/assets/Bhairabwork/bhairabwork7.jpg',
    },
    {
      title: 'Client 8',
      imgUrl: '/assets/Bhairabwork/bhairabwork8.jpg',
    },
    {
      title: 'Client 9',
      imgUrl: '/assets/Bhairabwork/bhairabwork9.jpg',
    },
  ];

 return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-3 gap-4">
    <div className="col-span-1 relative">
      <iframe className="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/TXREMapKYjI" title="Video 1" allowFullScreen></iframe>
    </div>
    <div className="col-span-1 relative">
      <iframe className="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/a9oixqsAu-U" title="Video 2" allowFullScreen></iframe>
    </div>
    {clients.slice(0, 7).map((client, index) => (
      <div className="col-span-1" key={index}>
        <img className="w-full h-full object-cover" src={client.imgUrl} alt={client.title} />
      </div>
    ))}
  </div>
  <div className="grid grid-cols-3 gap-4">
    {clients.slice(7).map((client, index) => (
      <div className="col-span-1" key={index}>
        <img className="w-full h-full object-cover" src={client.imgUrl} alt={client.title} />
      </div>
    ))}
  </div>
</div>

);


};

export default Showcase;
