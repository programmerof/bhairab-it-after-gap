import React from 'react';

function Seeclients({ title, imgUrl,link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
         <img
            src={imgUrl}
            alt="portfolio" 
            className="object-contain w-full h-full md:h-48  cursor-pointer"
         />
         <div className="w-full p-4">
         <button 
  className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold border-2 border-blue-300 p-2 rounded-lg"
  type="button" 
  aria-label={title}
  role="button"
  style={{ borderWidth: '3px', padding: '10px 15px' }}
>{title}</button>
         </div>
      </a>
   )
}

export default Seeclients;