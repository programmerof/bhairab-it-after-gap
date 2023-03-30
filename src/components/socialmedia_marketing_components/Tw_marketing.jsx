import React from 'react';

function Tw_marketing() {
  const title = "Project Title";
  const image = "https://via.placeholder.com/300x200";
  const details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sapien eu ligula sodales varius. Quisque dignissim neque ut odio pharetra, ac gravida mauris aliquam. Ut ullamcorper libero at justo eleifend, vel varius sapien euismod.";
  const go = "Learn More";

  return (
   

    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
      
      <li className="mb-10 ml-4 text-center">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title}</h3>
        </p>
        {/* image */}
        <img
            src={image}
            alt="portfolio" 
            className="object-contain w-full h-full md:h-48 md:h-48  cursor-pointer"
         />         
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details}</p>
       
        <a href="/Form">
          <button className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {go}
          </button>
        </a>
      </li>
    </ol>
  );
}

export default Tw_marketing;
