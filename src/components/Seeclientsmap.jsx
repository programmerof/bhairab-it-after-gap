import React from 'react';
import Seeclients from './Seeclients';

const data = [
   {
      title: 'Client 1',
      imgUrl: 'public/Bhairabwork/bhairabwork1.jpg',
      link: 'youtube.com',
   },
   {
      title: 'Client 2',
      imgUrl: 'https://example.com/image2.jpg',
      link: 'https://example.com',
   },
   // add more objects as needed
];

function Seeclientsmap() {
   return (
      <div>
         <Seeclients data={data} />
      </div>
   );
}

export default Seeclientsmap;

