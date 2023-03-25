import React from 'react';

function PortfolioItem({ title, imgUrl,link }) {
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
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               
            </p>
         </div>
      </a>
   )
}

export default PortfolioItem;